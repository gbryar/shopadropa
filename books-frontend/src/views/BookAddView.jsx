import React, { Fragment } from "react";
import Header from "../components/Header";
import NewBookForm from "../components/NewBookForm";

const NewBookView = () => {
    return (
        <Fragment>
            <Header />
            <NewBookForm />
        </Fragment>
    )
}

export default NewBookView;