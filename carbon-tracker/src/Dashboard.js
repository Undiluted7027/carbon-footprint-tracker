import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='box'>
            {/* <p className='dashboardTitle'> Dashboard </p> */}
            <div className='dashboardContainer'>
                <h2 className='dashboardTitle'><br></br></h2>
                <div className='dashboardTopic' style={{backgroundColor: '#306b34',}}>
                    <p className='dashboardLeftValue'style={{backgroundColor: '#306b34', color: 'white'}}> How are you moving around? </p>
                    <Link to="/TransportQuiz" className='dashboardButton' > Start Quiz </Link>
                    {/* <button className='dashboardButton' href = "WasteManagementQuiz /"> Start Quiz </button>  */}
                </div>
            </div>

            <div className='dashboardContainer'>
                <h2 className='dashboardTitle'></h2>
                <div className='dashboardTopic' style={{backgroundColor: '#91aec1'}}>
                    <p className='dashboardLeftValue' style={{backgroundColor: '#91aec1'}}> How are you managing your waste? </p>
                {/* <button className='dashboardButton' href = "WasteManagementQuiz /"> Start Quiz </button>  */}
                <Link to="/WasteManagementQuiz" className='dashboardButton' style={{backgroundColor: 'black', color: 'white'}}> Start Quiz </Link>
            </div>
        </div><div className='dashboardContainer'>
                <h2 className='dashboardTitle'></h2>
                <div className='dashboardTopic' style={{backgroundColor: '#b6174b'}}>
                    <p className='dashboardLeftValue' style={{backgroundColor: '#b6174b', color: 'white'}}> How are you managing your diet? </p>
                    {/* <button className='dashboardButton' href = "WasteManagementQuiz /"> Start Quiz </button>  */}
                    <Link to="/FoodQuiz" className='dashboardButton' style={{backgroundColor: 'white'}}> Start Quiz </Link>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;