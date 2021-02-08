import React, { useEffect, useState } from 'react';
import { FiX, FiLoader } from 'react-icons/fi';
import api from '../../services/api';
import { Container } from './style';
import { useAuth } from '../../hooks/authContext';

interface mainActivities {
  text: string;
  code: string;
}

interface companyData {
  abertura: string;
  bairro: string;
  capital_social: string;
  email: string;
  telefone: string;
  nome: string;
  fantasia: string;
  situacao: string;
  atividade_principal: mainActivities[];
}

interface modalPropsOpen {
  handleOpenModal: Function;
  isOpenModal: boolean;
  selectedCnpj: string;
}

const ButtonForm: React.FC<modalPropsOpen> = ({
  children,
  handleOpenModal,
  isOpenModal,
  selectedCnpj,
}) => {
  const { token } = useAuth();

  useEffect(() => {
    if (!selectedCnpj) return;

    let apiKey = JSON.parse(token);

    api
      .get(`/cnpj/get/${selectedCnpj}/detail`, {
        headers: {
          'x-api-key': apiKey,
        },
      })
      .then((response) => setCompanyData(response.data));
  }, [selectedCnpj, token]);

  const [companyData, setCompanyData] = useState<companyData>(
    {} as companyData
  );


  return (
    <Container isOpen={isOpenModal}>
      <button
        onClick={() => {
          handleOpenModal(false);
        }}
      >
        <FiX />
      </button>
      {!companyData.capital_social && <FiLoader />}
      {companyData.capital_social && (
        <>
          <h2>Informações</h2>
          <p>Nome:</p>
          <p> {companyData.nome}</p>
          <p>Nome Fantasia:</p>
          <p>{companyData.fantasia}</p>
          <p>Situaçao : {companyData.situacao}</p>
          <h3>Atividade principal</h3>
          <p>{
            companyData.atividade_principal[0].text 
          }</p>
          <h3>Contato</h3>
          <p>Fone: {companyData.telefone}</p>
          <p>E-mail: {companyData.email}</p>
          <h3>Capital social</h3>
          <p>{companyData.capital_social}</p>
        </>
      )}

      {children}
    </Container>
  );
};

export default ButtonForm;
