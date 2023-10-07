import './App.css';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
//import characters from './data.js';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = async (id) => {
   try{
      const response = await axios (`https://rickandmortyapi.com/api/character/${id}`);
      const data = response.data;

      if(data.name){
         setCharacters([...characters, data])
      }else {
         window.alert("¡No hay personajes en este id!");
      }

   } catch (error){
      console.log('error en api ', error);
   }
    
   };
   return (
      <div className='App'>
        <Nav onSearch={onSearch} />
        <Cards characters={characters} />
      </div>
   );
}

export default App;
