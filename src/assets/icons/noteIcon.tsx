import React from 'react';
import Svg, {Path} from 'react-native-svg';

const NoteIcon = ({size, fill, ...props}: {size: number; fill: string}): any => {
  return (
    <Svg
      enable-background="new 0 0 96 96"
      height={size}
      width={size}
      id="arrow_right"
      fill={fill}
      {...props}
      viewBox="0 0 96 96">
      <Path d="M12 21v-2.125l5.3-5.3l2.125 2.125l-5.3 5.3Zm-9-5v-2h7v2Zm17.125-1L18 12.875l.725-.725q.275-.275.7-.275q.425 0 .7.275l.725.725q.275.275.275.7q0 .425-.275.7ZM3 12v-2h11v2Zm0-4V6h11v2Z" />
    </Svg>
  );
};
export default NoteIcon;
