import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/authContext';
import api from '../../services/api';
import { Container, Button, InfoContainer } from './style';

interface Company {
  cnpj: string;
  fantasia: string;
  nome: string;
}

interface cardCnpjProps {
  cnpj: string;
  handleOpenModal: Function;
  handleSetSelectedCnpj: Function;
}

const CardCnpj: React.FC<cardCnpjProps> = ({
  children,
  cnpj,
  handleOpenModal,
  handleSetSelectedCnpj,
}) => {
  const { token } = useAuth();

  useEffect(() => {
    api.get(`cnpj/get/${cnpj}`).then((company) => setCompany(company.data));
  }, [cnpj]);

  const [company, setCompany] = useState<Company>({} as Company);
  const history = useHistory();

  return (
    <Container>
      <InfoContainer>
        <p> {company.nome} </p>
        <p> CNPJ: {cnpj} </p>
      </InfoContainer>
      {token ? (
        <Button
          onClick={() => {
            handleOpenModal(true);
            handleSetSelectedCnpj(cnpj);
          }}
        >
          Ver Detalhes
        </Button>
      ) : (
        <Button onClick={() => history.push('/login')}>
          Faça login para ver mais
        </Button>
      )}
    </Container>
  );
};

export default CardCnpj;
