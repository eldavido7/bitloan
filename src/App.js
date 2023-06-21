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
import Medical from './components/Borrowing/Medical';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import Mortgage from './components/Borrowing/Mortgage';
import Standard from './components/Borrowing/Standard';
import Why from './components/Borrowing/Why';
import Process from './components/Borrowing/Process';
import Privacy from './components/Borrowing/Privacy';

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
        <Route exact path="/medical" component={Medical} />
        <Route exact path="/mortgage" component={Mortgage} />
        <Route exact path="/standard" component={Standard} />
        <Route exact path="/why" component={Why} />
        <Route exact path="/process" component={Process} />
        <Route exact path="/privacy" component={Privacy} />
      </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
