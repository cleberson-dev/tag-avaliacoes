import styled from 'styled-components';





export const InfoList = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(2, auto);
  grid-auto-flow: column;
  grid-gap: 10px;
  margin: 0;
  padding: 0;
`;

export const InfoTitle = styled.div`
  color: #B7B7B7;
  font-size: 0.6rem;
  text-transform: uppercase;
`;

export const InfoSubtitle = styled.span`
  font-weight: 300;
  font-size: 0.9rem;
`;