import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  
  width: 100vw;
  height: 100vh;

  padding: 25px;
`;

export const WrapperBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;


  width: 500px;
  height: 500px;

  border: 8px solid papayawhip;
  flex-wrap: wrap;
`;

export const WrapperInput = styled.div``;

export const Text = styled.h3`

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

export const Zeta = styled.h3`
  margin-top: 10px;
`;



