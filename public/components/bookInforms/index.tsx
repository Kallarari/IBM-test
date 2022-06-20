/* eslint-disable @next/next/no-img-element */
//next-images is recomended by next, but is'nt necessary to use
import { Icon } from "@iconify/react";
import axios from "axios";
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
};
export default function BookInforms({
  bookInformation,
  clearBookInformation,
}: BookInformsProps) {
  const [addOrRemoveFavorite, setAddOrRemoveFavorite] = useState(false);
  //the organiation of the favorites'array is the same of google
  var savedFavorites: Array<string> = [];
  //checks if the book is favorite
  useEffect(() => {
    savedFavorites = JSON.parse(sessionStorage.getItem("favorites"));
    for (let i = 0; i < savedFavorites.length; i++) {
      if (savedFavorites[i].selfLink === bookInformation.selfLink) {
        setAddOrRemoveFavorite(true);
      }
    }
  }, []);
  //Remove an book from the favorites
  async function handleRemoveFavorite() {
    savedFavorites = JSON.parse(sessionStorage.getItem("favorites"));
    if(savedFavorites.length === 1){
      savedFavorites=[];
      sessionStorage.setItem("favorites", JSON.stringify(savedFavorites)); 
    }
    for (let i = 0; i < savedFavorites.length; i++) {
      if (savedFavorites[i].selfLink === bookInformation.selfLink) {
        savedFavorites.splice(i,1);
        sessionStorage.setItem("favorites", JSON.stringify(savedFavorites));        
      }
    }
    setAddOrRemoveFavorite(false);
  }
  //save one book from favores
  async function handleSaveFavorite() {
    if (sessionStorage.getItem("favorites") === null) {
      await axios.get(bookInformation.selfLink).then((resp) => {
        savedFavorites.push(resp.data);
        sessionStorage.setItem("favorites", JSON.stringify(savedFavorites));
      });
    } else {
      savedFavorites = JSON.parse(sessionStorage.getItem("favorites")===null);
      await axios.get(bookInformation.selfLink).then((resp) => {
        savedFavorites.push(resp.data);
      });
      sessionStorage.setItem("favorites", JSON.stringify(savedFavorites));
    }
    setAddOrRemoveFavorite(true);
  }
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
          <FavoriteButton
            onClick={
              addOrRemoveFavorite ? handleRemoveFavorite : handleSaveFavorite
            }
          >
            <h1>
              {addOrRemoveFavorite
                ? "Remover o livro dos favoritos"
                : "Favoritar livro?"}
            </h1>
            <Icon
              icon="ant-design:star-filled"
              color={addOrRemoveFavorite ? "yellow" : "grey"}
              width={45}
            ></Icon>
          </FavoriteButton>
        </BookInfoArea>
      </BookArea>
    </Container>
  );
}
