import { FC, useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';

import styled from 'styled-components';

import fetchProducts from 'features/ProductsList/api';

import LoadingStatus from 'entities/LoadingStatus';
import { ProductCard } from 'entities/Product';

import Button from 'shared/ui/Button';

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
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 31px 0;
`;
type Product = {
	id: string;
	address: string;
	createdAt: string;
	price: number;
	seen: boolean;
	title: string;
};

type Status = 'loading' | 'empty' | 'error' | 'ok';

const ProductsList: FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [page, setPage] = useState(1);
	const [loadingResult, setLoadingResult] = useState<Status>('ok');

	useEffect(() => {
		setLoadingResult('loading');
		fetchProducts(page)
			.then((items: Product[]) => {
				setProducts((prev) => prev.concat(items));
				setLoadingResult('ok');
			})
			.catch(() => {
				setLoadingResult('error');
			});
	}, [page]);

	const CorrectButton: FC = () => {
		if (loadingResult === 'loading' || loadingResult === 'empty') return null;

		if (loadingResult === 'error') {
			return (
				<Button onClick={() => setPage(page + 1)}>Повторить попытку</Button>
			);
		}
		return <Button onClick={() => setPage(page + 1)}>Показать еще</Button>;
	};

	return (
		<>
			<StyledContainer>
				{products?.map((product: Product, index) => (
					<ProductCard
						key={index}
						address={product.address}
						createdAt={product.createdAt}
						price={product.price}
						seen={product.seen}
						title={product.title}
					/>
				))}
			</StyledContainer>
			<StatusWrapper>
				{loadingResult !== 'ok' && <LoadingStatus status={loadingResult} />}
				{page !== 10 && <CorrectButton />}
			</StatusWrapper>
		</>
	);
};

export default ProductsList;
