import { FC } from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
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

interface IButtonProps {
	children: string;
}

const Button: FC<IButtonProps> = ({ children }) => {
	return <StyledButton>{children}</StyledButton>;
};

export default Button;
