import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
	getDocs,
	collection,
	addDoc,
	doc,
	deleteDoc,
	updateDoc,
} from "firebase/firestore";

const Database = () => {
	const [getProduct, setgetProduct] = useState([]);
	const prodCollectionRef = collection(db, "product");

	useEffect(() => {
		getProdData();
	}, []);

	// Read
	const getProdData = async () => {
		try {
			const data = await getDocs(prodCollectionRef);
			const filteredData = data.docs.map((value) => ({
				...value.data(),
				id: value.id,
			}));
			setgetProduct(filteredData);
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
	const [updateName, setupdateName] = useState("");
	const onChangeHandler = (e) => {
		setsendproduct({ ...sendproduct, [e.target.name]: e.target.value });
	};

	// Create
	const onSubmitHandler = async () => {
		try {
			await addDoc(prodCollectionRef, sendproduct);
			// add docs accept two thing reference and data
			setsendproduct({ ...sendproduct, name: "", price: "", description: "" });
			getProdData();
		} catch (error) {
			console.error(error);
		}
	};
	// delete
	const deleteHandler = async (id) => {
		const productDoc = doc(db, "product", id);
		await deleteDoc(productDoc);
		getProdData();
	};

	const updateHandler = async (id) => {
		const productDoc = doc(db, "product", id);
		await updateDoc(productDoc, { name: updateName });
		setupdateName("");
		getProdData();
	};

	return (
		<div>
			{getProduct.map((value, index) => (
				<div key={index}>
					<h2>{value.name}</h2>
					<h2>{value.price}</h2>
					<h2>{value.description}</h2>
					<button onClick={() => deleteHandler(value.id)}>Delete</button>
					<input
						type="text"
						placeholder="update name"
						onChange={(e) => setupdateName(e.target.value)}
					/>
					<button onClick={() => updateHandler(value.id)}>Update</button>
					<hr />
				</div>
			))}
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
