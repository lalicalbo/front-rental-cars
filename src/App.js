import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './pages/Home'
import Admin from './pages/Admin'
import PageNotFound from './pages/PageNotFound';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/admin" element={<Admin/>} />
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;