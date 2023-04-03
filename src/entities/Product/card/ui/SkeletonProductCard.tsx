import { FC } from 'react';

import styled from 'styled-components';

import Skeleton from 'shared/ui/Skeleton';

const StyledContainer = styled.div`
	width: 225px;
	overflow: hidden;
	border-radius: 12px;
`;
const StyledSwiper = styled.div`
	height: 260px;
	position: relative;
`;
const SkeletonPagination = styled.div`
	position: absolute;
	bottom: 9px;
	left: 50%;
	transform: translateX(-50%);
	width: 56px;
	height: 8px;
	border-radius: 3px;
	background-color: ${({ theme }) => theme.palette.skeleton.light};
`;
const StyledInfo = styled.div`
	padding: 10px 12px 19px;
	display: grid;
	gap: 10px;
	grid-template-rows: 25px 16px 14px;
	grid-template-areas:
		'a a a a a a a a a a b b'
		'c c c c c c c c c c c c'
		'd d d d d d d d d d d d';
	background-color: ${({ theme }) => theme.palette.skeleton.light};
`;

const SkeletonProductCard: FC = () => {
	return (
		<StyledContainer>
			<StyledSwiper>
				<Skeleton radius='0' />
				<SkeletonPagination />
			</StyledSwiper>
			<StyledInfo>
				<Skeleton gridArea='a' />
				<Skeleton gridArea='b' />
				<Skeleton
					radius='6px'
					gridArea='c'
				/>
				<Skeleton
					radius='6px'
					gridArea='d'
				/>
			</StyledInfo>
		</StyledContainer>
	);
};

export default SkeletonProductCard;
