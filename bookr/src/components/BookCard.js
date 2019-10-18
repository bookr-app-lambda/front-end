import React from "react";
import styled from "styled-components";

//styling
const Card = styled.div``;

// Component that displays summary data about a book

export default function BookCard(props) {
  //code goes here
  return (
    <Card>
      <p>Title: {props.title} </p>
      <p>Author: {props.author}</p>
    </Card>
  );
}
