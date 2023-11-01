import React, { forwardRef, useState, useEffect } from 'react';
import { ProgressRoot, ProgressIndicator } from './styles';

interface Props {
  progress?: number;
}

const Progress = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ProgressRoot value={progress}>
      <ProgressIndicator style={{ transform: `translateX(-${100 - progress}%)` }} />
    </ProgressRoot>
  );
});

export default Progress;