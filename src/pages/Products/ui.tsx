import { FC, Suspense, lazy } from 'react';

import { ProductsListSkeleton } from 'features/ProductsList';

const ProductListLazy = lazy(
	() => import('features/ProductsList/ui/ProductsList')
);

const Products: FC = () => {
	return (
		<Suspense fallback={<ProductsListSkeleton />}>
			<ProductListLazy />
		</Suspense>
	);
};

export default Products;
