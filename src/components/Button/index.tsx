import React from 'react';
import { View } from 'react-native';
import { Container, IconWrapper, TextButton, TextWrapper } from './styles';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

interface Props {
  text: string;
  showIconRight?: boolean;
  showIconLeft?: boolean;
  iconName?: keyof typeof AntDesign.glyphMap;
  iconColor?: string;
}

export function Button({text, showIconRight, showIconLeft, iconName, iconColor}: Props) {
  
  return (
    <Container showIconRight={showIconRight} showIconLeft={showIconLeft}>
      {showIconLeft && (
        <IconWrapper>
          <AntDesign name={iconName} size={24} color={iconColor} />
        </IconWrapper>
      )}
      <TextWrapper showIconRight={showIconRight} showIconLeft={showIconLeft}>
        <TextButton>{text}</TextButton>
      </TextWrapper>
      {showIconRight && (
        <IconWrapper>
          <AntDesign name={iconName} size={24} color={iconColor} />
        </IconWrapper>
      )}
    </Container>
  )
}
