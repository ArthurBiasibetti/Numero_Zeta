import React, { useState } from 'react';
import GlobalStyle from './styles/globalStyles';

import { 
  Container,
  WrapperBox,
  Button, 
  Input,
  Zeta as Z,
  Text,
  WrapperInput
} from './styles/components/styles';



function App() {
  const [numero, setNumero] = useState(0);
  const [zeta, setZeta] = useState([]);
  function fibonacci(numero){
    let fibonacci = 1;
    let fibonacci2 = 0
    
    while(fibonacci <= numero){
      fibonacci = fibonacci + fibonacci2
      fibonacci2 = fibonacci - fibonacci2
    }
    console.log('fibo: '+fibonacci + ' fibo2: '+fibonacci2)
    return fibonacci2;
  }

    function calculaZeta(numero){
    const fibo = fibonacci(numero);

    setZeta(Zeta => [...Zeta, fibo])
    
    console.log(`${numero} - ${fibo}`);
    let novoNumero = numero - fibo;
    console.log('novoNumero: '+ novoNumero)

    
    if(novoNumero !== 0){
      calculaZeta(novoNumero)
    }
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <WrapperBox>  
          <Text>Número zeta</Text>
          <WrapperInput>
            <Input onChange={event => setNumero(event.target.value)} type='number' min= '0' title='Apenas números'/>
            <Button onClick={() => calculaZeta(numero)}>Executar</Button>
          </WrapperInput>
        </WrapperBox>
      </Container>
    </>
  );
}

export default App;
