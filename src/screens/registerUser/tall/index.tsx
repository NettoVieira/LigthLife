import React from 'react';

import { HeightPicker } from './heightPicker/index';
import { Container } from './styles';

import { SetupAccount } from '~/components/SetupAccount';
export function Tall() {
  return (
    <Container>
      <SetupAccount
        description="We will use this data to give you a better diet type for you"
        lengthSetup={8}
        numberSetup={5}
        title="Qual a sua altura"
      />

      <HeightPicker />
    </Container>
  );
}
