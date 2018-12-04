import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0 3px 6px rgba(0,0,0,.16);
  box-sizing: border-box;
  background-color: white;
  padding: 12px;
  width: ${props => props.width};
  height: ${props => props.height || 'fit-content' };
`;

export default Card;