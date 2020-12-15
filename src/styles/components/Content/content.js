import styled from 'styled-components';

import { Text } from '../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const WrapperInput = styled.form``;

export const WrapperResult = styled.div`
  display:flex;
  border: 2px solid palevioletred;
  padding: 0.5em;
  flex-direction: column;
  margin-top: 10px;

`;

export const Soma = styled(Text)`
  max-width: 800px;
  max-height: 150px;

  overflow-y: scroll;

  background-color: #ddd;
  padding: 0.5em;
  margin: 1em;
  /* border: 1px solid #222; */

  line-height: 1.8em;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Button = styled.button`
  width: 10em;
  height: 2em;

  background-color: white;

  margin: 10px 5px 0;
  border: 2px solid palevioletred;

  :hover {
    cursor: pointer;
    transform: scale(1.05)
  }
`;

export const Input = styled.input`
  width: 15em;
  height: 2em;
  
  appearance: textfield;

  padding: 0 1em;

  :invalid {
    border: 1px solid red;
  }
`;
