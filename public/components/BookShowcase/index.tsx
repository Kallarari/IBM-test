import React from "react";

import { Container, ImageArea, PriceArea } from "./styles";

export default function BookShowcase() {
  return (
    <Container>
      <ImageArea>
        <img src="http://books.google.com/books/content?id=s1gVAAAAYAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71EIK6Fqu_bbn57tIHDCcjoVYGzdGPszfbYE41Og7MWQJWfjE0vflLIu2zc65oMaI4Hh-6rokdqT5Hco_YY1nexBSqKtGLQgrB3SGzcI8S_WZ2Eu5WxfFpI4d3Z4gk3JkUa32NH&source=gbs_api" />
      </ImageArea>
      <PriceArea></PriceArea>
    </Container>
  );
}
