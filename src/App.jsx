import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
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
  const [darkMode, setDarkMode] = useState(0)
  const [loading, setLoading] = useState(false)
  const brandApiKey = '+J3QFPKLtFPxLc9zSz2OyBcgi2alaj8b9l0/nQfAS0g='
  const NewsApiKey = "5592b2f9ee6e4433b008774c919b018e"
  const categories = ['', 'For You', 'India', 'World', 'Local', 'Business', 'Technology', 'Entertainment', 'Sports', 'Science']
  const categoryRequestFormat =
  {
    '':    [apiPrefix + 'top-headlines?&country=in&pageSize=10&apiKey=' + NewsApiKey],
    'For You': [apiPrefix + 'top-headlines?country=in&category=technology,sports,general,politics&pageSize=10&apiKey=' + NewsApiKey],
    'India': [apiPrefix + 'everything?country=in&pageSize=10&apiKey=' + NewsApiKey],
    'World': [apiPrefix + 'top-headlines?pageSize=10&apiKey=' + NewsApiKey],
    'Local': [apiPrefix + 'top-headlines?country=in&q=Banglore&pageSize=10&apiKey=' + NewsApiKey],
    'Business': [apiPrefix + 'top-headlines?country=in&category=business&pageSize=10&apiKey=' + NewsApiKey],
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
    categories.forEach(category => {
      initialState[category] = {
        articles: [],
        lastUpdated: null
      };
    });
    return initialState;
  });


  // Example: Update the 'Technology' category with some sample articles
  const updateCategoryNews = (category) => {
    setLoading(true)
    axios.get(categoryRequestFormat[category][0])
      .then((response) => {
        console.log(response.data)
        setNewsStates((prevNewsStates) => ({
          ...prevNewsStates,
          [category]: {
            articles: response.data.articles,
            lastUpdated: new Date()
          }
        }));
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  };

  const propsForNews = {
    newsStates: newsStates,
    categoryRequestFormat: categoryRequestFormat,
    darkMode: darkMode,
    updateCategoryNews: updateCategoryNews,
    brandApiKey: brandApiKey,
    NewsApiKey: NewsApiKey
  }

  useEffect(() => {
    updateCategoryNews('')
  }, [])

  return (
    <div className='relative bg-[#292a2d] font-Google font-medium'>
      <Navbar changeThemeMode={changeThemeMode} />
      {console.log("darkMode :" + darkMode)}
      <Routes>
        {

          categories.map((category, index) => {
            return (<Route key={index} path={`/${category}`} element={<News propsForNews={propsForNews} category={category} key={category + '100'} />} />)
          })
        }
      </Routes>
    </div>

  )
}


export default App

// e01a7b4366cf4dfdae4a3ab1f752c360
