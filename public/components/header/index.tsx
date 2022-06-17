import React, { useState } from "react";
import { Container, Content, SearchBar, TitleLogo } from "./styles";
import { Icon } from "@iconify/react";

type HeaderInformsProps = {  
  infor:(informs:string) => void;
}
export default function Header({infor}:HeaderInformsProps) {
  const [search, setSearch] = useState("");
  function sendSearch() {
    infor(search);
  }
  return (
    <Container>
      <Content>
        <TitleLogo>BOOKS.com</TitleLogo>
        <SearchBar>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Qual livro você deseja ver?"
            type="text"
            className="inputSearch"
          />
          <Icon
            icon="cil:magnifying-glass"
            color="grey"
            width={25}
            onClick={sendSearch}
          />
        </SearchBar>
        <Icon icon="ant-design:star-filled" color="yellow" width={45} />
      </Content>
    </Container>
  );
}
