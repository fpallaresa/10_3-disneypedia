import React from "react";
import CharactersCard from '../CharactersCard/CharactersCard';
import CharacterDetail from '../CharacterDetail/CharacterDetail';
import Buttons from '../Buttons/Buttons';
import Loading from '../Loading/Loading';
import './CharactersList.css'

const API_URL = "https://api.disneyapi.dev/character?page=";

const CharactersList = () => {
    const [charactersList, setCharactersList] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [previousPage, setPreviousPage] = React.useState(null);
    const [nextPage, setNextPage] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [selectedCharacter, setSelectedCharacter] = React.useState(null);

    React.useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}${page}`)
            .then((response) => response.json())
            .then((data) => {
                setCharactersList(data.data);
                setPreviousPage(data.info.previousPage);
                setNextPage(data.info.nextPage);
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error accediendo a los datos:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [page]);

    const goBack = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const goForward = () => {
        setPage(page + 1);
    };

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
    };

    const handleCloseModal = () => {
        setSelectedCharacter(null); 
    };

    return (
        <> 
            {loading && <Loading></Loading>}
            {selectedCharacter && <CharacterDetail character={selectedCharacter} onClose={handleCloseModal} />}
            <Buttons 
                pageNumber={page} 
                goBack={goBack} 
                goForward={goForward} 
                previousPage={previousPage} 
                nextPage={nextPage}
            />
            
            <CharactersCard charactersList={charactersList} onCharacterClick={handleCharacterClick} />

        </>
    );
}

export default CharactersList;
