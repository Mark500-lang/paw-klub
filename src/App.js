//  import './App.css';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Common from "./components/Common";
import Home from './components/Home';
import About from './components/About';
import Daycare from "./components/services/Daycare";
import Contact from './components/Contact';
import Grooming from "./components/services/Grooming";
import Adoption from "./components/services/Adoption";
import Training from "./components/services/Training";

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Common/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/daycare" element={<Daycare/>}/>
          <Route path="/grooming" element={<Grooming/>}/>
          <Route path="/adoption" element={<Adoption/>}/>
          <Route path="/training" element={<Training/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
