import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Config/Firebase";

// collection
// getDocs

const Read = () => {
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
	return (
		<div>
			{products.map((value, index) => (
				<div key={index}>
					<h1>id: {value.id}</h1>
					<h1>name: {value.name}</h1>
					<h1>price: Rs{value.price}</h1>
					<h1>Description: {value.description}</h1>
					<hr />
				</div>
			))}
		</div>
	);
};

export default Read;
