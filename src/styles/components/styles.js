import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100vw;
  height: 100vh;
`;

export const Text = styled.h3`
  font-size: 16px;
  color: ${props => props.resultado ? "palevioletred" : "black" };
  padding: 5px 0 5px 10px;
`;



