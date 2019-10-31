import React from 'react';
import ContactCard from './ContactCard';
import './MovieCard.css';
// import  PopupMovie from  './PopupMovie';

class MovieCards extends React.Component{
  render(){
    return(
      <div className= 'Card'>
        <div className= 'Picture'><img src = {ContactCard.resource_url} alt = 'Domage'/></div>
        <div className= 'Tittle'><h1>{ContactCard.title}</h1></div>
        <div className= 'CheckBox'><h2>Sélectionner:</h2><input type="checkbox" name="radio" value="radio"/>  </div>
        <PopupMovie/>
      </div>
    
    )
    
  
  }
}

export default MovieCards;