import { BrowserRouter as HashRouter,Router, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './view/About';
import Home from './view/Home';




function App() {
 

return(

<HashRouter>
<Router>
<Routes>
  
<Route path="/dilshans" element={<Home />} />
<Route path="/about" element={<About />} />
{/* <Route path="/Contact" element={<Home section="foot" />} /> */}
{/* <Link to="/#foot"></Link> */}
</Routes>
</Router>
</HashRouter>
 
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