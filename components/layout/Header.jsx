"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Btn_dark from "../buttons/Btn_dark";
import {usePathname} from "next/navigation";
import {auth} from "@/lib/firebase";

const Header = () => {
	const [user, setUser] = useState("");

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setUser(user);
		});
		return () => unsubscribe();
	}, []);

	const pathname = usePathname();
	if (pathname !== "/signup" && pathname !== "/login") {
		return (
			<header>
				<nav className="py-4 px-28 flex justify-between items-center bg-neutral-50">
					<Link href="/home">
						<Image className="w-32 h-16 -ml-6" src="/logo.svg" width={150} height={150} alt="Final Exam Project Logo" />
					</Link>
					<menu className="text-swamp-900 font-semibold flex items-center gap-4">
						<li className="hover:text-swamp-600">
							<Link href="/home">Home</Link>
						</li>
						<li className="hover:text-swamp-600">Exhibitions</li>
						<li className="hover:text-swamp-600">
							<Link href="/collection"> Collection</Link>
						</li>
						<li className="hover:text-swamp-600">Programs & Events</li>
						<li className="hover:text-swamp-600">Store</li>
						<li>
							<Btn_dark>{user.displayName}</Btn_dark>
						</li>
					</menu>
				</nav>
			</header>
		);
	}
};

export default Header;
