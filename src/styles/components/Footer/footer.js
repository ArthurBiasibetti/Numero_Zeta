import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  align-self: flex-end;

  border-top: 1px solid palevioletred;
  padding:  10px 0 0 5px;
  

  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
  scrollbar-width: 0;  
`;