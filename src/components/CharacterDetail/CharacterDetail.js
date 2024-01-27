import React from "react";
import './CharacterDetail.css';
import dummyImage from './assets/disney_picture.jpg';

const API_URL_CHARACTER = "https://api.disneyapi.dev/characters/";

const CharacterDetail = ({ character, onClose }) => {

    const [characterData, setCharacterData] = React.useState(null);

    React.useEffect(() => {
        if (character) {
            fetch(`${API_URL_CHARACTER}${character._id}`)
                .then((response) => response.json())
                .then((data) => {
                    setCharacterData(data.data);
                })
                .catch((error) => {
                    console.error('Error accediendo a los datos:', error);
                });
        }
    }, [character]);

    return (
        <div className='character__detail'>
            <div className='character__info'>
                <p className='character__title'>{characterData?.name}</p>
                <img className='character__picture' src={characterData?.imageUrl  || dummyImage} alt={characterData?.name} />
                {characterData?.allies.length > 0 && (<p className='character__data'>Aliados: <span>{characterData.allies.join(', ')}</span></p>)}
                {characterData?.enemies.length > 0 && (<p className='character__data'>Enemigos: <span>{characterData.enemies.join(', ')}</span></p>)}
                {characterData?.films.length > 0 && (<p className='character__data'>Películas: <span>{characterData.films.join(', ')}</span></p>)}
                {characterData?.parkAttractions.length > 0 && (<p className='character__data'>Atracciones: <span>{characterData.parkAttractions.join(', ')}</span></p>)}
                {characterData?.shortFilms.length > 0 && (<p className='character__data'>Cortos: <span>{characterData.shortFilms.join(', ')}</span></p>)}
                {characterData?.tvShows.length > 0 && (<p className='character__data'>Series de TV: <span>{characterData.tvShows.join(', ')}</span></p>)}
                {characterData?.videoGames.length > 0 && (<p className='character__data'>Videojuegos: <span>{characterData.videoGames.join(', ')}</span></p>)}
            </div>
            <div className='character__background' onClick={onClose}></div>
        </div>
    );

}

export default CharacterDetail;
