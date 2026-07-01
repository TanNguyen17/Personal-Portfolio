import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				syne: ['var(--font-syne)', 'sans-serif'],
				space: ['var(--font-space)', 'sans-serif'],
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'navy-blue': '#0c1222',
				'lightest-slate': {
					DEFAULT: '#94a3b8',
					'20': 'rgba(148, 163, 184, 0.08)',
					'75': 'rgba(148, 163, 184, 0.75)',
					'100': 'rgba(148, 163, 184, 1)',
				},
				'blue': {
					DEFAULT: '#38bdf8',
					'10': 'rgba(56, 189, 248, 0.1)',
					'20': 'rgba(56, 189, 248, 0.15)',
					'30': 'rgba(56, 189, 248, 0.3)',
					'40': 'rgba(56, 189, 248, 0.4)',
					'80': 'rgba(56, 189, 248, 0.8)',
				},
				'white': {
					DEFAULT: '#e2e8f0',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: '0.75rem',
				md: '0.5rem',
				sm: '0.25rem'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
