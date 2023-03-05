import 'styled-components';

declare module 'styled-components' {
	export interface ThemeScheme {
		palette: {
			bg: {
				white: string;
				gray: string;
			};
			button: {
				default: string;
				hover: string;
				primary: string;
			};
			skeleton: {
				light: string;
				dark: string;
			};
		};
		text: {
			color: {
				contrast: string;
				default: string;
			};
			size: {
				small: string;
				medium: string;
				large: string;
				huge: string;
			};
		};
	}
}
