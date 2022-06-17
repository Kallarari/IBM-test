import React from "react";
import { Container, Content, SearchBar, TitleLogo } from "./styles";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <Container>
      <Content>
        <TitleLogo>BOOKS.com</TitleLogo>
        <SearchBar>
          <input placeholder="Qual livro você deseja ver?" type="text" className="inputSearch" />
          <Icon
            icon="cil:magnifying-glass"
            color="grey"
            width={25}
          />
        </SearchBar>        
        <Icon
            icon="ant-design:star-filled"
            color="yellow"
            width={45}
          />
      </Content>
    </Container>
  );
}
