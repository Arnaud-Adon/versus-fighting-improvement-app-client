import React, { ReactElement } from 'react';
import { View, Image } from 'react-native';
import TatsumakiGif from '../../../assets/images/Tatsumaki.gif';
import { container, image } from './index.styles';

const Loading = (): ReactElement => {
  return (
    <View testID="loading" style={container}>
      <Image testID="img" style={image} source={TatsumakiGif} />
    </View>
  );
};

export default Loading;
