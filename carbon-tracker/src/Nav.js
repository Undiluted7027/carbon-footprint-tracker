import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {

  const profile = {
    name: 'John Doe',
    xp: 0,
    position: 1,
    rank: 'Bronze',
    image: 'public/logo192.png'
  }

  const getColorByRank = (rank) => {
    switch(rank) {
      case 'Bronze':
        return '#cd7f32'; // Bronze color
      case 'Silver':
        return '#C0C0C0'; // Silver color
      case 'Gold':
        return '#FFD700'; // Gold color
      case 'Platinum':
        return '#E5E4E2'; // Platinum color
      case 'Diamond':
        return '#b9f2ff'; // Diamond color
      default:
        return 'black'; // Default text color
    }
  }

  return (
    <div className='nav'>
      <div className='navContainer'>
        <h1 className='navTitle'>EcoWarrior</h1>
        <Link to = "/" className='navTab'> Home </Link>
        <p className='navTab'> Leaderboard</p>
      </div>
      <div className='navDivider'>
        <img className='navImage' src='logo192.png' alt='profile'/>
        <p className='navTab'> {profile.name} </p>
        <p className='navTab'> XP: {profile.xp}</p>
        {/*  <p className='navTab' style => Rank: {profile.rank} </p> */}
        <p className='navTab'>
          Rank: <span className='navRank' style={{color: getColorByRank(profile.rank)}}>{profile.rank}</span>
        </p>
        </div>
    </div>
  );
}

export default Nav;