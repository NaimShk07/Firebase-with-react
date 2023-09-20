import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

const Database = () => {
	// const [getProduct, setgetProduct] = useState([]);
	const prodCollectionRef = collection(db, "product");

	useEffect(() => {
		getProdData();
	}, []);

	const getProdData = async () => {
		try {
			const data = await getDocs(prodCollectionRef);
			const filteredData = data.docs.map((value) => ({
				...value.data(),
				id: value.id,
			}));
			// console.log(filteredData);
		} catch (error) {
			console.error(error);
		}
	};

	const [sendproduct, setsendproduct] = useState({
		name: "",
		price: 0,
		description: "",
	});
	const onChangeHandler = (e) => {
		setsendproduct({ ...sendproduct, [e.target.name]: e.target.value });
	};
	const onSubmitHandler = async () => {
		try {
			await addDoc(prodCollectionRef, sendproduct);
			// add docs accept two thing reference and data
			setsendproduct({ ...sendproduct, name: "", price: "", description: "" });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<input
				type="text"
				placeholder="name"
				name="name"
				value={sendproduct.name}
				onChange={onChangeHandler}
			/>
			<input
				type="number"
				placeholder="price"
				name="price"
				value={sendproduct.price}
				onChange={onChangeHandler}
			/>
			<input
				type="text"
				placeholder="description"
				name="description"
				value={sendproduct.description}
				onChange={onChangeHandler}
			/>
			<button onClick={onSubmitHandler}>Submit</button>
		</div>
	);
};

export default Database;
