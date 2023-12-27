import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Card(props) {
    const { title, url, urlToImage, publishedAt, source, darkMode, brandApiKey, NewsApiKey } = props
    const [mainNews, updateMainNews] = useState({
        title: title,
        url: url,
        urlToImage: urlToImage,
        hours: 0,
        source: source,
        brandLogoUrl: '',
        threeRelatedNews: []
    })
    const hoursAgo = (publishedAt) => {
        const date = new Date(publishedAt);
        const hours = Math.abs(new Date() - date) / (1000 * 60 * 60);
        return Math.round(hours);
    }
    const brandLogoImageUrl = async (brand, brandApikey) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + brandApikey,
            },
        };

        try {
            const response = await axios.get(`https://api.brandfetch.io/v2/brands/${encodeURIComponent(brand)}`, options);
            const logo = response.data.logos.find((logo) => logo.type === 'logo');
            return logo ? logo.formats[0].src : '/Images/nullImageUrl.png';
        } catch (error) {
            console.error('Brandfetch API Error:', error);
            return '/Images/nullImageUrl.png';
        }
    };


    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const titlestring=title.split(' ')
                const querytitle=titlestring[0]+' '+titlestring[1]
                const response = await axios.get('https://newsapi.org/v2/everything?q=' + encodeURI(querytitle) + '&pageSize=3&sortBy=publishedAt&apiKey=' + NewsApiKey);
                console.log('related news', response.data.articles)
                const threeRelatedNews = response.data.articles.map(article => ({
                    title: article.title,
                    url: article.url,
                    urlToImage: article.urlToImage,
                    hours: hoursAgo(article.publishedAt),
                    source: article.source.name,
                    brandLogoUrl: '',
                }));
                console.log('threeRelatedNews', threeRelatedNews)
                await Promise.all(threeRelatedNews.map(async (news) => {
                    const url = new URL(news.url).hostname;
                    const brandLogoUrl = await brandLogoImageUrl(encodeURIComponent(url), brandApiKey);
                    news['brandLogoUrl'] = brandLogoUrl || '/Images/nullImageUrl.png';
                }));
                const mainurl = new URL(mainNews.url).hostname;

                const mainBrandLogo = await brandLogoImageUrl(mainurl, brandApiKey) || '/Images/nullImageUrl.png';

                updateMainNews((prevMainNews) => ({
                    ...prevMainNews,
                    hours: hoursAgo(publishedAt),
                    threeRelatedNews: threeRelatedNews,
                    brandLogoUrl: mainBrandLogo,
                }));
            } catch (error) {
                console.log(error);
            }
        };

        fetchNewsData();
    }, [title, source]);


    return (
        <div className="mt-8 maincard bg-[#1f1f1f] text-white h-[350px] flex justify-between w-full space-x-1 p-2 border-t-[1px] border-t-[#1f1f1f] rounded-t-lg border-b-[1px] border-b-white">
            <div className='card p-1 rounded-lg overflow-hidden w-72 h-[330px] '>
                {mainNews.urlToImage && (
                    <img className='w-full h-[50%] rounded-lg' src={mainNews.urlToImage} alt="" />
                )}
                <div className="cardcontent mt-2 p-2 h-[45%] flex flex-col justify-between space-y-2">
                    {mainNews.brandLogoUrl && (
                        <img src={mainNews.brandLogoUrl} className='h-4 w-12' alt="" />
                    )}
                    <div className="textcontent h-20">
                        <a href={mainNews.url}>
                            <p className='text-xl font-normal leading-6 line-clamp-3'>
                                {mainNews.title}
                            </p>
                        </a>
                    </div>
                    <span className='text-sm'>{mainNews.hours} hours ago</span>
                </div>
            </div>

            {mainNews.threeRelatedNews.length !== 0 ? (
                <div className="relatednews px-3 py-4 space-y-3">
                    {/* Render related news based on whether brandLogoUrl is available */}
                    {mainNews.threeRelatedNews.map((relatedNews, index) => (
                        <div key={index}>
                            {relatedNews.brandLogoUrl && (
                                <img src={relatedNews.brandLogoUrl} className='h-4 w-12' alt="" />
                            )}
                            <p className='leading-4'>{relatedNews.title}</p>
                            <span className='text-sm'>{relatedNews.hours} hours ago</span>
                        </div>
                    ))}
                </div>
            ) : ''}
        </div>
    );

}

export default Card