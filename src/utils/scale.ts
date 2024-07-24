import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Defina dimensões de referência para diferentes categorias de dispositivos Android
const smallDevice = { width: 360, height: 640 }; // Ex: dispositivo pequeno
const mediumDevice = { width: 411, height: 731 }; // Ex: dispositivo médio
const largeDevice = { width: 480, height: 800 }; // Ex: dispositivo grande

// Função para determinar a dimensão de referência apropriada
const getGuidelineBase = () => {
  if (Platform.OS === 'android') {
    if (width <= smallDevice.width) {
      return smallDevice;
    } else if (width <= mediumDevice.width) {
      return mediumDevice;
    } else {
      return largeDevice;
    }
  }

  // Caso seja iOS, use as referências anteriores (ou outras, conforme necessário)
  return { width: 375, height: 812 }; // Ex: iPhone X
};

const { width: guidelineBaseWidth, height: guidelineBaseHeight } = getGuidelineBase();

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };
