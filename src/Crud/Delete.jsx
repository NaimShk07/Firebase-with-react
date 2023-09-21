import React, { useEffect, useState } from "react";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../Config/Firebase";

// doc 
// deleteDoc

const Delete = () => {
	useEffect(() => {
		getProd();
	}, []);

	const [products, setproducts] = useState([]);

	const prodCollectionRef = collection(db, "product");
	const getProd = async () => {
		const data = await getDocs(prodCollectionRef);
		const filterData = data.docs.map((value) => ({
			...value.data(),
			id: value.id,
		}));
		setproducts(filterData);
	};

	const deleteHandler = async (id) => {
		const productDoc = doc(db, "product", id);
		await deleteDoc(productDoc);
		getProd();
	};
	return (
		<div>
			{products.map((value, index) => (
				<div key={index}>
					<h1>
						id: {value.id}
						<button onClick={() => deleteHandler(value.id)}>
							<h1>Delete</h1>
						</button>
					</h1>
					<h1>name: {value.name}</h1>
					<h1>price: Rs{value.price}</h1>
					<h1>Description: {value.description}</h1>
					<hr />
				</div>
			))}
		</div>
	);
};

export default Delete;
