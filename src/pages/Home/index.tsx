import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/header';
import CardCnpj from '../../components/cnpjCard';
import SearchInput from '../../components/searchInput';
import Modal from '../../components/modal';

import { Container, Content } from './style';
import { FiSearch } from 'react-icons/fi';
import api from '../../services/api';
import * as yup from 'yup';

function App() {
  useEffect(() => {
    const allCnpjs = localStorage.getItem('@CNPJ:All');

    if (!allCnpjs) {
      api.get('/cnpj/get-all').then((cnpjs) => {
        localStorage.setItem('@CNPJ:All', JSON.stringify(cnpjs.data));
      });
    }
  }, []);

  const schema = yup.object().shape({
    cnpj: yup
      .string()
      .required('O campo não pode ficar em branco!')
      .min(3, 'Por favor, informe pelo menos 3 numeros')
      .max(14, 'Por favor, informe no máximo 14 numeros'),
  });

  const [cnpjSearch, setCnpjSearch] = useState('');
  const [message, setMessage] = useState('');
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCnpj, setSelectedCnpj] = useState('');

  const handleSearchCnpjs = useCallback(async () => {
    const localStorageCnpj = localStorage.getItem('@CNPJ:All');
    if (!localStorageCnpj) return;

    try {
      await schema.validate({ cnpj: cnpjSearch }).then((cnpj) => {
        const cnpjs: string[] = JSON.parse(localStorageCnpj);

        const result = cnpjs.filter((cnpjNumber) => {
          return cnpjNumber.substr(0, cnpjSearch.length) === cnpjSearch;
        });

        result.length >= 1 && setMessage('');

        result.length > 0 
        ? setSearchResult(result)
        : setMessage('Nenhum Cnpj foi encontrado com esse valor');

        
      });
    } catch (error) {
      setMessage(error.message);
    }
  }, [cnpjSearch, schema]);

  return (
    <Container>
      <Header />
    {
      modalIsOpen && 
      <Modal
        handleOpenModal={setModalIsOpen}
        isOpenModal={modalIsOpen}
        selectedCnpj={selectedCnpj}
       />
    }  
      <Content>
        <h1>Consultar CNPJ's</h1>
        <SearchInput
          Icon={FiSearch}
          placeholder='EX: 99999999999999'
          onChange={(e) => setCnpjSearch(e.target.value)}
          handleSubmit={handleSearchCnpjs}
          value={cnpjSearch}
        />
        {message.length > 0 && <span>{message}</span>}
        {searchResult && searchResult.map(cnpj => {
          return <CardCnpj 
          cnpj={cnpj} 
          key={cnpj}
          handleOpenModal={setModalIsOpen}
          handleSetSelectedCnpj={setSelectedCnpj}
          />
        })}
      </Content>
    </Container>
  );
}

export default App;
