
import './App.scss';
import imagen from "./resources/imagen-banner3.jpeg"
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
     <header>
      <div className="img">
      <img src={imagen} />
      </div> 
      <div className="form">
        <RegisterForm />
        </div> 
      </header>
    </div>
  );
}

export default App;
