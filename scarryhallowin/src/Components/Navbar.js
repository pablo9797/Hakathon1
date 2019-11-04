import React from 'react';
import './Navbar.css';

const Navbar = (props) =>{
  return(
      <div className = "App-Buttons">
        <div>
        <button onClick = {props.getMovies} className='navButton' value = 'random'>Notre selection Halloween</button>
        </div>
        <div>
        <input onChange={props.searchField} value={props.input} id='searchField' type = 'text' placeholder = 'Veuillez saisir un nom de film'></input>

        <button onClick = {props.getOneMovies} className='navButton' value = 'search'>Rechercher</button>

        
        </div>
        <img src='http://ekladata.com/RVTBH1Fj5FrxVswfeyWQUd8jNRU.png' href='#' style={{width:'6%', marginRight:'2rem'}} ></img>
      </div>

    );
  }


export default Navbar;







