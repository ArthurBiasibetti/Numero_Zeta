import React, { useState } from 'react';
import GlobalStyle from './styles/globalStyles';

import { 
  Container,
  WrapperBox,
  WrapperInput,
  WrapperResult,
  WrapperFooter,
  Button, 
  Input,
  Text,
  Soma
} from './styles/components/styles';



function App() {
  const [numero, setNumero] = useState(0);
  const [zeta, setZeta] = useState([]);
  
  function handleSubmit (e){
    e.preventDefault();
    calculaZeta(numero);
  }

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

  function calculaZeta(numero, array){  
    const fibo = fibonacci(numero);
    const listaNumeros = array ? array : [];
    
    listaNumeros.push(fibo)
    
    
    console.log(`${numero} - ${fibo}`);
    let novoNumero = numero - fibo;
    console.log('novoNumero: '+ novoNumero)
    
    
    if(novoNumero === 0){
      console.log('Fim')
      console.log(listaNumeros);
      return setZeta(listaNumeros) 
    }
    calculaZeta(novoNumero, listaNumeros)
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <WrapperBox>  
          <Text>Número zeta</Text>
          <WrapperInput onSubmit={event => handleSubmit(event)}>
            <Input onChange={event => setNumero(event.target.value)} type='number' min= '0' title='Apenas números'/>
            <Button>Executar</Button>
            
          </WrapperInput>

          <WrapperResult>
            <Text>&zeta; = 
              <Text resultado as='span'> {zeta.length}</Text>
            </Text>

            <Soma>
              Numeros: {zeta.map((numero, i, array) => i+1 < array.length ? numero + ' + ' : numero )}
            </Soma>
          </WrapperResult>
          <WrapperFooter>
            {zeta.length}
          </WrapperFooter>
        </WrapperBox>
      </Container>
    </>
  );
}

export default App;

