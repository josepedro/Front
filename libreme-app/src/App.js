import logo from './logo.svg';
import './App.css';
import TextBox from './components/TextBox'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
            <h1>Libre Me</h1>  
        </div>
        <TextBox />
      </header>
    </div>
  );
}

export default App;
