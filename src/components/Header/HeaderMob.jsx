import MenuSettings from "../../elemanets/basicEl/MenuSettings";
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useSelector} from "react-redux";


const HeaderMob = () => {
	const lang = useSelector(state => state.text.currentLang)
	const main = useSelector(state => state.text);
	const langText = main[lang].header

	return (
		<div className='headerMob'>
			<div className='mobMenu'>
				<div className='brand'><a href="src/components/Header/HeaderMob#"><span>Stoking</span></a></div>
				<MenuSettings/>
			</div>
			<div className="mobSearch">
				<TextField label={langText.search}
						   variant="outlined"

						   fullWidth
						   color="warning"
						   className='search'
						   InputProps={{
							   endAdornment: (
								   <InputAdornment position="end">
									   <SearchIcon />
								   </InputAdornment>
							   ),
						   }}
				/>
			</div>


		</div>
	);
};

export default HeaderMob;