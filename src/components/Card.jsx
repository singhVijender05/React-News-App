import React, { useEffect } from 'react'
import axios from 'axios'

import { useState } from 'react'

function Card(props) {
    const { title, url, urlToImage, publishedAt, source, darkMode,  NewsApiKey } = props
    const [mainNews, updateMainNews] = useState({
        title: title,
        url: url,
        urlToImage: urlToImage,
        hours: 0,
        source: source,
        threeRelatedNews: []
    })
    const hoursAgo = (publishedAt) => {
        const date = new Date(publishedAt);
        const hours = Math.abs(new Date() - date) / (1000 * 60 * 60);
        return Math.round(hours);
    }
     
    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                let response=null;
                let i=0;
                let querytitle = title;
                do{
                    querytitle = title.split(' ').slice(i, i+2).join(' ');
                    response = await axios.get('https://newsapi.org/v2/everything?q=' + encodeURI(querytitle) + '&pageSize=6&sortBy=publishedAt&apiKey=' + NewsApiKey);
                    i+=1
                }while(response.data.articles.length==0);

                const threeRelatedNews = response.data.articles.map(article => ({
                    title: article.title,
                    source: article.author,
                    url: article.url,
                    hours: hoursAgo(article.publishedAt),
                    source: article.source.name,
                })).filter((article) => article.title !== title  && article.title!='[Removed]').slice(0, 3);
               
            

                updateMainNews((prevMainNews) => ({
                    ...prevMainNews,
                    hours: hoursAgo(publishedAt),
                    threeRelatedNews: threeRelatedNews,
                }));
            } catch (error) {
                console.log(error);
            }
        };

        fetchNewsData();
    }, []);
   

    return (
        <>
                  <div className='card p-1 rounded-lg overflow-hidden w-[40%] h-[330px] '>
                 
                    <img className='w-[80%] h-[50%] rounded-lg' src={mainNews.urlToImage || '/public/Images/noimg.jpg'} alt="" />
                

                <div className="cardcontent mt-2 py-1 h-[45%] flex flex-col justify-between space-y-2">
                    {/* {mainNews.brandLogoUrl && (
                        // <img src={mainNews.brandLogoUrl} className='aspect-16/9 max-w-10 max-h-6' alt="" />
                    )} */}
                    <span className='text-sm font-Google'>{mainNews.source}</span>

                    <div className="textcontent h-20">
                        <a href={mainNews.url} target='_blank'>
                            <p className='text-xl font-normal leading-6 line-clamp-3'>
                                {mainNews.title}
                            </p>
                        </a>
                    </div>
                    <span className='text-sm'>{mainNews.hours} hours ago</span>
                </div>
            </div>

            {mainNews.threeRelatedNews.length !== 0 ? (
                <div className="relatednews px-3  space-y-[10px] w-[50%]">
                    {/* Render related news based on whether brandLogoUrl is available */}
                    {mainNews.threeRelatedNews.map((relatedNews, index) => (
                        <div key={index} className='flex flex-col space-y-[6px]'>
                             
                                <div className='flex items-center'>
                             
                                    <span className='text-sm font-Google'>{relatedNews.source}</span>
                                </div>
                            
                            <a target='_blank' href={relatedNews.url}> <p className='line-clamp-2'>{relatedNews.title}</p></a>
                           
                            <span className='text-xs'>{relatedNews.hours} hours ago</span>
                            {
                                index!=mainNews.threeRelatedNews.length-1 && <hr />
                            }
                        </div>
                    ))}
                </div>
            ) : ''}
        </>
    );

}

export default Card