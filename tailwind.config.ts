
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // CodeRush custom colors with more vibrant childish palette
                coderush: {
                    purple: '#9D50FF', 
                    blue: '#4FAAFF',
                    pink: '#FF57D2',
                    orange: '#FFA84F',
                    green: '#4FE685',
                    yellow: '#FFDE59',
                    gray: '#6B7280',
                    dark: '#1F2937'
                }
			},
			fontFamily: {
				mono: ['Fira Code', 'monospace'],
				sans: ['Inter', 'sans-serif'],
                pixel: ['"Press Start 2P"', 'cursive'],
                retro: ['VT323', 'monospace']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'caret-blink': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                'pulse': {
                    '0%, 100%': {
                        opacity: '1',
                    },
                    '50%': {
                        opacity: '0.5',
                    },
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-10px)',
                    },
                },
                'bounce-small': {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-4px)',
                    },
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'caret-blink': 'caret-blink 1.2s ease-out infinite',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
                'bounce-small': 'bounce-small 2s ease-in-out infinite',
			},
            boxShadow: {
                'pixel': '4px 4px 0px rgba(0, 0, 0, 1)',
                'pixel-lg': '8px 8px 0px rgba(0, 0, 0, 1)',
                'pixel-xl': '12px 12px 0px rgba(0, 0, 0, 1)',
                'pixel-inner': 'inset 4px 4px 0px rgba(0, 0, 0, 0.2)',
                'course-card': '0 10px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)',
                'hover-card': '0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)',
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
