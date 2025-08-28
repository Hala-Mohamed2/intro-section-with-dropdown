import './Header.css';
import { useState } from 'react';
import up from '../../../public/images/icon-arrow-up.svg';
import down from '../../../public/images/icon-arrow-down.svg';
import { HiMenu } from "react-icons/hi";


const Header = () => {

  const [showFet, setShowFet] = useState(false);
  const [showCamp, setShowCamp] = useState(false);

  const [showHead, setShowHead] = useState(false);

  return(
    <header className='header'>
    
    <div className="header-one">
      <div className="humburger">
        <img src="./images/logo.svg" alt="" />
        <HiMenu className='humb' onClick={()=> setShowHead(!showHead)}/>
      </div>
      <div className="link">
          <div className="dropdown">
        <a href="" onClick={(e)=> {e.preventDefault(); setShowFet(!showFet)} }>
        Features <img src={showFet ? up : down} alt="" /></a>
        {showFet && (
          <div className="show">
            <span><img src="./images/icon-todo.svg" alt="" />Todo List</span>
            <span><img src="./images/icon-calendar.svg" alt="" />Calendar</span>
            <span><img src="./images/icon-reminders.svg" alt="" />Reminders</span>
            <span><img src="./images/icon-planning.svg" alt="" />Planning</span>
          </div>
        )}
      </div>

      <div className="dropdown">
        <a href="" onClick={(e)=> {e.preventDefault(); setShowCamp(!showCamp)}}>
        Company <img src={showCamp ? up : down} alt="" /></a>
        {showCamp && (
          <div className="showw">
            <span>History</span>
            <span>Our Team</span>
            <span>Blog</span>
          </div>
        )}
      </div>

      <a href="">Careers</a>
      <a href="">About</a>
      </div>

    </div>

    <div className="header-two">
      <a href="#">Login</a>
      <a href="#" className="reg">Register</a>
    </div>


      {showHead &&(
        <div className="fixed">
          <div className="links">
            <img className='close' onClick={()=> setShowHead(false)} src="./images/icon-close-menu.svg" alt="" />
          <div className="dropdown">
        <a href="" onClick={(e)=> {e.preventDefault(); setShowFet(!showFet)} }>
        Features <img src={showFet ? up : down} alt="" /></a>
        {showFet && (
          <div className="show">
            <span><img src="./images/icon-todo.svg" alt="" />Todo List</span>
            <span><img src="./images/icon-calendar.svg" alt="" />Calendar</span>
            <span><img src="./images/icon-reminders.svg" alt="" />Reminders</span>
            <span><img src="./images/icon-planning.svg" alt="" />Planning</span>
          </div>
        )}
      </div>

      <div className="dropdown">
        <a href="" onClick={(e)=> {e.preventDefault(); setShowCamp(!showCamp)}}>
        Company <img src={showCamp ? up : down} alt="" /></a>
        {showCamp && (
          <div className="showw">
            <span>History</span>
            <span>Our Team</span>
            <span>Blog</span>
          </div>
        )}
      </div>

      <a href="">Careers</a>
      <a href="">About</a>
      </div>

      <div className="header-twoo">
        <a href="#">Login</a>
        <a href="#" className="reg">Register</a>
      </div>

        </div>

        
      )}

    
    </header>
  ) 
}



export default Header;