import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { menuItems } from './MenuItems';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 'home',
      click: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.navToggleClick = this.navToggleClick.bind(this);
  }

  activeTabClick (tabName) {
    this.setState({activeTab: tabName});
  }

  navToggleClick () {
    let newClick = this.state.click === true ? false : true;
    this.setState({click: newClick});
  }

  handleClick (tabName) {
    this.activeTabClick(tabName);
    this.navToggleClick();
  }

  render() {
    return (
      <nav className="navContainer">
        <Link onClick={() => this.handleClick('home')} style={{ textDecoration: 'none', color: 'black' }} to='/'>
          <div className="navbarLogo">
            <h1 className="logoText">Warm Down Studio's</h1>
            <h2 className="logoSubText">Sports Massage</h2>
          </div>
        </Link>
        <div className="menuIcon" onClick={this.navToggleClick}>
          <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={this.state.click ? 'navOptions activeNav' : 'navOptions'}>
          {menuItems.map((item, index) => {
            return (
              <Link className={item.cName} style={{ textDecoration: 'none' }} onClick={() => this.handleClick(item.openTab)} className={(this.state.activeTab === item.openTab) ? 'navOption active' : 'navOption notActive'} to={item.link}><li key={index}>{item.label}</li></Link>
            )
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
