import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import App from 'app/App';
import GlobalStyles from 'app/globalStyles';
import { theme } from 'app/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Normalize />
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
