import React from 'react';
import Svg, {Path} from 'react-native-svg';

const DeleteIcon = ({size, fill, ...props}: {size: number; fill: string}): any => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" fill={fill} {...props}>
      <Path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
    </Svg>
  );
};
export default DeleteIcon;
