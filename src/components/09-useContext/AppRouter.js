import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route exact path="/" element={<HomeScreen />}></Route> 

                        <Route path="/about" element={<AboutScreen />}></Route> 
                        <Route path="/login" element={<LoginScreen />}></Route> 

                        <Route path="*" element={<Navigate to="/" />} />
                    
                    </Routes>
                </div>
                
            </div>
        </Router>
    );
};

