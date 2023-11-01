import React, { useEffect, useState } from 'react';
import '../../styles/login.sass';
import Circle from './circle';

interface AnimationCircleProps {
  maxWidth: number;
  maxHeight: number;
  className: string;
}

const AnimationCircle: React.FC<AnimationCircleProps> = ({
  maxWidth,
  maxHeight,
  className,
}) => {
  const [circles, setCircles] = useState([
    { id: 1, x: 590, y: 430, size: 80, background: 'rgba(166, 77, 220, 0.35)' },
    { id: 2, x: 32, y: 15, size: 105, background: '#F5E4FF' },
    { id: 3, x: 25, y: 320, size: 215, background: 'rgba(134, 17, 205, 0.8)' },
  ]);

  useEffect(() => {
    const animateCircles = () => {
      const newCircles = circles.map((circle) => ({
        ...circle,
        x: Math.random() * 500,
        y: Math.random() * 300,
      }));

      setCircles(newCircles);
    };
    animateCircles();
    const interval = setInterval(animateCircles, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`animation_circle ${className}`}>
      {circles.map((circle) => (
        <Circle
          key={circle.id}
          size={circle.size}
          x={circle.x}
          y={circle.y}
          background={circle.background}
          maxW={maxWidth}
          maxH={maxHeight}
        />
      ))}
    </div>
  );
};

export default AnimationCircle;
