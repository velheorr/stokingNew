import { useState, useEffect } from 'react';
import {useDispatch} from "react-redux";
import {toggleMobile} from "../store/appSlice";


// переключение на моб версию сайта при размере экрана меньше 500px
export const useResize = () => {
	const [width, setWidth] = useState(window.screen.width);
	const SCREEN_MOB = 500;

	const dispatch = useDispatch()

	useEffect(() => {
		const handleResize = (event) => {
			setWidth(event.target.screen.width);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	width <= SCREEN_MOB ? dispatch(toggleMobile(true)) : dispatch(toggleMobile(false))

};