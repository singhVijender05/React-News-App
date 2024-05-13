import React, { useEffect } from 'react';
import Card from './Card.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loadingbar from './Loadingbar.jsx';
import Weathercard from './Weathercard.jsx';

function News(props) {
  const { newsStates, categoryRequestFormat, darkMode, updateCategoryNews,  NewsApiKey,loading ,customQuery} = props.propsForNews;
  const category  = props.category;
  const fetchMoreData = async () => {
    updateCategoryNews(category,newsStates[category].page+1);
  }
  useEffect(() => {
    const fetchData = async () => {
      if (newsStates[category].articles.length === 0) {
       await updateCategoryNews(category,1);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {
      loading && <Loadingbar loading={loading}/>
    }
    <div className='mx-auto w-[70%] mt-5'>
     
      { !loading &&
      <>
      <Weathercard category={category} customQuery={customQuery} darkMode={darkMode} />
      <div className={`mt-4 border-t-[1px] ${darkMode? 'bg-[#1f1f1f] border-[#1f1f1f]': 'bg-[#7291C0] border-[#F5F5F5]' }  rounded-t-lg p-4 `}>
        <div className='flex flex-wrap justify-center'>

        <InfiniteScroll
          dataLength={newsStates[category].articles.length}
          next={fetchMoreData}
          hasMore={newsStates[category].articles.length < newsStates[category].totalResults}
          loader={<Loadingbar />}
        >
          {newsStates[category].articles.map((article, index) => {
            return (
              <div key={index} className={`maincard ${index==0? 'rounded-t-lg' : ''} ${darkMode? 'bg-[#1f1f1f] text-white ': 'bg-[#7291C0] text-black '} border-b-[1px] border-b-white  h-[350px] justify-between flex w-full space-x-1 p-2  `}>

              <Card
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              source={article.source.name}
              darkMode={darkMode}
              NewsApiKey={NewsApiKey}
              />
              </div>
              )
            })}
            </InfiniteScroll>
          {/* {
            newsStates[category].articles.map((article, index) => {
              return (
                <h1 key={index}>{article.title}</h1>
              )
            })
          } */}
        </div>
      </div>
      </>
      }
    </div>

    </>
  );
}

export default News;
