import React from 'react';
import Popup from 'reactjs-popup';
import YouTube from 'react-youtube';
import './Popup.css';


function PopupMovie(props) {
  const opts = {
    height: '195',
    width: '320',
    playerVars: {
    autoplay: 0
    }
  };
  return (
    <div>
      <Popup modal trigger={<button className='popupmovie'>Plus d'infos</button>}>
        <div className='container'>
          <h2 className='Popup-title'>{props.title}</h2>
          <h3 className='Popup-year'>{props.production_year}</h3>
          <p style={{color:'white'}} className='Popup-director'><span>Réalisateur : </span>{props.director}</p>
          <p className='Popup-synopsis'><span>Résumé : </span>{props.synopsis}</p>
          <YouTube
          videoId={props.trailer}
          opts={opts}
          />
        </div>
      </Popup>
    </div>
  );
}

export default PopupMovie;
