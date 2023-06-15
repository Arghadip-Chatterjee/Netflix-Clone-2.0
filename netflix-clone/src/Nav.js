import React, { useEffect, useState } from 'react';
import './Nav.css';
import SearchButton from './SearchButton';
import { auth } from './firebase'; // Import the Firebase authentication module
import { useNavigate } from 'react-router-dom';

function Nav() {

  const navigate = useNavigate();


    const [show,handleShow]=useState(false);
    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 100) {
              handleShow(true);
            } else {
              handleShow(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    const signOut = () => {
      auth.signOut()
        .then(() => {
          navigate('/signin'); // Navigate to the sign-in page after signing out
        })
        .catch((error) => {
          // Handle any sign-out error
          console.log(error);
        });
    };
    
    
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            alt='Netflix Logo'
        />

      <div className="nav_searchbar">
        {/* <input type="text" placeholder="Search" /> */}
        <a href='/search'><button type='submit'>Search</button></a>
        {/* <SearchButton /> Render the SearchButton component here */}
      </div>


        <img className='nav_avatar'
                src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt='Nav Avatar'
                onClick={signOut}
        />
    </div>
  );
}

export default Nav








