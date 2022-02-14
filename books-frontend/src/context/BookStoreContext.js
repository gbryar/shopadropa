import React, {useState, createContext} from "react";

export const BookStoreContext = createContext();

export const BookStoreContextProvider = props => {
    const [books, setBooks] = useState([]);
    return (
        <BookStoreContext.Provider value={{books, setBooks}}>
            {props.children}
        </BookStoreContext.Provider>
    );
}