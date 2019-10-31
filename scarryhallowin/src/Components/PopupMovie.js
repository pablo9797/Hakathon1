import React from 'react';
import Popup from 'reactjs-popup';
import ContactCard from './ContactCard';
import './Popup.css';

/* Pour test
const movie1 ={
director: "David R. Ellis",
original_title: "Final Destination 2",
production_year: 2003,
synopsis: "Tandis qu'elle s'apprête à partir en week-end avec des amis, Kimberly Corman a la soudaine vision d'un effroyable accident de la route. Elle y voit la mort de plusieurs personnes, dont la sienne. Tout semble si vrai que la jeune fille décide de bloquer l'accès à l'autoroute. Elle et ceux qu'elle a stoppés assistent, impuissants, à la spectaculaire catastrophe qui se déroule sous leurs yeux. Ils ont tous échappés de justesse à la mort. Kimberly sait pourtant qu'elle n'évitera pas si facilement son destin. Elle décide d'aller demander l'aide de la seule personne qui a connu la même situation, Clear Rivers, l'unique survivante du vol 180. Avec le groupe de rescapés, les deux jeunes filles se lancent dans une course contre la montre.",
tagline: "Attention, la mort peut être plus proche qu'il n'y parait.",
trailer: "yw4gRrBg48E"
}
*/

const PopupMovie = (props) => (
  <Popup open={<button className='Popup-button'>En savoir +</button>} position="top left">
    {close => (
      <div>
        test text
        <h3 className='Popup-title'>{ContactCard.title}</h3>
        <h4 className='Popup-year'>{ContactCard.year}</h4>
        <p className='Popup-director'><span>Réalisateur : </span>{ContactCard.director}</p>
        <p className='Popup-synopsis'><span>Résumé : </span>{ContactCard.synopsis}</p>
        <p><img src={ContactCard.trailer}/></p>
        <a className="Pop-close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);


export default PopupMovie;
