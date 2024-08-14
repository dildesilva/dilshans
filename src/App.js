import { BrowserRouter as BrowserRouter,Router, Routes, Route,} from 'react-router-dom';
import './App.css';
import About from './view/About';
import Home from './view/Home';




function App() {
 

return(

<BrowserRouter basename="/dilshans">
<Router>
<Routes>
  
<Route exact path="/dilshans" element={<Home />} />
<Route path="/about" element={<About />} />
{/* <Route path="/Contact" element={<Home section="foot" />} /> */}
{/* <Link to="/#foot"></Link> */}
</Routes>
</Router>
</BrowserRouter>
 
);
  // const w=2;
  //   switch (w) {
  //     case 1: return (<Home/>);
  //      break;
  //     case 2: return  (<About />);
  //      break;
    
  //     default: return ( <>no</>);
  //       break;
  //   }
  
  
}

export default App;