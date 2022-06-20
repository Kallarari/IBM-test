import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { Container, MainContent } from "../styles/pages/home";
import Header from "../public/components/header";
import BookShowcase from "../public/components/bookShowcase";
import Footer from "../public/components/footer";
import BookInforms from "../public/components/bookInforms";

const Home: React.FC = () => {
  const [search, setSearch] = useState("jogos");
  const [searchResult, setSearchResult] = useState(Array);
  const [singleBookInform, setSingleBookInform] = useState();
//checks if was an favorite link and show in screen
  async function handleFavorites() {
    let favorites = JSON.parse(sessionStorage.getItem("favorites"));
    if (favorites?.length >= 1) {
      setSearchResult(favorites);
      setSingleBookInform(undefined);
    } else {
      window.alert("Você não tem nenhum livro salvo");
      await axios
        .get("https://www.googleapis.com/books/v1/volumes?q=" + search, {
          params: { startIndex: 0 },
        })
        .then((resp) => {
          setSearchResult(resp.data.items);
          setSingleBookInform(undefined);
        });
    }
    setSingleBookInform(undefined);
  }
  //if the serch information chages the serch result changes too
  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + search, {
        params: { startIndex: 0 },
      })
      .then((resp) => {
        setSearchResult(resp.data.items);
        setSingleBookInform(undefined);
      });
  }, [search]);
  //function that get a single book information and sand to bookShowcase page
  function handleSeeBook(bookID: string) {
    axios.get(bookID).then((resp) => {
      setSingleBookInform(resp.data);
    });
  }
  return (
    <Container>
      <Head>
        <title>Books</title>
      </Head>
      <Header
        favorites={handleFavorites}
        infor={(search) => {
          setSearch(search);
        }}
      />
      <MainContent>
        {/*if you are look for a single book and its really exist you will see it! */}
        {singleBookInform === undefined ? ( 
          searchResult.map((item: any, key: number) => (
            <BookShowcase
              seeBook={(seeBook) => {
                handleSeeBook(seeBook);
              }}
              key={key}
              imageLink={
                item.volumeInfo?.imageLinks?.thumbnail === undefined
                  ? "/book.png"
                  : item.volumeInfo?.imageLinks?.thumbnail
              }
              price={
                item.saleInfo.listPrice?.amount === undefined
                  ? "Indisponível"
                  : "R$" + item.saleInfo.listPrice.amount
              }
              id={item?.selfLink}
              bookName={item?.volumeInfo.title}
            />
          ))
        ) : (          
          <BookInforms
            clearBookInformation={() => setSingleBookInform(undefined)}
            bookInformation={singleBookInform}
          />
        )}
      </MainContent>
      <Footer />
    </Container>
  );
};
export default Home;
