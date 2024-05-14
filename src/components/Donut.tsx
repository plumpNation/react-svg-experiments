import { css } from '@emotion/react';
import { type FC } from 'react';

export type DonutProps = {
  percent?: number;
  size?: number;
  strokeWidth?: number;
}

const containerCss = css({
  position: 'relative',
  display: 'inline-block',
});

const percentCss = (size: number) => css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: size * 0.25 + 'px',
  fontWeight: 600,
  margin: 0,
  fontFamily: 'Poppins, sans-serif',
});

/**
 * Reusable example of an SVG donut chart component.
 * Only displays integer percentages between 0 and 100.
 */
export const Donut: FC<DonutProps> = ({ size = 64, percent: rawPercent = 28.3232 }) => {
  const percent = Math.round(Math.min(100, Math.max(0, rawPercent)));
  const halfSize = size * 0.5;
  const strokeWidth = size * 0.1; // 10% of size
  const radius = halfSize - strokeWidth;
  const circumference = 2 * Math.PI * radius; // 2πr

  return (
    <div css={containerCss}>
      <p css={percentCss(size)}>{percent}%</p>
      <svg width={size} height={size}>
        <circle
            fill="transparent"
            cx={halfSize}
            cy={halfSize}
            r={radius}
            stroke="#FFE2D6"
            strokeWidth={strokeWidth}
          />
        <circle
            fill="transparent"
            strokeLinecap="round"
            cx={halfSize}
            cy={halfSize}
            r={radius}
            stroke="#FC4C01"
            strokeWidth={strokeWidth}
            strokeDasharray={`${(percent / 100) * circumference} ${circumference}`}
            strokeDashoffset={0}
            style={{ transition: 'stroke-dasharray 0.5s' }}
          />
      </svg>
    </div>
  );
};