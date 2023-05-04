import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {useState} from "react";
import {useSelector} from "react-redux";

const MenuSettings = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const lang = useSelector(state => state.text.currentLang)
	const main = useSelector(state => state.text);
	const langText = main[lang].header

	return (
		<>
			<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
				<Tooltip title="Меню">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
					>
						<MenuIcon sx={{ width: 50, height: 50 }}/>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<SmsOutlinedIcon fontSize="small" />
					</ListItemIcon>
					{langText.menu1}
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<PersonOutlineOutlinedIcon fontSize="small" />
					</ListItemIcon>
					{langText.menu2}
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<BarChartOutlinedIcon fontSize="small" />
					</ListItemIcon>
					{langText.menu3}
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<BookmarkBorderIcon fontSize="small" />
					</ListItemIcon>
					{langText.menu4}
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<ShoppingCartOutlinedIcon fontSize="small" />
					</ListItemIcon>
					{langText.menu5}
				</MenuItem>
			</Menu>
		</>
	);
}

export default MenuSettings;