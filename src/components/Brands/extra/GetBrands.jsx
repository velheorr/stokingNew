import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBrandsJSON} from "../../../store/appSlice";
import {renderBrands} from "./renderFunc";

const GetBrands = () => {
	const dispatch = useDispatch();
	const allBrands = useSelector(state => state.app.allBrands);

	const [waitData, setWaitData] = useState(false)
	async function fetchCatalog(){   // загрузка брендов
		if(allBrands.length === 0){
			try {
				await dispatch(fetchBrandsJSON()) // получение списка брендов по API и помещение их в хранилище
			} catch (err) {
				console.error('Error')
			}
		}
		setWaitData(true)
	}
	useEffect(()=>{
		fetchCatalog()
	}, [waitData])

	const readyBrands = renderBrands(allBrands)
	return (
		<>
			{readyBrands}
		</>
	);
};

export default GetBrands;