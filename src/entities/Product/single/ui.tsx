import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import styled from 'styled-components';

import Typography from 'shared/ui/Typography';

const StyledContainer = styled.div`
	display: flex;
	width: 70%;
	margin: 0 auto;
`;

const StyledSwiperWrapper = styled.div``;

const StyledInfoWrapper = styled.div``;

const Swiper: FC = () => {
	return <StyledSwiperWrapper></StyledSwiperWrapper>;
};

const Info: FC = () => {
	return (
		<StyledInfoWrapper>
			<Typography>asddasdasadsadsasd</Typography>
		</StyledInfoWrapper>
	);
};
interface ProductSingleParams {
	id: string;
}

const ProductSingle: FC = () => {
	const [product, setProduct] = useState(null);
	const params = useParams<ProductSingleParams>();
	async function fetchProduct(id: string) {
		const url = `https://testguru.ru/frontend-test/api/v1/ads/${params.id}`;
		try {
			const res = await axios.get(url);
			console.log(res);
		} catch {}
	}

	return (
		<StyledContainer>
			<Swiper />
			<Info />
		</StyledContainer>
	);
};

export default ProductSingle;
