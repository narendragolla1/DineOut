import { useState } from 'react';
import {LOGO_IMG_CDN_URL} from './contants';
import {Link} from "react-router-dom";
const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src={LOGO_IMG_CDN_URL} />
    </a>
  );
  const LoggedInUser=()=>{
    return false;
  }
  const Header = () => {
    const[isLoggedIN,setIsLoggedIN]=useState(false);
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="about"><li>About</li></Link>
            <Link to="contact"><li>Contact</li></Link>
            <li>Cart</li>
          </ul>
        </div>
        {isLoggedIN?(
          <button onClick={()=>setIsLoggedIN(false)}>LogOut</button>):
            (<button onClick={()=>setIsLoggedIN(true)}>Login</button>)
          }
      </div>
    );
  };
  export default Header;
