import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/apt';
import { Container, Button, InfoContainer } from './style';

interface Company {
  cnpj: string;
  fantasia: string;
  nome: string;
}

interface cardCnpjProps{
  cnpj:string;
}

const CardCnpj: React.FC<cardCnpjProps> = ({ children, cnpj }) => {
  useEffect(() => {
    api
      .get(`cnpj/get/${cnpj}`)
      .then((company) => setCompany(company.data));
  }, []);

  const [company, setCompany] = useState<Company>({} as Company);
  const history = useHistory();

  return (
    <Container>
      <InfoContainer>
        <p> {company.nome} </p>
        <p> CNPJ: {cnpj} </p>
      </InfoContainer>

      <Button onClick={() => history.push('/login')}> Faça login para ver mais</Button>
    </Container>
  );
};

export default CardCnpj;
