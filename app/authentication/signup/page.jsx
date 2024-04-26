"use client";
import React, {useState} from "react";
import Link from "next/link";
import {auth, db} from "@/lib/firebase";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";
import {redirect} from "next/navigation";
import checkToken from "@/lib/checkToken";

const signup = () => {
	const [email, setEmail] = useState("");
	const [displayName, setDisplayName] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSignUp = async ($e) => {
		$e.preventDefault();

		setError(null);

		if (!email) {
			setError("Please enter your Email address.");
			return;
		}

		if (!displayName) {
			setError("Please enter your User Name.");
			return;
		}

		if (!password || password.length < 6) {
			setError("Password must be at least 6 characters long.");
		}

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				const id = user.uid;
				updateProfile(auth.currentUser, {displayName: displayName});
				setDoc(doc(db, "users", id), {
					email: email,
					displayName: displayName,
					password: password,
					id,
				});
				window.location.href = "/login";
			})
			.catch((error) => {
				if (error === "Firebase: Error (auth/email-already-in-use).") {
					setError("Email already in use. Please use another Email.");
				}
				setError(error.message || "An error occurred during signup");
				console.error(error);
			});
	};

	/* token check test remove later */
	// if (sessionStorage.getItem("token") === null) {
	// 	console.log("token does not exist");
	// } else {
	// 	console.log("token exists");
	// 	redirect("/home");
	// }

	checkToken();

	return (
		<section className="bg-neutral-50 h-screen">
			<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-900">
						Welcome, Please Sign Up
					</h1>
				</div>
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST" onSubmit={handleSignUp}>
						<div>
							<label htmlFor="email" className="block font-medium leading-6 text-neutral-900">
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									onChange={($e) => setEmail($e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400"
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="displayName" className="block font-medium leading-6 text-neutral-900">
									User Name
								</label>
							</div>
							<div className="mt-2">
								<input
									id="displayName"
									name="displayName"
									type="text"
									autoComplete="displayName"
									onChange={($e) => setDisplayName($e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400"
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block font-medium leading-6 text-neutral-900">
									Password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									onChange={($e) => setPassword($e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400"
								/>
							</div>
						</div>
						<p className="font-medium text-neutral-900">
							Already have an account?{" "}
							<Link className="font-bold text-swamp-700 hover:text-swamp-600" href="/authentication/login">
								Login
							</Link>
						</p>
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-swamp-700 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-swamp-600">
								Sign up
							</button>
						</div>
						<div>
							{error && (
								<p className="text-red-500 font-bold" role="alert">
									{error}
								</p>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default signup;
