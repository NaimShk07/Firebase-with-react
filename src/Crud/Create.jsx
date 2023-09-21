import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../Config/Firebase";

// addDoc
// collection

const Create = () => {
	const [productList, setproductList] = useState({
		name: "",
		price: 0,
		description: "",
	});

	const changeHandler = (e) => {
		setproductList({ ...productList, [e.target.name]: e.target.value });
		addDoc;
	};

	const prodCollectionRef = collection(db, "product");
	const submitHandler = async () => {
		await addDoc(prodCollectionRef, productList);
		setproductList({ ...productList, name: "", price: "", description: "" });
	};
	return (
		<div>
			<input
				type="text"
				name="name"
				value={productList.name}
				onChange={changeHandler}
			/>
			<input
				type="number"
				name="price"
				value={productList.price}
				onChange={changeHandler}
			/>
			<input
				type="text"
				name="description"
				value={productList.description}
				onChange={changeHandler}
			/>
			<button onClick={submitHandler}>set data</button>
		</div>
	);
};

export default Create;
