import React from "react";
import Head from "next/head";

import { Container, MainContent } from "../styles/pages/home";
import Header from "../public/components/header";
import BookShowcase from "../public/components/BookShowcase";

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Books</title>
      </Head>
      <Header />
      <MainContent>
        <BookShowcase />
      </MainContent>
    </Container>
  );
};

export default Home;
