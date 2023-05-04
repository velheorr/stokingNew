import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import {useState} from "react";
import {useSelector} from "react-redux";

const FooterMob = () => {
	const [value, setValue] = useState(0);
	const lang = useSelector(state => state.text.currentLang)
	const main = useSelector(state => state.text);
	const langText = main[lang].footer

	return (
		<div className='footerMob'>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction label={langText.textMob1} icon={<HomeOutlinedIcon />} />
				<BottomNavigationAction label={langText.textMob2} icon={<ManageSearchOutlinedIcon />} />
				<BottomNavigationAction label={langText.textMob3} icon={<ShoppingCartOutlinedIcon />} />
				<BottomNavigationAction label={langText.textMob4} icon={<FavoriteBorderOutlinedIcon />} />
				<BottomNavigationAction label={langText.textMob5} icon={<PermIdentityOutlinedIcon />} />
			</BottomNavigation>
		</div>
	);
};

export default FooterMob;