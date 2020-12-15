import React, { useState } from 'react';

import Header from './components/Header';

import Content from './components/Content';

import Footer from './components/Footer';

import { 
  Container
} from './styles/components/styles';

function App() {
  const [numero, setNumero] = useState(0);
  const [zeta, setZeta] = useState([]);
  const [ListaZetas, setListaZetas] = useState([]);

  const inputEvent = event => setNumero(event.target.value);
  
  function handleSubmit (e){
    e.preventDefault();
    calculaZeta(numero);
  }

  function fibonacci(numero){
    let fibonacci = 1;
    let fibonacci2 = 0;
    
    while(fibonacci <= numero){
      fibonacci = fibonacci + fibonacci2;
      fibonacci2 = fibonacci - fibonacci2;
    }
    console.log('fibo: '+fibonacci + ' fibo2: '+fibonacci2);
    return fibonacci2;
  }

  function calculaZeta(numero, array){  
    const fibo = fibonacci(numero);
    const listaNumeros = array || [];
    
    listaNumeros.push(fibo);
    
    
    console.log(`${numero} - ${fibo}`);
    let novoNumero = numero - fibo;
    console.log('novoNumero: '+ novoNumero);
    
    
    if(novoNumero === 0){ 
      setListaZetas([listaNumeros.length, ...ListaZetas]);
      return setZeta(listaNumeros);

    }
    calculaZeta(novoNumero, listaNumeros);
  }

  return (
      <Container>
          <Header title='Número Zeta - Arthur Biasibetti Farias' />
          <Content zeta={zeta} formEvent={handleSubmit} inputEvent= {inputEvent}/>
          <Footer lista={ListaZetas} />
      </Container>
  );
}

export default App;

