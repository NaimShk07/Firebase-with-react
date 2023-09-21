import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../Config/Firebase";

const Update = () => {
	useEffect(() => {
		getProd();
	}, []);

	const [productList, setproductList] = useState({
		name: "",
		price: 0,
		description: "",
	});

	const [products, setproducts] = useState([]);

	const prodCollectionRef = collection(db, "product");
	const getProd = async () => {
		const data = await getDocs(prodCollectionRef);
		const filterData = data.docs.map((value) => ({
			...value.data(),
			id: value.id,
		}));
		setproducts(filterData);
		setproductList(...filterData);
	};

	const changeHandler = (e) => {
		setproductList({ ...productList, [e.target.name]: e.target.value });
	};

	const updateHandler = async (id) => {
		const productDoc = doc(db, "product", id);
		await updateDoc(productDoc, productList);
		getProd();
	};

	return (
		<div>
			{products.map((value, index) => (
				<div key={index}>
					<h1>id: {value.id}</h1>
					<h1>
						name: {value.name}
						<input
							type="text"
							name="name"
							value={productList.name}
							onChange={changeHandler}
						/>
						<button onClick={() => updateHandler(value.id)}>Update</button>
					</h1>
					<h1>
						price: Rs{value.price}
						<input
							type="text"
							name="price"
							value={productList.price}
							onChange={changeHandler}
						/>
						<button onClick={() => updateHandler(value.id)}>Update</button>
					</h1>
					<h1>
						Description: {value.description}
						<input
							type="text"
							name="description"
							value={productList.description}
							onChange={changeHandler}
						/>
						<button onClick={() => updateHandler(value.id)}>Update</button>
					</h1>
					<hr />
				</div>
			))}
		</div>
	);
};

export default Update;
