import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <h2>Dashboard layout component</h2>
            <ul className='bg-red-300 w-28'>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/dashboard/profile">Profile</Link></li>
                <li><Link to="/dashboard/editprofile">Edit Profile</Link></li>
            </ul>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;