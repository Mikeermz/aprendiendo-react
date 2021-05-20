import './App.css';
import Counter from './Counter'

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Hola Soy mikee y este es mi sitio</h1>
      <Counter 
        title="Soy el contador en app" 
        init="0" 
        secondary={0}
      />
    </header>
  </div>
);

export default App;
