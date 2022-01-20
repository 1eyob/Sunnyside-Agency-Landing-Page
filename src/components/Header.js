import React from 'react';
import styled from "styled-components";
import HeaderImage from '../images/desktop/image-header.jpg';
const Container = styled.div`
overflow:hidden;
position:relative;
text-align:center;
`;
const Image = styled.img.attrs({
  src:`${HeaderImage}`  
})`
width:100%;
height:100vh;


`;

const Navbar = styled.div`

display:flex;
align-items:center;
top:0;
padding:5px;
position:absolute;
`;
const Left= styled.div`
flex:1;
top: 8px;
left: 16px;

`;
const Right = styled.div`
flex:1;
display:flex;
margin-left:800px;
justify-content:flex-end;
row-gap: 10px;
padding:5px;
margin-right:10px;
top: 8px;
  right: 16px;
 



`;
const About = styled.button`
border :none;
color:white;
cursor:pointer;
margin-right:5px;
background-color: transparent;
&: hover {
  background-color:#e9f5f5;
  transform:scale(1.1);
  border-radius:10px;
  color:black;
  
}

`
const Services = styled.button`
border :none;
color:white;
cursor:pointer;
margin-right:5px;
background-color: transparent;
&: hover {
  background-color:#e9f5f5;
  transform:scale(1.1);
  border-radius:10px;
  color:black;
  
}
`
const Projects = styled.button`
border :none;
color:white;
cursor:pointer;
margin-right:5px;
background-color: transparent;
&: hover {
  background-color:#e9f5f5;
  transform:scale(1.1);
  border-radius:10px;
  color:black;
  
}
`
const Contact = styled.button`
border :none;
color:white;
cursor:pointer;

background-color: transparent;
&: hover {
  background-color:#e9f5f5;
  transform:scale(1.1);
  border-radius:10px;
  color:black;
  border:2px;
}

`

const Name =styled.h2`
color:white;
padding:10px;
`;
const Title = styled.h1`

position:absolute;
font-family:barlow;
font-weight:600;
color:white;
top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Arrow = styled.div`
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
  position:absolute;

`;
const Header = () => {
  return (
  <Container>
      <Image/>
<Navbar>
<Left>
    <Name>sunnyside</Name>
</Left>

<Right>
    <About>About</About>
    <Services>Services</Services>
    <Projects>Projects</Projects>
    <Contact>Contact</Contact>
</Right>
</Navbar>
<Title>WE ARE CREATIVES</Title>
<Arrow>
<svg width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" 
stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round"
 stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>

</Arrow>

  </Container>
  );
};

export default Header;
