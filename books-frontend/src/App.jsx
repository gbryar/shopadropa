import React, { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { BookStoreContextProvider } from './context/BookStoreContext';

// views
import HomeView from './views/HomeView';
import BookAddView from './views/BookAddView';
import BookUpdateView from './views/BookUpdateView';
import NotFoundView from './views/NotFoundView';

function App() {
  return (
    <BookStoreContextProvider>
      <Fragment>
        <div className='container'>
          <Router>
            <Routes>
              <Route path='/' element={<HomeView />} />
              <Route path='/Books/add/' element={<BookAddView />} />
              <Route path='/Books/update/:id' element={<BookUpdateView />} />
              <Route path='/*' element={<NotFoundView />} />
            </Routes>
          </Router>
        </div>
      </Fragment>
    </BookStoreContextProvider>
  );
}

export default App;
