import React from 'react';
import styled from 'styled-components';

export const FlatButton = styled.button`
  border: none;
  background-color: ${props => props.theme.primary};
  color: white;
  width: fit-content;
  height: fit-content;
  padding: 9px 13px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    color: ${props => props.theme.primary};
    background-color: rgba(0,0,0,.04);
    transition: 0.2s ease;
    outline: 1px solid ${props => props.theme.primary};
  }
`;

