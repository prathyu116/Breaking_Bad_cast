import React ,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css'
import Header from './Components/Header/Header';
import CharacterGrid from './Components/CharacterGrid/CharacterGrid';
import Search from './Components/Search/Search';
function App() {
  const [item,setItem]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [query,setQuery] =useState('')

  useEffect(()=>{
    const fetchItem= async ()=>{
      const result=await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data);
      setItem(result.data)
      setIsLoading(false)
    }
    fetchItem()
  },[query])

 
  return (
   <div className="container">
     <Header />
     <Search getQuery={(q)=>setQuery(q)}/>
     <CharacterGrid item={item} isLoading={isLoading}/>
   </div>
  );
}

export default App;
