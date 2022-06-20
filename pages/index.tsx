import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { Container, MainContent, PageSelector, PageSelectorPoints } from "../styles/pages/home";
import Header from "../components/header";
import BookShowcase from "../components/bookShowcase";
import Footer from "../components/footer";
import BookInforms from "../components/bookInforms";

const Home: React.FC = () => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("jogos");
  const [searchResult, setSearchResult] = useState(Array);
  const [singleBookInform, setSingleBookInform] = useState();
//checks if you have an favorite book link and show in screen
  async function handleFavorites() {
    let favorites = JSON.parse(sessionStorage.getItem("favorites"));
    if (favorites?.length >= 1) {
      setSearchResult(favorites);
    } else {
      window.alert("Você não tem nenhum livro salvo");
      await axios
        .get("https://www.googleapis.com/books/v1/volumes?q=" + search, {
          params: { startIndex: page },
        })
        .then((resp) => {
          setSearchResult(resp.data.items);
        });
    }
    setSingleBookInform(undefined);
  }
  //if the search information changes the search result changes too
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
  async function handlePage() {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + search, {
        params: { startIndex: page },
      })
      .then((resp) => {
        setSearchResult(resp.data.items);
        setSingleBookInform(undefined);
      });
  }
  //function that get a single book information and send to bookShowcase page
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
        <PageSelector>
          <PageSelectorPoints onClick={()=>{setPage(0);handlePage();}}>1</PageSelectorPoints>
          <PageSelectorPoints onClick={()=>{setPage(20);handlePage();}}>2</PageSelectorPoints>
          <PageSelectorPoints onClick={()=>{setPage(40);handlePage();}}>3</PageSelectorPoints>   
          </PageSelector>         
      </MainContent>
      <Footer />
    </Container>
  );
};
export default Home;
