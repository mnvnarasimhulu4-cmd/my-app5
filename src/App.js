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

      <h1>Welcome to the Form Page</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label><br /><br />
        <label>
          Email:
          <input type="email" name="email" />
        </label><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
