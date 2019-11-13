import React from 'react';
import './MovieCard.css';
import PopupMovie from './PopupMovie';

const noImage="http://orgogrowth.com/wp-content/uploads/2019/03/NoImage_Available.png"

class MovieCards extends React.Component{

  render(){
    return(
      <div className= 'Card'>
        <div className= 'Picture'><img src = {this.props.image?this.props.image:noImage} alt = 'picture'/></div>
        <div className= 'CheckBox'><p>Ajouter<input type="checkbox" name="check" value="check"/></p></div>
        <PopupMovie 
        title={this.props.title}
        year={this.props.production_year}
        director={this.props.director}
        synopsis={this.props.synopsis}
        trailer={this.props.trailer}
        />
      </div>
    
    )
    
  
  }
}

export default MovieCards;