import React, {useContext, useEffect} from 'react'
import BookStoreApi from '../api/BookStoreApi';
import { BookStoreContext } from '../context/BookStoreContext';
import { useNavigate } from 'react-router-dom';

const BookList = () => {
    const {books, setBooks} = useContext(BookStoreContext);
    let navHist = useNavigate();

    useEffect(async () => {  
        try {
            const result = await BookStoreApi.get('/');
            setBooks(result.data.data.books);
        }  
        catch(exception) {
            console.error(exception);
        } 
    },[]);

    const onUpdateClick = async (id) => {
        navHist('books/update/'+id);
    }

    const onDeleteClick = async (id) => {
        try {
            const result = await BookStoreApi.delete('/'+id);
            // removing from the list of Books
            setBooks(books.filter(x => {
                return x.id != id;
            }));

        } catch (exception) {
            console.error(exception);
        }
    }

    return (
        <div className='list-group'>
            <table className='table table-hover'>
                <thead>
                    <tr className='bg-primary'>
                        <th scope='col'>Title</th>
                        <th scope='col'>Author</th>
                        <th scope='col'>Year of Publishing</th>
                        <th scope='col'>ISBN</th>
                        <th scope='col'></th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => {
                        return (
                            <tr key={book.id}>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.publishing_year}</td>
                                <td>{book.isbn}</td>
                                <td><button onClick={() => onUpdateClick(book.id)} className='btn btn-warning'>Update</button></td>
                                <td><button onClick={() => onDeleteClick(book.id)} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default BookList;