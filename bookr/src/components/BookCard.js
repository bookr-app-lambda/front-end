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
