import './App.css';
import Header from './components/Header/Header.js';
import LoadButton from './components/LoadButton/LoadButton';
import NavButtons from './components/NavButtons/NavButtons';
import PostList from './components/PostList/PostList';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavButtons/>
      <PostList/>
      <LoadButton/>
    </div>
  );
}

export default App;
