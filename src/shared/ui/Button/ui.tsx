import { FC } from 'react';

import styled from 'styled-components';

interface IButtonProps {
	children: string;
	onClick?: () => void;
	margin?: string;
}

const StyledButton = styled.button<IButtonProps>`
	outline: none;
	border: none;
	cursor: pointer;
	padding: 8px 15px;
	color: ${({ theme }) => theme.palette.button.primary};
	font-weight: 500;
	font-size: ${({ theme }) => theme.text.size.medium};
	background-color: ${({ theme }) => theme.palette.bg.white};
	border-radius: 45px;
`;

const Button: FC<IButtonProps> = ({ children, onClick, margin }) => {
	return (
		<StyledButton
			onClick={onClick}
			margin={margin}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
