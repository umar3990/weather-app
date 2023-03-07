import { Dialog, DialogContent, useTheme } from "@mui/material";
import React from "react";

import img from "../asset/img.png";

const ImageModal = ({ setShowModal, showModal }) => {
	const theme = useTheme();
	// air quality info modal
	return (
		<>
			<Dialog
				fullWidth={true}
				maxWidth="sm"
				open={showModal}
				scroll="paper"
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
				onClose={() => setShowModal(false)}
				sx={{
					margin: 0,
					padding: 0,
					".MuiDialog-paperScrollPaper": {
						borderRadius: "20px",
						backgroundColor: theme.palette.background.medium,
					},
				}}
			>
				<DialogContent
					sx={{
						width: "100%",
						margin: 0,
						p: 5,
						display: "flex",
						overflow: "hidden",
						backgroundColor: theme.palette.background.medium,
					}}
				>
					<img
						src={img}
						alt=""
						style={{
							width: "100%",
							maxWidth: "500px",
						}}
					/>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ImageModal;
