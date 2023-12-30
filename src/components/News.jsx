import React, { useEffect } from 'react';
import Card from './Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loadingbar from './Loadingbar';
import Weathercard from './Weathercard';

function News(props) {
  const { newsStates, categoryRequestFormat, darkMode, updateCategoryNews, brandApiKey, NewsApiKey,loading } = props.propsForNews;
  const category  = props.category;
  const fetchMoreData = async () => {
    updateCategoryNews(category,newsStates[category].page+1);
  }
  useEffect(() => {
    const fetchData = async () => {
      if (newsStates[category].articles.length === 0) {
       await updateCategoryNews(category,1);
      }
      console.log('News component mounted');
      console.log(newsStates)
    };

    fetchData();
  }, []);

  return (
    <>
    {
      loading && <Loadingbar />
    }
    <div className='mx-auto w-[70%] mt-5'>
     
      { !loading &&
      <>
      <Weathercard category={category} />
      <div className='mt-4 border-t-[1px] bg-[#1f1f1f] border-[#1f1f1f] rounded-t-lg p-4 '>
        <div className='flex flex-wrap justify-center'>

        <InfiniteScroll
          dataLength={newsStates[category].articles.length}
          next={fetchMoreData}
          hasMore={newsStates[category].articles.length < newsStates[category].totalResults}
          loader={<Loadingbar />}
        >
          {newsStates[category].articles.map((article, index) => {
            return (
              <Card
              key={index}
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              source={article.source.name}
              darkMode={darkMode}
              brandApiKey={brandApiKey}
              NewsApiKey={NewsApiKey}
              />
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
