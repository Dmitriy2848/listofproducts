import { FC } from 'react';

import styled, { css } from 'styled-components';

interface ITypographyProps {
	children?: string;
	weight?: number;
	primary?: boolean;
	contrast?: boolean;
	size?: 'small' | 'medium' | 'large' | 'huge' | string;
}

const StyledTypography = styled.span<ITypographyProps>`
	display: inline-block;
	font-weight: ${({ weight }) => weight || '500'};
	color: ${({ theme }) => theme.text.color.default};

	${({ primary }) =>
		primary &&
		css`
			color: ${({ theme }) => theme.text.color.primary};
		`}
	${({ contrast }) =>
		contrast &&
		css`
			color: ${({ theme }) => theme.text.color.contrast};
		`}

	${({ size }) => {
		switch (size) {
			case 'small':
				return css`
					font-size: ${({ theme }) => theme.text.size.small};
				`;
			case 'large':
				return css`
					font-size: ${({ theme }) => theme.text.size.large};
				`;
			case 'medium':
				return css`
					font-size: ${({ theme }) => theme.text.size.medium};
				`;
			case 'huge':
				return css`
					font-size: ${({ theme }) => theme.text.size.huge};
				`;
			default:
				return css`
					font-size: ${size};
				`;
		}
	}}
`;

const Typography: FC<ITypographyProps> = ({
	children,
	primary,
	contrast,
	weight,
	size
}) => {
	return (
		<StyledTypography
			weight={weight}
			contrast={contrast}
			size={size}
			primary={primary}
		>
			{children}
		</StyledTypography>
	);
};

export default Typography;
