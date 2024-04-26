"use client";
import {useEffect} from "react";
import {useRouter, usePathname} from "next/navigation";

export default function CheckToken() {
	const router = useRouter();
	const currentPath = usePathname();

	useEffect(() => {
		const token = sessionStorage.getItem("token");
		if (token && (currentPath === "/authentication/login" || currentPath === "/authentication/signup")) {
			router.push("/home");
		} else if (!token && currentPath !== "/authentication/login" && currentPath !== "/authentication/signup") {
			router.push("/authentication/login");
		}
	}, []);

	return null;
}
