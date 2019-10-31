import React from 'react';
import './MovieCard.css';


class MovieCards extends React.Component{
  render(){
    return(
      <div className= 'Card'>
        <div className= 'Picture'><img src = {this.props.image} alt = 'picture'/></div>
        <div className= 'CheckBox'><p><i className="fas fa-info-circle"></i>Ajouter<input type="checkbox" name="radio" value="radio"/></p>  </div>
      </div>
    
    )
    
  
  }
}

export default MovieCards;