import React, {useEffect, useState} from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {MenuItem, Select} from "@mui/material";

import ru from '../elemanets/img/ru.png'
import usa from '../elemanets/img/usa.png'
import tur from '../elemanets/img/tur.png'
import {useDispatch, useSelector} from "react-redux";
import {updateLang} from "../store/textSlice";

const SubHeader = () => {
	const dispatch = useDispatch();
	const lang = useSelector(state => state.text.currentLang)
	const main = useSelector(state => state.text);
	const langText = main[lang].subheader

	const [language, setLanguage] = useState('ru');

	const handleChange = (event) => {
		setLanguage(event.target.value);
	};

	useEffect(()=> {
		if (lang !== language) {
			setLanguage(language)
		} else {
			setLanguage('ru')
		}

		dispatch(updateLang(language))
	}, [language])

	return (
		<div className='subHeader'>
			<div className='coop'>
				<HomeOutlinedIcon sx={{verticalAlign: 'bottom'}}/>
				<span> — {langText.text1}</span>
			</div>
			<div className='lang'>
				<span>{langText.text2}:</span>
				<Select variant="standard"
						id="langselect"
						value={language}
						label="Язык"
						onChange={handleChange}
				>
					<MenuItem value={'ru'}><img src={ru} alt="#" className='langImg'/> Русский</MenuItem>
					<MenuItem value={'en'}><img src={usa} alt="#" className='langImg'/> Английсий</MenuItem>
					<MenuItem value={'tu'}><img src={tur} alt="#" className='langImg'/> Турецкий</MenuItem>
				</Select>
			</div>

		</div>
	);
};

export default SubHeader;