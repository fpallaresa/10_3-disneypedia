import CharactersList from './components/CharactersList/CharactersList'
import Buttons from './components/Buttons/Buttons'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Disneypedia</h1>
      <CharactersList></CharactersList>
      <Buttons></Buttons>
    </div>
  );
}

export default App;
