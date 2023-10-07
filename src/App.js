import './App.css';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
//import characters from './data.js';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Details';

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = async (id) => {

      //
      const find = characters.find((character) => character.id === +id);
      console.log('find', find);
      if (find) return window.alert("¡Este personaje ya fue agregado!");


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

   const onClose = (id)=> {

   const response = characters.filter((character) => character.id !== id);
   setCharacters(response);
   }

   const random = (id) => {
      const randomId = Math.floor(Math.random() * 825) + 1;
      onSearch(randomId);
   }

   return (
      <div className='App'>
        <Nav onSearch={onSearch} />
        {/*<Cards
         characters={characters}
         onClose={onClose}
         />*/}
         <Routes>
            <Route path='/home' 
               element={
                  <Cards characters={characters} onClose={onClose}/>
               }
            />
             <Route path='/about' element={ <About/> } />
             <Route path='/detail/:id' element={ <Detail/> } />
             <Route path='*' element={ <h1>404 Not Fount </h1> } />
         </Routes>
      </div>
   );
}

export default App;
