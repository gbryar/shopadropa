import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookStoreApi from "../api/BookStoreApi";

export const NewBookForm = () => {
  let navHist = useNavigate();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [publishing_year, setPublishingYear] = useState('');
  const [isbn, setIsbn] = useState('');

  const onSubmitForm = async e => {
      e.preventDefault();
      try {
        const newBook = await BookStoreApi.post('/', {
          name, author, publishing_year, isbn
        });
        navHist('/');
      }  
      catch(exception) {
          console.error(exception);
      }    
  };

  return (
      <Fragment>
          <form onSubmit={onSubmitForm}>
            <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control" value={name} onChange={x => setName(x.target.value)} />
            </div>

            <div className="form-group">
              <label>Author</label>
              <input type="text" className="form-control" value={author} onChange={x => setAuthor(x.target.value)} />
            </div>

            <div className="form-group">
              <label>Year of Publishing</label>
              <input type="text" className="form-control" value={publishing_year} onChange={x => setPublishingYear(x.target.value)} />
            </div>

            <div className="form-group">
              <label>ISBN</label>
              <input type="text" className="form-control" value={isbn} onChange={x => setIsbn(x.target.value)} />
            </div>

            <br />
            <button type="submit" className="btn btn-success">Save</button>
          </form>
      </Fragment>
  )
}

export default NewBookForm;
