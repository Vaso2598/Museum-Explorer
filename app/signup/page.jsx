import React from "react";

const signup = () => {
	return (
		<section className="bg-neutral-50 h-screen">
			<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Welcome, Please Sign Up
					</h1>
				</div>
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						className="space-y-6"
						action="#"
						method="POST"
						// onSubmit={handleSignUp}
					>
						<div>
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									// onChange={($e) => setEmail($e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
									User Name
								</label>
							</div>
							<div className="mt-2">
								<input
									id="userName"
									name="userName"
									type="text"
									autoComplete="userName"
									required
									// onChange={($e) => setUserName($e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									required
									// onChange={($e) => setPassword($e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
								/>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-swamp-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-swamp-600">
								Sign up
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default signup;
