import React from 'react';
import cone from "../images/desktop/image-gallery-cone.jpg";
import milk from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import sugar from "../images/desktop/image-gallery-sugarcubes.jpg";

import styled from 'styled-components';
const Container= styled.div`
display: grid;
overflow:hidden;


`
const Image1 = styled.img.attrs({
src:`${milk}`
})`
grid-row: 1;
grid-column: 1;
width:25vw;
height:50vh;


`;
const Image2 = styled.img.attrs({
    src:`${orange}`
})`
grid-row: 1;
grid-column: 2;
width:25vw;
height:50vh;
`;
const Image3 = styled.img.attrs({
    src:`${cone}`
})`
grid-row: 1;
grid-column: 3;
width:25vw;
height:50vh;
`;
const Image4 = styled.img.attrs({
    src:`${sugar}`
})`
grid-row: 1;
grid-column: 4;
width:25vw;
height:50vh;
`;
const Photos = () => {
  return (
  <Container>
<Image1/>
<Image2/>
<Image3/>
<Image4/>


  </Container>);
};

export default Photos;
