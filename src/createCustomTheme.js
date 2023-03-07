import { createTheme } from "@mui/material/styles";

const themeObj = {
	light: {
		text: {
			primary: "#000",
		},
		background: {
			hard: "#fff",
			medium: "#fdfdfd",
			light: "#efefef",
			borderLight: "#bdbdbd",
			shadow: "#000",
		},
	},

	dark: {
		text: {
			primary: "#fff",
		},
		background: {
			hard: "#000",
			medium: "#151515",
			light: "#212121",
			borderLight: "#424242",
			shadow: "#000",
		},
	},
};

export const createCustomTheme = (mode) =>
	createTheme({
		palette: {
			mode,
			...themeObj[mode],
		},
		typography: {
			fontFamily: ["Poppins", "sans-serif"].join(","),
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: (theme) => `
		    body {
		      background-color: ${theme.palette.mode === "dark" ? "#131213" : "#fdfdfd"}
		    }
		  `,
			},
			MuiButton: {
				variants: [
					{
						props: { variant: "gradient" },
						style: {
							background:
								"linear-gradient(97.01deg, #6C7DEB 8.16%, #50A6ED 103.71%)",
							boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.3)",
							color: "#fff",
							fontFamily: '"Poppins", sans-serif',
							fontStyle: "normal",
							fontSize: "16px",
							lineHeight: "24px",
							letterSpacing: "0.045em",
							"&:hover": {
								background:
									"linear-gradient(97.01deg, #50A6ED 8.16%, #6C7DEB 103.71%)",
							},
						},
					},
				],
			},
		},
	});
