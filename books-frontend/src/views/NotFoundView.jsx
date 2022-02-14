import React, { Fragment } from "react";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';

const HomeView = () => {
    let navHist = useNavigate();

    const navHome = () => {
        navHist('/');
    }
    
    return (
        <div>
            <Header />
            <div className="mt-3">
                <h3>Oooops ... Nothing to see here!!</h3>
                <span>Probably a wrong url path was entered. Try to use the buttons for navigation.</span>
            </div>
            <div><button className="btn btn-success mt-5" onClick={() => navHome()}>Go back to Book Store Home</button></div>
        </div>
    )
}

export default HomeView;