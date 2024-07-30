import styled from 'styled-components/native';

interface TextWrapperProps {
  showIconRight?: boolean;
  showIconLeft?: boolean;
}

export const Container = styled.TouchableOpacity<TextWrapperProps>`
  border-radius: 10px;
  height: 60px;
  align-items: center;
  padding: ${props => props.showIconLeft || props.showIconRight ? '0px 30px 0px 30px' : '0px'};
  flex-direction: ${props => props.showIconLeft || props.showIconRight ? 'row' : 'column'};
  justify-content: ${props => props.showIconLeft || props.showIconRight ? 'space-between' : 'center'};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_medium};
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const IconWrapper = styled.View`
  padding: 0 10px;
`;


export const TextWrapper = styled.View<TextWrapperProps>`
  flex: 1;
  justify-content: center;
  align-items: ${({ showIconRight, showIconLeft }) =>
    showIconRight ? 'flex-start' : showIconLeft ? 'flex-end' : 'center'};
`;

