import React from 'react';
import styled, { keyframes } from 'styled-components';
import { HalfCircleSpinner } from 'react-epic-spinners';





const animation = keyframes`
  from { 
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;



const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 0.5s;
`;



const Loading = ({ size }) => (
  <LoadingContainer>
    <HalfCircleSpinner color="#21C5E5" size={size} />
  </LoadingContainer>
);





export default Loading;