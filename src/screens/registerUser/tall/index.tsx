import React from 'react';
import { Container } from './styles';
import { Button } from '~/components/Button';


export function Tall() {
  return (
    <Container>
      <Button 
        text='Login'
        showIconRight={true}
        iconName={"plus"}
      />
    </Container>
  );
}
