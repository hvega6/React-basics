import Nav from './components/Nav.js';
import Promo from './components/Promo.js';
import Intro1 from './components/Intro1.js';
import Intro2 from './components/Intro2.js';
import Intro3 from './components/Intro3.js';
import Footer from './components/Footer.js';

import './App.css';

function Header(){
  return <h1>Hello World!</h1>
}
function App() {
  return (
  <div>
    <Header/>, <Nav/>, <Promo/>, <Intro1/>, <Intro2/>, <Intro3/>, <Footer/>
  </div>
  )
}

export default App;
