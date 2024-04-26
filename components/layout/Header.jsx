"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Btn_dark from "../buttons/Btn_dark";
import {usePathname} from "next/navigation";
import {auth} from "@/lib/firebase";

const Header = () => {
	const [user, setUser] = useState("");

	const handleLogout = async () => {
		try {
			await auth.signOut();
			sessionStorage.clear();
			window.location.href = "/authentication/login";
		} catch {
			console.error("Error signing out:", error);
		}
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setUser(user);
		});
		return () => unsubscribe();
	}, []);

	/* token check test remove later */
	if (sessionStorage.getItem("token") === null) {
		console.log("nothing");
	} else {
		console.log("something");
	}

	const pathname = usePathname();
	if (pathname !== "/authentication/signup" && pathname !== "/authentication/login") {
		return (
			<header>
				<nav className="py-4 px-28 flex justify-between items-center bg-neutral-50">
					<Link href="/home">
						<Image className="w-32 h-16 -ml-6" src="/logo.svg" width={150} height={150} alt="Final Exam Project Logo" />
					</Link>
					<menu className="text-swamp-900 font-semibold flex items-center gap-4">
						<li className="select-none">Hello, {user?.displayName}</li>
						<li className="hover:text-swamp-600">
							<Link href="/home">Home</Link>
						</li>
						<li className="hover:text-swamp-600">
							<Link href="/collection"> Collection</Link>
						</li>
						<li className="hover:text-swamp-600">
							<Link href="/favorites"> Favorites</Link>
						</li>
						<li>
							<p
								onClick={handleLogout}
								className="flex justify-center box-content border-2 border-swamp-900 bg-neutral-50 font-semibold text-swamp-900 py-2 px-6 hover:border-swamp-600 hover:text-swamp-600 hover:underline decoration-2 hover:cursor-pointer">
								Log Out
							</p>
						</li>
					</menu>
				</nav>
			</header>
		);
	}
};

export default Header;
