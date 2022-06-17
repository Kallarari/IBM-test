import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import {
  BackButton,
  BookArea,
  BookInfoArea,
  ButtonText,
  Container,
  Header,
  Title,
} from "./styles";

type BookInformsProps = {
  bookInformation: any;
  clearBookInformation: () => void;
};
export default function BookInforms({
  bookInformation,
  clearBookInformation,
}: BookInformsProps) {
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
        </BookInfoArea>
      </BookArea>
    </Container>
  );
}
