import './App.css';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Home from '../Home/Home';
import Booking from '../Booking/Booking';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/booking' component={Booking} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
