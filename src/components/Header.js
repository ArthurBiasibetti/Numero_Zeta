import React from 'react';

import { Container } from '../styles/components/Header/header';

import { Text } from '../styles/components/styles';

function Header({ title }) {
  return (
    <Container>
      <Text> {title} </Text>
    </Container>
  );
}

export default Header;