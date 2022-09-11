import React from 'react';
import Svg, {Path} from 'react-native-svg';

const EmptyDotIcon = ({size, fill, ...props}: {size: number; fill: string}): any => {
  return (
    <Svg
      enable-background="new 0 0 20 20"
      height={size}
      width={size}
      // id="arrow_right"
      fill={fill}
      {...props}
      viewBox="0 0 20 20">
      <Path d="M7.8 10a2.2 2.2 0 0 0 4.4 0a2.2 2.2 0 0 0-4.4 0zz" />
    </Svg>
  );
};
export default EmptyDotIcon;

// export function EntypoDotSingle(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
//       <path fill="currentColor" d="M7.8 10a2.2 2.2 0 0 0 4.4 0a2.2 2.2 0 0 0-4.4 0z" />
//     </svg>
//   );
// }
