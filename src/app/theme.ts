import { ThemeScheme } from 'styled-components';

const theme: ThemeScheme = {
	palette: {
		bg: {
			white: '#ffffff',
			gray: '#e8e8e8'
		},
		button: {
			default: '#c7c7c7',
			hover: '#a4a4a4',
			primary: '#00a0ab'
		},
		skeleton: {
			light: '#f8f8f8',
			dark: '#eaeaea'
		}
	},
	text: {
		color: {
			primary: '#00a0ab',
			contrast: '#2c2c2c',
			default: '#8f8f8f'
		},
		size: {
			small: '12px',
			medium: '14px',
			large: '16px',
			huge: '22px'
		}
	}
};

export { theme };
