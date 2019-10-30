import React from 'react';
import ContactCard from './ContactCard';
import './MovieCard.css'

class MovieCards extends React.Component{
  render(){
    return(
      <div className= 'Card'>
        <div className= 'Picture'><img src = {ContactCard.resource_url} alt = 'Domage'/></div>
        <div className= 'Tittle'><h1>{ContactCard.title}</h1></div>
        <div className= 'CheckBox'><h2>Sélectionner:</h2><input type="radio" name="radio" value="radio"/>  </div>
      </div>
      
    )
  
  }
}

export default MovieCards;