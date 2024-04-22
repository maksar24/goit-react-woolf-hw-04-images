import { Ring, Svg, Worm1, Worm2 } from './Loader.styles';

const Loader = () => {
  return (
    <Svg
      viewBox="0 0 128 256"
      width="128px"
      height="256px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ap-grad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(223,90%,55%)" />
          <stop offset="100%" stopColor="hsl(253,90%,55%)" />
        </linearGradient>
        <linearGradient id="ap-grad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(193,90%,55%)" />
          <stop offset="50%" stopColor="hsl(223,90%,55%)" />
          <stop offset="100%" stopColor="hsl(253,90%,55%)" />
        </linearGradient>
      </defs>
      <Ring
        r="56"
        cx="64"
        cy="192"
        fill="none"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <Worm1
        r="56"
        cx="64"
        cy="192"
        fill="none"
        stroke="url(#ap-grad1)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeDasharray="87.96 263.89"
      />
      <Worm2
        d="M120,192A56,56,0,0,1,8,192C8,161.07,16,8,64,8S120,161.07,120,192Z"
        fill="none"
        stroke="url(#ap-grad2)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeDasharray="87.96 494"
      />
    </Svg>
  );
};

export default Loader;
