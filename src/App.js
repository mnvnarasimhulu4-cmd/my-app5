import './App.css';

function App() {
  return (
    <div className="App">
      <nav style={{
        backgroundColor: '#282c34',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        color: 'white'
      }}>
        <a href="#home" style={{ color: 'white' }}>Home</a>
        <a href="#about" style={{ color: 'white' }}>About</a>
        <a href="#contact" style={{ color: 'white' }}>Contact</a>
      </nav>

      <h1>Welcome to the Navbar Page</h1>
    </div>
  );
}

export default App;