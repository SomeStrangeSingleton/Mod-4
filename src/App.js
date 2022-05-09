import './App.css';
import {Routes,Route,Link, Link} from 'react-router-dom'

import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile'

function App() {
  return (
    <div className="App">
    <nav>
      <Link to ='/'>Home</Link>
      <Link to = '/about'>About</Link>
      <Link to = '/profile'>Profile</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
  </Routes>
      
     
    </div>
  );
}

export default App;
