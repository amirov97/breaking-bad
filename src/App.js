import React , {useState , useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Header from "./components/header/header";
import CharactersGrid from "./components/characters/charactersGrid";


const App = ()=> {
    const [items , setItems] = useState([])
    const [isLoading , setIsLoading] = useState(true)

    useEffect(()=>{
         axios.get(`https://www.breakingbadapi.com/api/characters`)
             .then(results=>{
                 console.log(results.data)
                 setItems(results.data)
                 setIsLoading(false)
             })
    },[])

  return (
    <div className="container">
      <Header />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
