import React, { useEffect } from "react";
import Header from "../../componets/header";
import SearchInput from "../../componets/searchInput";
import { Container, Content } from "./style";
import { FiSearch } from "react-icons/fi";
import api from "../../services/apt";

function App() {
  useEffect(() => {
    const allCnpjs = localStorage.getItem("@CNPJ:All");
    
    if (!allCnpjs) {
      api.get("/cnpj/get-all").then((cnpjs) => {
        localStorage.setItem("@CNPJ:All", JSON.stringify(cnpjs.data));
      });
    }
  }, []);
  return (
    <Container>
      <Header />
      <Content>
        <h1>Consultar CNPJ's</h1>
        <SearchInput 
        Icon={FiSearch} 
        placeholder="EX: 99999999999999" 
        />
      </Content>
    </Container>
  );
}

export default App;
