import React, { useState } from "react";
import { Container, Content, SearchBar, TitleLogo } from "./styles";
import { Icon } from "@iconify/react";

type HeaderInformsProps = {
  infor: (informs: string) => void;
  favorites: () => void;
};
export default function Header({ infor, favorites }: HeaderInformsProps) {
  //set the search argument and send
  const [search, setSearch] = useState("");
  function sendSearch() {
    infor(search);
  }
  return (
    <Container>
      <Content>
        <TitleLogo onClick={sendSearch}>BOOKS.com</TitleLogo>
        <SearchBar>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendSearch();
            }}
          >
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Qual livro você deseja ver?"
              type="text"
              className="inputSearch"
            />
          </form>
          <Icon
            icon="cil:magnifying-glass"
            color="grey"
            width={25}
            onClick={sendSearch}
            cursor="pointer"
          />
        </SearchBar>
        <Icon
          onClick={favorites}
          icon="ant-design:star-filled"
          color="yellow"
          width={45}
          cursor="pointer"
        />
      </Content>
    </Container>
  );
}
