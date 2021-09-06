module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'header-gradient': 'linear-gradient(-45deg, #d754ab, #fd723a)',
			}),
		},
		height: {
			45: '45vh',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
