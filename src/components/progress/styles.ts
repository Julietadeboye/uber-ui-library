import * as Progress from '@radix-ui/react-progress';
import {styled} from 'stitches/stitches.config';

export const ProgressRoot = styled(Progress.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '#E8E8E8',
  width: 300,
  height: 25,

  // Fix overflow clipping in Safari
  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
  transform: 'translateZ(0)',
});

export const ProgressIndicator = styled(Progress.Indicator, {
  backgroundColor: '#276EF1',
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});
