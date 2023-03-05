import { FC } from 'react';

import styled, { keyframes } from 'styled-components';

interface ISkeletonProps {
	children?: null;
	width?: string;
	height?: string;
	radius?: string;
	bgColor?: string;
	light?: boolean;
}

const wave = keyframes`
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(100%);
	}
`;

const StyledSkeleton = styled.div<ISkeletonProps>`
	position: relative;
	width: ${({ width }) => width || ''};
	height: ${({ height }) => height || ''};
	background-color: ${({ light, theme }) =>
		light ? theme.palette.skeleton.light : theme.palette.skeleton.dark};
	border-radius: ${({ radius }) => radius || '8px'};
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(0, 0, 0, 0.08),
			transparent
		);
		animation: ${wave} 3s linear infinite;
	}
`;

const Skeleton: FC<ISkeletonProps> = ({ width, height, radius, light }) => {
	return (
		<StyledSkeleton
			width={width}
			height={height}
			radius={radius}
			light={light}
		/>
	);
};

export default Skeleton;
