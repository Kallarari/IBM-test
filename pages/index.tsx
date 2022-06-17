import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { Container, MainContent } from "../styles/pages/home";
import Header from "../public/components/header";
import BookShowcase from "../public/components/bookShowcase";
import Footer from "../public/components/footer";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");  
  const [searchResult, setSearchResult] = useState(Array);  
  var booksSearchInforms;
  useEffect(() => {    
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + search)
      .then((resp) => {
        booksSearchInforms = resp.data;
        setSearchResult(booksSearchInforms.items);
        console.log(searchResult); 
      });
  },[search]);
  return (
    <Container>
      <Head>
        <title>Books</title>
      </Head>
      <Header infor={(search) => {setSearch(search)}} />
      <MainContent>
        {searchResult.map((item: any, key: number) => (
        <BookShowcase key={key}
        imageLink={item.volumeInfo?.imageLinks?.thumbnail===undefined?"/book.png":item.volumeInfo?.imageLinks?.thumbnail}
        price={item.saleInfo.listPrice?.amount===undefined?"Indisponível":"R$"+item.saleInfo.listPrice.amount}
        id={item?.volumeInfo.selfLink}
        bookName={item?.volumeInfo.title}
      />))}
        
      </MainContent>
      <Footer />
    </Container>
  );
};

export default Home;
