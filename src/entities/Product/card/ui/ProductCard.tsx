import { FC, ReactNode } from 'react';

import styled from 'styled-components';

import { parserFromISODate } from 'entities/Product/lib';

import Chip from 'shared/ui/Chip';
import Like from 'shared/ui/Like';
import Skeleton from 'shared/ui/Skeleton';
import Typography from 'shared/ui/Typography';

const StyledContainer = styled.div`
	width: 224px;
	overflow: hidden;
	border-radius: 12px;
	filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.08));
`;
const StyledSwiper = styled.div`
	height: 260px;
	position: relative;
`;

const GridContainer = styled.div`
	padding: 10px 12px 19px;
	display: grid;
	gap: 10px;
	grid-template-rows: 25px 16px 14px;
	grid-template-areas:
		'a a a a a a a a a a a b'
		'c c c c c c c c c c c c'
		'd d d d d d d d d d e e';
	align-items: center;
	justify-items: end;
	background-color: ${({ theme }) => theme.palette.bg.white};
`;

interface IGridElementProps {
	area: string;
}
const GridElement = styled.div<IGridElementProps>`
	grid-area: ${({ area }) => area};
	width: 100%;
`;

interface IInfoProps {
	children: ReactNode[];
}
const Info: FC<IInfoProps> = ({ children }) => {
	return <GridContainer>{children}</GridContainer>;
};
interface IProductProps {
	address: string;
	createdAt: string;
	price: number;
	seen: boolean;
	title: string;
}
const ProductCard: FC<IProductProps> = ({
	address,
	createdAt,
	price,
	seen,
	title
}) => {
	return (
		<StyledContainer>
			<StyledSwiper>
				<Skeleton radius='0' />

				{seen && (
					<Chip
						top='11px'
						left='50%'
					>
						Просмотрено
					</Chip>
				)}
			</StyledSwiper>
			<Info>
				<GridElement area='a'>
					<Typography
						size='huge'
						contrast
					>
						{price + '₽'}
					</Typography>
				</GridElement>
				<GridElement area='b'>
					<Like />
				</GridElement>
				<GridElement area='c'>
					<Typography contrast>{title}</Typography>
				</GridElement>
				<GridElement area='d'>
					<Typography size='small'>{address.split(' ')[0]}</Typography>
				</GridElement>
				<GridElement area='e'>
					<Typography size='small'>{parserFromISODate(createdAt)}</Typography>
				</GridElement>
			</Info>
		</StyledContainer>
	);
};

export default ProductCard;
