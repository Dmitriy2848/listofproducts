import { FC } from 'react';

import styled from 'styled-components';

import { ReactComponent as Heart } from 'shared/assets/icons/heart.svg';

interface ILikeProps {
	isActive?: boolean;
	onClick?: () => void;
}

const StyledLike = styled.button<ILikeProps>`
	background-color: transparent;
	outline: none;
	border: none;
	cursor: pointer;
	svg {
		min-width: 19px;
		transition: 0.1s;
		fill: ${({ theme }) => theme.palette.button.default};
		vertical-align: bottom;
	}
	svg:hover {
		fill: ${({ theme }) => theme.palette.button.hover};
		transform: scale(1.2);
	}
	&[aria-pressed='true'] svg {
		fill: ${({ theme }) => theme.palette.button.primary};
	}
`;

const Like: FC<ILikeProps> = ({ isActive, onClick }) => {
	return (
		<StyledLike
			aria-pressed={isActive}
			onClick={onClick}
		>
			<Heart />
		</StyledLike>
	);
};

export default Like;
