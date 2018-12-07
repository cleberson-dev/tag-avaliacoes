import styled, { keyframes } from 'styled-components';





export const GoBack = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  cursor: pointer;
  font-weight: 300;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;


const animation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


export const DetailContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 0.6s;

  background-color: rgba(53, 78, 83, .8);
`;

export const Heading = styled.h3`
  color: ${props => props.theme.primary};
  font-weight: bold;
  text-transform: uppercase;
  margin: auto;
  text-align: center;
  margin-bottom: 15px;
`;

export const SubHeading = styled.h5`
  text-transform: uppercase;
  color: #354E53;
  text-align: center;
  font-weight: 500;
`;