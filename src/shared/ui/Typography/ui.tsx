import { FC } from 'react';

import styled, { css } from 'styled-components';

interface ITypographyProps {
	children?: string;
	weight?: number;
	contrast?: boolean;
	size?: 'small' | 'medium' | 'large' | 'huge';
}

const StyledTypography = styled.span<ITypographyProps>`
	display: inline-block;
	font-weight: ${({ weight }) => weight || '500'};
	color: ${({ contrast, theme }) =>
		contrast ? theme.text.color.contrast : theme.text.color.default};

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
			case 'huge':
				return css`
					font-size: ${({ theme }) => theme.text.size.huge};
				`;
			default:
				return css`
					font-size: ${({ theme }) => theme.text.size.medium};
				`;
		}
	}}
`;

const Typography: FC<ITypographyProps> = ({
	children,
	contrast,
	weight,
	size
}) => {
	return (
		<StyledTypography
			weight={weight}
			contrast={contrast}
			size={size}
		>
			{children}
		</StyledTypography>
	);
};

export default Typography;
