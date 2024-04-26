"use client";
import React, {useEffect, useState} from "react";
import checkToken from "@/lib/checkToken";
import {collection, getDocs} from "firebase/firestore";
import {db, auth} from "@/lib/firebase";

const Favorites = () => {
	checkToken();

	const user = auth.currentUser;
	const userId = user?.uid;

	const [data, setData] = useState([]);
	useEffect(() => {
		const getArtworks = async () => {
			const artworkRef = collection(db, "favorites");
			const query = userId ? query(artworkRef, where(`${userId}`, "==", userId)) : artworkRef;
			const artworkSnapshot = await getDocs(query);
			const artworkList = artworkSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setData(artworkList);
		};
		getArtworks();
	}, []);

	console.log(data);

	return <section className="h-dvh bg-neutral-50 pt-4 px-28">favorites</section>;
};

export default Favorites;
