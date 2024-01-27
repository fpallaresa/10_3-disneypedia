import React from 'react';
import './CharactersCard.css';
import dummyImage from './assets/disney_picture.jpg';

const CharactersCard = ({ charactersList, onCharacterClick }) => {

    return (
        <div className='characters'>
                {charactersList.map((character) => (
                    <div className='characters__card' key={character._id} onClick={() => onCharacterClick(character)}>
                        <img className='characters__picture' src={character?.imageUrl || dummyImage} alt={character.name} />
                        <p className='characters__title'>{character.name}</p>
                    </div>
            ))}
        </div>
    );
};

export default CharactersCard;
