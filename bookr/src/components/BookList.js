import React, {useState, useEffect} from "react";
import Header from "./Header.js";
import BookCard from "./BookCard.js";
import {Link} from 'react-router-dom';

import styled from "styled-components";
import { axiosWithAuth } from './AxiosAuth.js';

const BookListDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

// "Landing page" of the actual app
// displays a list of books (retrieved from API call) as a series
// of BookCard components


export default function BookList(props) {
  //code goes here

  const [books, setBooks] = useState([]);
  const [faveBooks, setFaveBooks] = useState([]);

  useEffect(()=> {
    async function getBooks()  {
      try{
          const someBooks = await axiosWithAuth().get('https://api-bookr.herokuapp.com/api/books');
          console.log(someBooks);
          setBooks(someBooks.data.books);
      }catch(err){console.log(err);}
    }

    getBooks();
  },[])

  //axios call

  return (
    <div>
      <Header />
      <BookListDiv>
        {books.map(book => {
          return (
            <Link to={`/books/${book.id}`}>
            <BookCard
              cover={book.cover}
              title={book.title}
              rating={book.averageRating}
            />
            </Link>
          );
        })}
      </BookListDiv>
    </div>
  );
}
