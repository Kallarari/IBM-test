import React from "react";

import { BookName, Container, ImageArea, Price, PriceArea } from "./styles";

type BookShowcaseProps = {  
  imageLink: string;
  price: string;
  id:string;
  bookName:string;
}
export default function BookShowcase({ imageLink, price, id, bookName}: BookShowcaseProps) {
  return (
    <Container>
      <ImageArea>
        <img src={imageLink} />
      </ImageArea>
      <PriceArea>
        <BookName>{bookName.length>28? bookName.substring(0,26)+"...":bookName}</BookName>
        <Price>{price}</Price>
      </PriceArea>
    </Container>
  );
}
