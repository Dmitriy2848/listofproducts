import { FC } from 'react';

import styled from 'styled-components';

interface IChipProps {
	children: string;
	position?: string;
	top: string;
	left: string;
}

const StyledChip = styled.div<IChipProps>`
	position: ${({ position }) => position || 'absolute'};
	top: ${({ top }) => top || '0'};
	left: ${({ left }) => left || '0'};
	transform: translateX(-50%);
	font-size: ${({ theme }) => theme.text.size.small};
	font-weight: 400;
	padding: 5px 8px;
	color: ${({ theme }) => theme.text.color.contrast};
	background-color: #e7e7e7;
	border-radius: 8px;
	user-select: none;
`;

const Chip: FC<IChipProps> = ({ children, position, top, left }) => {
	return (
		<StyledChip
			position={position}
			top={top}
			left={left}
		>
			{children}
		</StyledChip>
	);
};

export default Chip;
