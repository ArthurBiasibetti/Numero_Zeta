import React from 'react';

import { Text } from '../styles/components/styles'

import {
  WrapperInput,
  WrapperResult,
  Button, 
  Input,
  Soma
} from '../styles/components/Content/content';

import { Container } from '../styles/components/Content/content.js';

function Content({ zeta, formEvent, inputEvent }) {
  return (
    <Container>
      <WrapperInput onSubmit={formEvent}>
        <Input onChange={inputEvent} type='number' min= '0' title='Apenas números'/>
        <Button>Executar</Button>
      </WrapperInput>

      <WrapperResult>
        <Text>&zeta; = 
          <Text resultado as='span'> {zeta.length}</Text>
        </Text>
      </WrapperResult>

      <Soma>
        Números: {zeta.map((numero, i, array) => i+1 < array.length ? numero + ' + ' : numero )}
      </Soma>

  </Container>
  );
}

export default Content;