import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Navbar from './components/Navbar'
import News from './components/News'
import axios from 'axios'

function App() {
  const apiPrefix = 'https://newsapi.org/v2/'
  // const brandApiKeys = [
  //   'KxlkbJGu8djgZ7m8xh1pnncv33o5/QINLUD4LcejEqM=',
  //   'rPqIwN0AZs6H9pHZ2dulBNM+LNDVAbrERoV4pceEQ4g=',
  //   'EVj3T3Y7J8B7zyXTuOYhdFprin18AU8Qr9X0enp06IA=',
  //   '0b/Ab4HF6w9nYY43WZNPwFbY2OI44O6rY92hjSkwN30=',
  //   '17R2w+I7aL6CFAALvhVvV7g6IHnF1faviLGUWvHjM00=',
  //   'C0V+t9TkDiVEVOFoNwPlDKqfcCkp+ubrnt3uRR5dV94=',
  //   '1MSnmDtQ7xOkdqXrLHXtmNIYUH992yuqqa3yv6x7LHI=',
  //   'aFY/HxqKOdEACdKhtLZyXc1Zkpte1slgszOxBfGbujk=',
  //   'qW6kcC1pOlVLUliQRfESgXbmlQ2wYzX05kFr017Ft1o=',
  //   'WOReBo9laUjSFXmkOVfPN5GjqGiWI2HGUvzGaTsl/rE=',
  //   'qZG85dM7WUVXRP702FVdp6VG6Xp8oBghd4TfTuhxuZM=',
  //   'jGb5uSM9O/ZlfgBr9ZpNT3XiyvoGkTptJmzU8SwbMms=',
  //   'PBoyVn+1l7nMgP+mSUm/290xTnZ/UPBA/aDNvYXpN5I='
  // ];
  const [darkMode, setDarkMode] = useState(1)
  const [loading, setLoading] = useState(true)
  const [customQuery,setCustomQuery]=useState("");
  const navigate=useNavigate();
  const showCustomQuery=(q)=>{
     navigate('/customQuery');
     setCustomQuery(q);
     setNewsStates((prevNewsStates) => ({
        ...prevNewsStates,
        ['customQuery']: {
          articles:     [],
          totalResults: 0,
          page:1,
          lastUpdated: null
        }
     }));
  }
  const [flag,setFlag]=useState(0)
  const newsapikeys=["73c9011f0e3e4d4b9a7305b14be550f1","680ac1189bc246bebe1c999497ab4b3f","5592b2f9ee6e4433b008774c919b018e"]
  const NewsApiKey = newsapikeys[flag]
    
  const weatherApi="cd8345a2878c48679d271435231607"
  const categories = ['', 'India', 'World', 'Local', 'Business', 'Technology', 'Entertainment', 'Sports', 'Science']
  const categoryRequestFormat =
  {   
    'customQuery':[apiPrefix + 'everything?q='+customQuery+'&sortBy=publishedAt&pageSize=10&apiKey=' + NewsApiKey],
    '':    [apiPrefix + 'everything?q=haryana&sortBy=publishedAt&pageSize=10&apiKey=' + NewsApiKey],
    'India': [apiPrefix + 'top-headlines?country=in&pageSize=10&apiKey=' + NewsApiKey],
    'World': [apiPrefix + 'top-headlines?pageSize=10&apiKey=' + NewsApiKey],
    'Local': [apiPrefix + 'top-headlines?q=Bengaluru&pageSize=10&apiKey=' + NewsApiKey],
    'Business': [apiPrefix + 'top-headlines?sources=moneycontrol&country=in&category=business&pageSize=10&apiKey=' + NewsApiKey],
    'Technology': [apiPrefix + 'top-headlines?country=in&category=technology&pageSize=10&apiKey=' + NewsApiKey],
    'Entertainment': [apiPrefix + 'top-headlines?country=in&category=entertainment&pageSize=10&apiKey=' + NewsApiKey],
    'Sports': [apiPrefix + 'top-headlines?country=in&category=sports&pageSize=10&apiKey=' + NewsApiKey],
    'Science': [apiPrefix + 'top-headlines?country=in&category=science&pageSize=10&apiKey=' + NewsApiKey]
  } // categoryRequestFormat is a dictionary that maps each category to its corresponding API request URL and API key       
  const changeThemeMode = () => {
    darkMode === 0 ? setDarkMode(1) : setDarkMode(0);
  }
  
  // Initialize state variables for each category
  const [newsStates, setNewsStates] = useState(() => {
    const initialState = {};
    initialState['customQuery']={
      articles: [],
      totalResults: 0,
      page:1,
      lastUpdated: null
    };
    categories.forEach(category => {
      initialState[category] = {
        articles: [],
        totalResults: 0,
        page:1,
        lastUpdated: null
      };
    });
    return initialState;
  });


  
  const updateCategoryNews = async (category,page) => {
    console.log('Updating news for category:', category);
    setFlag((prevFlag)=>(prevFlag+1)%3)
    
    try {
      const response = await axios.get(categoryRequestFormat[category][0]+`&page=${page}`);
  
      setNewsStates((prevNewsStates) => ({
        ...prevNewsStates,
        [category]: {
          articles:     newsStates[category].articles.concat(response.data.articles),
          totalResults: response.data.totalResults,
          page:page,
          lastUpdated: new Date()
        }
      }));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      // You might want to set an error state or display an error message to the user
    } finally {
      if(category!='customQuery') navigate('/'+category);
    }
  };
  

  const propsForNews = {
    newsStates: newsStates,
    categoryRequestFormat: categoryRequestFormat,
    darkMode: darkMode,
    updateCategoryNews: updateCategoryNews,
    NewsApiKey: NewsApiKey,
    loading: loading,
    customQuery:customQuery
  }

  useEffect(() => {
    const fetchData = async () => {
      // Check if articles for the default category ('') are already present
      if (newsStates[''].articles.length === 0) {
        // If not, make the API request
        await updateCategoryNews('',1);
      }
    };
  
    fetchData();
    console.log('App component mounted');
    console.log(newsStates)
  }, []); 


  return (
    <div className={`relative  ${darkMode? 'bg-[#292a2d]' : 'bg-[#fafafa]'} font-Google font-medium overflow-hidden`}>
      <Navbar changeThemeMode={changeThemeMode} categories={categories} showCustomQuery={showCustomQuery} darkMode={darkMode} />
      { 
     ( <Routes>
        {

          categories.map((category, index) => {
            return (<Route key={index} path={`/${category}`} element={<News propsForNews={propsForNews} category={category} key={category + '100'} />} />)
          })
        }
  {
   <Route path='/customQuery' element={<News propsForNews={propsForNews} category='customQuery' key='customQuery' />} />
  }
              </Routes>)
      }
    </div>

  )
}


export default App

// 680ac1189bc246bebe1c999497ab4b3f

