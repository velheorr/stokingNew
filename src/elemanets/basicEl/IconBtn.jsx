import React from 'react';
import {orange} from "@mui/material/colors";
import {IconButton} from "@mui/material";

const IconBtn = (item) => {
	return (
		<IconButton sx={{
			":hover": {
				color: orange[500],
			}
		}}>
			{item.children}
		</IconButton>
	);
};

export default IconBtn;