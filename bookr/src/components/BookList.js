import React from "react";
import Header from "./Header.js";
import BookCard from "./BookCard.js";
import { books } from "../sampledata.js";
import styled from "styled-components";

const BookListDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

// "Landing page" of the actual app
// displays a list of books (retrieved from API call) as a series
// of BookCard components

<<<<<<< HEAD

=======
console.log(books);
>>>>>>> origin
export default function BookList() {
  //code goes here

  //axios call

  return (
    <div>
      <Header />
      <BookListDiv>
        {books.map(book => {
          return (
            <BookCard
              cover={book.cover}
              title={book.title}
              rating={book.averageRating}
            />
          );
        })}
      </BookListDiv>
    </div>
  );
}
