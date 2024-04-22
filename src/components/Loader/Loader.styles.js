import styled, { keyframes } from 'styled-components';

const animation1 = keyframes`
  from {
		animation-timing-function: ease-in-out;
		stroke-dashoffset: -87.96;
	}
	20% {
		animation-timing-function: ease-in;
		stroke-dashoffset: 0;
	}
	60% {
		stroke-dashoffset: -791.68;
		visibility: visible;
	}
	60.1%,
	to {
		stroke-dashoffset: -791.68;
		visibility: hidden;
	}
`;

const animation2 = keyframes`
  from,
	60% {
		stroke-dashoffset: -87.96;
		visibility: hidden;
	}
	60.1% {
		animation-timing-function: cubic-bezier(0,0,0.5,0.75);
		stroke-dashoffset: -87.96;
		visibility: visible;
	}
	77% {
		animation-timing-function: cubic-bezier(0.5,0.25,0.5,0.88);
		stroke-dashoffset: -340;
		visibility: visible;
	}
	to {
		stroke-dashoffset: -669.92;
		visibility: visible;
	}
`;

export const Svg = styled.svg`
  width: 8em;
  height: 16em;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1200;
  transform: translate(-50%, -50%);
`;

export const Ring = styled.circle`
  stroke: #e9eba9;
  transition: stroke 0.3s;
`;

export const Worm1 = styled.circle`
  animation: ${animation1} 3s infinite;
`;

export const Worm2 = styled.path`
  animation: ${animation2} 3s infinite;
  visibility: hidden;
`;
