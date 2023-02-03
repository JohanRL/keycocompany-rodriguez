import './components/NavBar/style.css';
import './components/Container/style.css';
import './components/Footer/style.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';
import Footer from './components/Footer/Footer';



function App() {
  return (
      <header>
        <NavBar />
        <ItemListContainer greeting="Welcome to KeyCo Store!"/>
        <Footer />
      </header>
  );
}

export default App;
