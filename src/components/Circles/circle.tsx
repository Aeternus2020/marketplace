import React from 'react';
import '../../styles/login.sass';

interface CircleProps {
  size: number;
  x: number;
  y: number;
  background: string;
  maxW: number;
  maxH: number;
}

const Circle: React.FC<CircleProps> = ({
  size,
  x,
  y,
  background,
  maxW,
  maxH,
}) => {
  const maxX = maxW - size;
  const maxY = maxH - size;
  const clampedX = Math.min(maxX, Math.max(0, x));
  const clampedY = Math.min(maxY, Math.max(0, y));

  const circleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    left: `${clampedX}px`,
    top: `${clampedY}px`,
    backgroundColor: background,
  };

  return (
    <div className="circle" style={circleStyle}>
      {' '}
    </div>
  );
};

export default Circle;
