import Jobs from './components/Jobs';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Jobs />
      </div>
    </BrowserRouter>
  );
}

export default App;
