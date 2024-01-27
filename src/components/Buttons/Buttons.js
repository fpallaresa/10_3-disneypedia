import React from 'react';
import './Buttons.css';

const Buttons = ({ pageNumber, goBack, goForward, previousPage, nextPage }) => {  

    return (
    <div className='characters__buttons'>
        <button className='characters__button' onClick={goBack} disabled={previousPage === null}>
        Anterior
        </button>
      <span className='characters__page'>{pageNumber}</span>
      <button className='characters__button' onClick={goForward} disabled={nextPage === null}>
        Siguiente
      </button>
    </div>
  );
};

export default Buttons;
