import React from 'react';
import styled from 'styled-components';

import tagLogo from '../assets/img/tag-logo.svg';





const HeaderContainer = styled.header`
  background-color: ${props => props.theme.primary};
  color: white;
  display: flex;
  justify-content: center;
  padding: 1.3rem 0;
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 7px;
  font-size: 1.1rem;
`;



const Header = () => (
  <HeaderContainer>
    <img src={tagLogo} alt="Tag Logo" />
    <Title>Avaliações</Title>
  </HeaderContainer>
);





export default Header;