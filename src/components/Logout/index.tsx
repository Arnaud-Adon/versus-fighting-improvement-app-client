import { ReactElement } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import logoutPng from '../../../assets/images/logout.png';
import { container, image } from './index.styles';

const Logout = (): ReactElement => {
  const handleLogoutClick = async (): Promise<void> => {};

  return (
    <TouchableOpacity style={container} onPress={handleLogoutClick}>
      <Image testID="logout-img" style={image} source={logoutPng} />
    </TouchableOpacity>
  );
};

export default Logout;
