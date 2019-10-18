import React from "react";
import styled from "styled-components";

//styling
const Card = styled.div`
  width: 300px;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

// Component that displays summary data about a book
// *    {
//   *       "status": "success",
//   *       "books": [
//   *         {
//   *           "id": 1,
//   *           "title": "The Math Book",
//   *           "isbn": "9781402757969",
//   *           "cover": "https://books.google.com/books/content?id=JrslMKTgSZwC&printsec=frontcover&img=1&zoom=3",
//   *           "thumbnail": "https://books.google.com/books/content?id=JrslMKTgSZwC&printsec=frontcover&img=1&zoom=2",
//   *           "description": "This book covers 250 milestones in mathematical history, beginning millions of years ago with ancient \"ant odometers\" and moving through time to our modern-day quest for new dimensions.",
//   *           "publisher": "Sterling Publishing Company, Inc."
//   *           "averageRating" 3.45,
//   *           "totalRatings": 2,
//   *         },
//   *       ]
//   *     } - data of a returned book, in the idea of pinterest we only need access to the 'thumbnail' key:value pair

export default function BookCard(props) {
  //code goes here
  return (
    <Card>
      <p>{props.title} </p>
      <p>Rating: {props.rating}</p>
      <img src={props.cover} alt="cover" />
    </Card>
  );
}
