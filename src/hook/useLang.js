import {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {updateLang} from "../store/textSlice";

// получение языка браузера
export const useLang = () => {
	const [lang, setLang] = useState('')
	let curLanguage = localStorage.getItem('lang')

	useEffect(() => {
		if (!curLanguage ) {
			let language = window.navigator.language;
			let getLanguage = language.substr(0,2)
			if (curLanguage !== getLanguage) {
				localStorage.setItem('lang', getLanguage)
			}
			setLang(getLanguage)
		}
		console.log('localStorage("lang") =', localStorage.getItem('lang'))
	}, [lang]);



};







