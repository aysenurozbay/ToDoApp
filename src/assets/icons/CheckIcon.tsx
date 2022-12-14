import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckIcon = ({size, fill, ...props}: {size: number; fill: string}): any => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" fill={fill} {...props}>
      <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </Svg>
  );
};
export default CheckIcon;
