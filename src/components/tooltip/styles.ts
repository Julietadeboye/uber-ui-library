import {styled, keyframes, VariantProps} from 'stitches/stitches.config';
import * as Tooltip from '@radix-ui/react-tooltip';
// import { violet, blackA } from '@radix-ui/colors';

const slideUpAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateY(2px)'},
  '100%': {opacity: 1, transform: 'translateY(0)'},
});

const slideRightAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateX(-2px)'},
  '100%': {opacity: 1, transform: 'translateX(0)'},
});

const slideDownAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateY(-2px)'},
  '100%': {opacity: 1, transform: 'translateY(0)'},
});

const slideLeftAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateX(2px)'},
  '100%': {opacity: 1, transform: 'translateX(0)'},
});

const getTooltipAnimation = position => {
  switch (position) {
    case 'top':
      return slideDownAndFade;
    case 'right':
      return slideLeftAndFade;
    case 'bottom':
      return slideUpAndFade;
    case 'left':
      return slideRightAndFade;
    default:
      return slideDownAndFade;
  }
};

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '$radii$base',
  border: 'none',
  padding: '10px 15px',
  fs: '0.875rem',
  fWeight: '$medium',
  lh: '1rem',
  color: '$white',
  backgroundColor: '$primary',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  us: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side]': {
      animationName: data => getTooltipAnimation(data.side || 'top'),
    },
  },
});

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '#282828',
  border: 'none',
});

export const Icon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$primary',
  backgroundColor: 'white',
  boxShadow: `0 2px 10px '$primary'`,
  '&:focus': {boxShadow: `0 0 0 2px black`},
});
