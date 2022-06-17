import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import {
  BackButton,
  BookArea,
  BookInfoArea,
  ButtonText,
  Container,
  FavoriteButton,
  Header,
  Title,
} from "./styles";

type BookInformsProps = {
  bookInformation: any;
  clearBookInformation: () => void;
  setFavorites: (bookID:string) => void;
};
export default function BookInforms({
  bookInformation,
  clearBookInformation,
  setFavorites,
}: BookInformsProps) {
  const [starColor, setStarColor] = useState("grey");
  return (
    <Container>
      <Header>
        <BackButton onClick={clearBookInformation}>
          <Icon icon="bx:arrow-back" color="grey" width={45}></Icon>
          <ButtonText>Voltar</ButtonText>
        </BackButton>
        <Title>{bookInformation.volumeInfo.title}</Title>
      </Header>
      <BookArea>
        <img
          src={
            bookInformation?.volumeInfo.imageLinks?.small === undefined
              ? "/book.png"
              : bookInformation?.volumeInfo.imageLinks.small
          }
          alt="livro"
        ></img>
        <BookInfoArea>
          <h1>Descrição do livro</h1>
          <h2>
            {bookInformation?.volumeInfo.description?.length > 600
              ? bookInformation?.volumeInfo.description.substring(0, 600) +
                "..."
              : bookInformation?.volumeInfo.description}
          </h2>
          <h1>Preço</h1>
          {bookInformation?.saleInfo.listPrice?.amount ? (
            <h2>R${bookInformation?.saleInfo.listPrice.amount}</h2>
          ) : (
            <h2>Este produto não está em estoque!</h2>
          )}
          <FavoriteButton onClick={()=>{sessionStorage.setItem('favorites', JSON.stringify(bookInformation.selfLink));setStarColor("yellow");}}>
            <h1>Favoritar livro?</h1>
            <Icon
              icon="ant-design:star-filled"
              color={starColor}
              width={45}
            ></Icon>
          </FavoriteButton>
        </BookInfoArea>
      </BookArea>
    </Container>
  );
}
