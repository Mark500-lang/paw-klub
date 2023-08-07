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
import { useState,useEffect } from "react";
import Ourteam from "./components/Ourteam";

function App() {
  //adoption data
  const [data, setData] = useState();
  useEffect(()=>{
    fetch('https://api.api-ninjas.com/v1/dogs?name=labrador retriever',{
      method: "GET",
      headers: {'X-Api-Key': 'txnBMmne4+CBpk7YCQcS5g==JCz1gtAHw8pVigCh'},
      contentType: 'application/json',
      })
      .then(response => response.json()) 
      .then((response) => {
          console.log(response);
          setData(response)
      }) 
      .catch(err => console.log(err));
  },[])

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Common/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/daycare" element={<Daycare/>}/>
          <Route path="/grooming" element={<Grooming/>}/>
          <Route path="/adoption" element={<Adoption data={data} />}/>
          <Route path="/training" element={<Training/>}/>
          <Route path="/our-team" element={<Ourteam/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
