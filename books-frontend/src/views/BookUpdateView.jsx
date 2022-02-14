import React, { Fragment, useState } from "react";
import Header from "../components/Header";
import UpdateBookForm from "../components/UpdateBookForm";

const BookUpdateView = () => {
    return (
        <Fragment>
            <Header />
            <UpdateBookForm />
        </Fragment>
    )
}

export default BookUpdateView;