import Header from './components/Header';
import Form from './components/Form';
import './Styles/App.css';
import EgresoContainer from './components/EgresoContainer';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Header />
      <Form />
      <EgresoContainer />
      </div>
    </div>
  );
}

export default App;
