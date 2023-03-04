import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteSvgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [react(), viteSvgr()]
});
