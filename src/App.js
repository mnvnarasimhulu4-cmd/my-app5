import './App.css';

function App() {
  return (
    <div className="App">
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

export default App;