import './App.css';
import Counter from './Counter'

const App = () => (
  <div className="App">
    <header className="App-header">
    <Counter 
      title="Soy el contador en app" 
      init="0" 
      secondary={0}
    />
    </header>
  </div>
);

export default App;
