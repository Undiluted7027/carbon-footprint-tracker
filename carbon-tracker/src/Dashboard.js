import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            {/* <p className='dashboardTitle'> Dashboard </p> */}
            <div className='dashboardContainer'>
                <h2 className='dashboardTitle'> Transport</h2>
                <div className='dashboardTopic'>
                    <p className='dashboardLeftValue'> Ready to test how you manage your transportation? </p>
                    <Link to = "/TransportQuiz" className='dashboardButton'> Start Quiz </Link> 
                    {/* <button className='dashboardButton' href = "WasteManagementQuiz /"> Start Quiz </button>  */}
                </div>
            </div>

            <div className='dashboardContainer'>
                <h2 className='dashboardTitle'> Waste Management</h2>
                <div className='dashboardTopic'>
                    <p className='dashboardLeftValue'> Ready to test how you manage your waste? </p>
                    {/* <button className='dashboardButton' href = "WasteManagementQuiz /"> Start Quiz </button>  */}
                    <Link to = "/WasteManagementQuiz" className='dashboardButton' > Start Quiz </Link> 
                </div>
            </div>
        
            <div className='dashboardContainer'>
                <h2 className='dashboardTitle'> Food Management</h2>
                <div className='dashboardTopic'>
                    <p className='dashboardLeftValue'> Ready to test how you manage your food consumption? </p>
                    {/* <button className='dashboardButton' href = "WasteManagementQuiz /"> Start Quiz </button>  */}
                    <Link to = "/FoodQuiz" className='dashboardButton' > Start Quiz </Link> 
                </div>
            </div>
        </div>
    );
}

export default Dashboard;