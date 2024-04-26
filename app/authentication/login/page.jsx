"use client";
import React, {useState} from "react";
import Link from "next/link";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/lib/firebase";
import {redirect} from "next/navigation";
import checkToken from "@/lib/checkToken";

const login = () => {
	checkToken();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleLogin = async ($e) => {
		$e.preventDefault();

		setError(null);

		if (!email) {
			setError("Please enter your Email address.");
			return;
		}

		if (!password) {
			setError("Please enter your Password.");
		}

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				sessionStorage.setItem("token", userCredential.user.accessToken);
				window.location.href = "/home";
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<section className="bg-neutral-50 h-screen">
			<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-900">
						Welcome, Please Log In
						<br /> to access website
					</h1>
				</div>
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST" onSubmit={handleLogin}>
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
							Don't have an account?{" "}
							<Link className="font-bold text-swamp-700 hover:text-swamp-600" href="/authentication/signup">
								Sign Up
							</Link>
						</p>
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-swamp-700 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-swamp-600">
								Log In
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

export default login;
