import React, { ReactElement, useEffect, useState } from 'react';
import { Text, View, Animated, ImageBackground } from 'react-native';
import coverPng from '../../../assets/images/sf5ce_cover.png';
import {
  backgroundImg,
  container,
  customButton,
  textTitle,
  title,
  width,
} from './index.styles';

import Button from '../../components/Button';
import { COLORS } from '../../constants';
import type { ScreenProps } from '../../types/navigation';

type Props = Pick<ScreenProps, 'navigate'>;

const Login = ({ navigate }: Props): ReactElement => {
  const [header] = useState(new Animated.Value(1.5));

  const resizeHeader = () =>
    Animated.timing(header, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

  useEffect(() => resizeHeader(), []);

  return (
    <View style={container}>
      <Animated.View
        style={{
          width: width,
          backgroundColor: 'red',
          borderBottomLeftRadius: 200,
          borderBottomRightRadius: 200,
          height: '55%',
          transform: [
            {
              scaleY: header,
            },
          ],
        }}
      >
        <ImageBackground
          testID="img"
          source={coverPng}
          style={backgroundImg}
          imageStyle={{
            borderBottomLeftRadius: 200,
            borderBottomRightRadius: 200,
          }}
        ></ImageBackground>
      </Animated.View>
      <View>
        <View style={title}>
          <Text style={textTitle}>Improve Versus Fighting</Text>
        </View>
        <Button
          label="S'inscrire"
          firstColor={COLORS.LIGHTER_RED}
          secondColor={COLORS.DARKER_RED}
          onPress={() => navigate('SignUp')}
          style={customButton}
        />
        <Button
          label="Se connecter"
          firstColor={COLORS.LIGHTER_BLUE}
          secondColor={COLORS.DARKER_BLUE}
          onPress={() => navigate('SignIn')}
          style={customButton}
        />
      </View>
    </View>
  );
};

export default Login;
