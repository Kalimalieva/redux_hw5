import './App.css';
import Main from "./components/main/Main";
import About from "./components/about/About";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";



function App() {

    return (
        <Container>
            <BrowserRouter>
                <div className='App'>
                    <Nav/>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Container>
    )

}

export default App;
