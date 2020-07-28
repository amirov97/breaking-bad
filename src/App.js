import React , {useState , useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Header from "./components/header/header";
import CharactersGrid from "./components/characters/charactersGrid";
import Search from "./components/search/Search";


const App = ()=> {
    const [items , setItems] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [query , setQuery] = useState('')

    useEffect(()=>{
         axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
             .then(results=>{
                 console.log(results.data)
                 setItems(results.data)
                 setIsLoading(false)
             })
    },[query])



  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=>setQuery(q)} />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
