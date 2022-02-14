import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BookStoreApi from "../api/BookStoreApi";

export const UpdateBookForm = () => {
  let navHist = useNavigate();
  const {id} = useParams();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [publishing_year, setPublishingYear] = useState('');
  const [isbn, setIsbn] = useState('');

  useEffect(async () => {
    const result = await BookStoreApi.get('/'+id);
    setName(result.data.data.book.name);
    setAuthor(result.data.data.book.author);
    setPublishingYear(result.data.data.book.publishing_year);
    setIsbn(result.data.data.book.isbn);
  },[]);

  const onSubmitForm = async e => {
      e.preventDefault();
      try {
        console.log('updating book id=' + id);
        const updatedBook = await BookStoreApi.put('/'+id, {
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

export default UpdateBookForm;
