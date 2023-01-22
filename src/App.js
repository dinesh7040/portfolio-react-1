import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import './css/Navbar.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
