import React from 'react';

import { Container } from '../styles/components/Footer/footer';

function Footer({lista}) {

  return (
    <Container>
       Histórico:{lista.map((numero, i, array) => i+1 < array.length ? numero + ',' : numero )}
    </Container>
  );
}

export default Footer;