import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Contacts from "../components/Contacts";
import Photos from "../components/Photos";
import Footer from "../components/Footer";

const Container = styled.div`
overflow:hidden;`;
const Home = () => {
  return (
    <Container>
      <Header />
      <Gallery />
      <Contacts />
      <Photos/>
      <Footer/>
    </Container>
  );
};

export default Home;
