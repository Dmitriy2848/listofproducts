import { FC } from 'react';

import styled from 'styled-components';

import { SkeletonProductCard } from 'entities/Product';

import Skeleton from 'shared/ui/Skeleton';

const StyledContainer = styled.div`
	max-width: 1000px;
	margin: 92px auto 0;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 24px;
`;
const StatusWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 31px 0;
`;

const ProductsListSkeleton: FC = () => {
	const fakeList = Array(20).fill(0);

	return (
		<>
			<StyledContainer>
				{fakeList.map((_, i) => (
					<SkeletonProductCard key={i} />
				))}
			</StyledContainer>
			<StatusWrapper>
				<Skeleton
					width='125px'
					height='32px'
					radius='45px'
				/>
			</StatusWrapper>
		</>
	);
};

export default ProductsListSkeleton;
