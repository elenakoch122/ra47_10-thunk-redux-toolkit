import './App.css';
import StarWars from './components/StarWars';
import Photo from './components/Photo';

export default function App() {
  return (
    <div className="App">
      <StarWars />
      <hr />
      <Photo />
    </div>
  );
}
