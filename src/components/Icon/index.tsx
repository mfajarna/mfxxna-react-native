import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type TIcon = {
  name: string;
  size: number;
};

/**
 * Example usage
 *
 * <Icon name={'name'} size={30} />
 */

const Icon = ({name, size}: TIcon) => {
  return <FontAwesome name={name} size={size} color={'#000'} />;
};

export default Icon;
