import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './view/About';
import Home from './view/Home';




function App() {
 

return(


<Router>
<Routes>
  
<Route path="/dilshans" element={<Home />} />
<Route path="/about" element={<About />} />
{/* <Route path="/Contact" element={<Home section="foot" />} /> */}
{/* <Link to="/#foot"></Link> */}
</Routes>
</Router>
 
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