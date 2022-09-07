import './App.css';
import Main from "./components/main/Main";
import About from "./components/about/About";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import Contact from "./components/contact/Contact";
import Text from "./text/Text";
import Aigul from "./components/Aigul";
import GeekTech from "./components/geektech/GeekTech";



function App() {
    return (
        <Container>
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/text" element={<Text/>}/>
                    <Route path="/user" element={<Aigul/>}/>
                    <Route path="/geek" element={<GeekTech/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
    )

}

export default App;
