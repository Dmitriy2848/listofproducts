import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Products from 'pages/Products/ui';

import { ProductSingle } from 'entities/Product';

//todo изменить лоигку, пустого массива быть не может
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Products />}
				/>
				<Route
					path='/:id'
					element={<ProductSingle />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
