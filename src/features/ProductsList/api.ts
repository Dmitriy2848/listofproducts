import axios from 'axios';

const fetchProducts = async (page: number) => {
	const url = `https://testguru.ru/frontend-test/api/v1/ads?page=${page}`;
	const res = await axios.get(url);
	return res.data.items;
};

export default fetchProducts;
