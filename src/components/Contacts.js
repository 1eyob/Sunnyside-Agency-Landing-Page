import React from "react";
import styled from "styled-components";
import emily from '../images/image-emily.jpg';
import jennie from "../images/image-thomas.jpg";
import thomas from "../images/image-jennie.jpg";

 const Container = styled.div`
 
  width:100%;
  height:500px;
  
`;
const Title = styled.h1`
tex-align:center;
display:flex;
align-items:center;
justify-content:center;
color:hsl(210, 4%, 67%);
margin-top:50px;
font-weight:500;
font-size:19px;

`;
const Left = styled.div`
flex:1;
padding-left:100px;
background-color:white;

`;
const Center = styled.div`
flex:1;
background-color:white;
`;
const Right = styled.div`
flex:1;

background-color:white;


`;

const Image1 = styled.img.attrs({
    src:`${emily}`
})`
border:1px;
border-radius:150px;
width:20%;
text-align:center;
justify-content: center;
    align-items: center;
    margin-left: 70px;
`
const Image2 = styled.img.attrs({
    src:`${thomas}`
})`
border:1px;
border-radius:150px;
width:20%;
text-align:center;
margin-left: 70px;
`
const Image3 = styled.img.attrs({
    src:`${jennie}`
})`
border:1px;
border-radius:150px;
width:20%;
text-align:center;
justify-content: center;
    align-items: center;
    margin-left: 70px;
`
const Paragraph = styled.p`
width:75%;
`
const Name = styled.h3`
`;
const Wrapper = styled.div`
display : flex;
justify-content:space-between;
align-items:center;
padding: 50px ;
margin-top:50px;
height: 200px;

`
const Contacts = () => {
  return (
    <Container>
        <h1>kshgfd</h1>
      <Title>CLIENT TESTIMONIALS</Title>
      <Wrapper>
      <Left>
        <Image1 />
        <Paragraph>We put our trust in sunnyside and they delivered. making sure our needs
            were met and deadlines were always hit. </Paragraph>
        <Name>Emily R.</Name>
        <p>Marketing Director</p>
      </Left>
      <Center>
        <Image2 />
        <Paragraph>
            SunnySide's enthusisasm coupled with thier keen interest in urs brand's 
            success made it a satisfying and enjoyable exprerience.  
        </Paragraph>
        <Name>Thomas S.</Name>
        <p>Chief operating officer</p>
      </Center>
      <Right>
        <Image3 />
        <Paragraph>Incredible end result!  our sales increased over 400% when we worked sunnyside. 
            Highly recommended.

        </Paragraph>
        <Name>Jennie F.</Name>
        <p>Business Owner</p>

      </Right>
      </Wrapper>
    </Container>
  );
};

export default Contacts;
