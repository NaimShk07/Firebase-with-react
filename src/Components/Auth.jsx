import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	signOut
	
	
} from "firebase/auth";

const Auth = () => {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	// firebase returns promises so you have to make this function asynchronous
	const signin = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.error(error);
		}
	};
	// console.log(auth?.currentUser?.email);
	// console.log(auth.currentUser.photoURL);
	const logout = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.error(error);
		}
	};

	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div>
			<input
				type="email"
				placeholder="Email...."
				onChange={(e) => setemail(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password...."
				onChange={(e) => setpassword(e.target.value)}
			/>
			<button onClick={signin}>Sign In</button>
			<button onClick={logout}>Log Out</button>
			<button onClick={signInWithGoogle}> Sign in with Google</button>
		</div>
	);
};

export default Auth;
