import OrangeBtn from "../../elemanets/basicEl/OrangeBtn";
import MenuIcon from "@mui/icons-material/Menu";
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import IconBtn from "../../elemanets/basicEl/IconBtn";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import '../../elemanets/css.scss'
import {useSelector} from "react-redux";


const Header = () => {
	const lang = useSelector(state => state.text.currentLang)
	const main = useSelector(state => state.text);
	const langText = main[lang].header

	return (
		<div className='header'>
			<a href="src/components/Header/Header#"><span className='brand'>Stoking</span></a>
			<OrangeBtn icon={<MenuIcon />} text={langText.btn1}/>
			<TextField label={langText.search}
					   variant="outlined"
					   size="small"
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
			<ul className='list'>
				<li >
					<a href="tel:88005009052" className='phone'>
						<LocalPhoneOutlinedIcon/>
						<span>8 (800) 500-90-52</span>
					</a>
				</li>
				<li>
					<IconBtn><SmsOutlinedIcon/></IconBtn>
				</li>
				<li>
					<IconBtn><PersonOutlineOutlinedIcon/></IconBtn>
				</li>
				<li>
					<IconBtn><BarChartOutlinedIcon/></IconBtn>
				</li>
				<li>
					<IconBtn><BookmarkBorderIcon/></IconBtn>
				</li>
				<li>
					<IconBtn><ShoppingCartOutlinedIcon/></IconBtn>
				</li>
			</ul>
		</div>
	);
};

export default Header;