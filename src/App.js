import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Faq from './components/Faq';
import Policy from './components/Policy';
import Terms from './components/Terms';
import How from './components/How';
import Borrow from './components/Borrow';
import Lend from './components/Lend';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/policy" component={Policy} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/how" component={How} />
        <Route exact path="/borrow" component={Borrow} />
        <Route exact path="/lend" component={Lend} />
      </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
