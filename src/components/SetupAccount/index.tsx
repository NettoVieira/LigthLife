import React from 'react';

import { Container, CountStep, Title, Description } from './styles';

interface Props {
  lengthSetup: number;
  numberSetup: number;
  title: string;
  description: string;
}

export function SetupAccount({ lengthSetup, description, numberSetup, title }: Props) {
  return (
    <Container>
      <CountStep>
        {numberSetup} / {lengthSetup}
      </CountStep>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
