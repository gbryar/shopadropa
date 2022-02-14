import React, { Fragment } from "react";
import Header from "../components/Header";
import BookList from "../components/BookList";
import { useNavigate } from 'react-router-dom';

const HomeView = () => {
    let navHist = useNavigate();

    const navAddBook = () => {
        navHist('/books/add');
    }
    
    return (
        <div>
            <Header />
            <div className="mb-2"><button className="btn btn-success" onClick={() => navAddBook()}>NEW BOOK</button></div>
            <BookList />
        </div>
    )
}

export default HomeView;