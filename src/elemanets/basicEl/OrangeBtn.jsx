import React from 'react';
import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";
import {orange} from "@mui/material/colors";


const OrangeBtn = ({icon, text, sx, fullWidth = false, size = 'medium'}) => {

	const ColorButton = styled(Button)(({ theme }) => ({
		backgroundColor: orange[500],
		minWidth: 105,
		/*marginLeft: 30,*/
		'&:hover': {
			backgroundColor: orange[700],
		},
	}));

	return (
			<ColorButton variant="contained" startIcon={icon} size={size}  sx={sx} fullWidth={fullWidth}>
				{text}
			</ColorButton>
	);
};

export default OrangeBtn;