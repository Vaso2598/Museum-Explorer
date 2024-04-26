"use client";
import {useParams} from "next/navigation";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import checkToken from "@/lib/checkToken";
import {doc, updateDoc, arrayUnion} from "firebase/firestore";
import {db, auth} from "@/lib/firebase";

export default function Artwork() {
	checkToken();
	const params = useParams();
	const artId = params.id;

	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	const user = auth.currentUser;
	const userId = user?.uid;

	// const favoritesAdd = () => {
	// 	addDoc(collection(db, "favorites", userId, artId), {artwork_id: artId});
	// 	alert("added to favorites");
	// };

	/* const favoritesAdd = async () => {
		const favoritesRef = doc(db, "favorites", userId);
		addDoc(favoritesRef, {artworkId: [artId]}, {merge: true});
		let newArrayItem = favoritesRef.push()
		newArrayItem.set(artId);
		setArtworkId(artId);
		// updateDoc(favoritesRef, {artworkId: [artworkId]});
	}; */

	const favoritesAdd = async () => {
		const favoritesRef = doc(db, "favorites", userId);
		await updateDoc(favoritesRef, {
			artworkId: arrayUnion(artId),
		});
		// setArtworkId(artId);
	};

	useEffect(() => {
		fetch(`https://api.artic.edu/api/v1/artworks/${artId}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data.data);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<section className="h-dvh bg-neutral-50 pt-4 px-28">
			<div key={artId} className="border-2 text-pretty p-4 box-content flex flex-col gap-4">
				<div
					style={{
						width: "15vw",
						height: data?.thumbnail ? `${Math.floor(data?.thumbnail.height / 25)}px` : "300px",
						maxHeight: "400px",
					}}
					className="relative">
					<Image
						src={`https://www.artic.edu/iiif/2/${artId}/full/843,/0/default.jpg`}
						fill
						alt={data?.thumbnail ? data?.thumbnail.alt_text : "artwork"}
						sizes="20vw"
						className="object-contain border-2 p-1"
					/>
				</div>
				<h1 className="text-lg font-bold">{data?.title}</h1>
				<div>
					<p className="italic">{data?.artist_display}</p>
					<p className="italic inline mr-1">{data?.place_of_origin}</p>
					<p className="italic inline ml-1">{data?.date_display}</p>
				</div>
				<button
					onClick={favoritesAdd}
					className="flex w-36 justify-center items-center gap-2 py-2 px-1 bg-swamp-600 hover:bg-swamp-700 active:bg-swamp-600 rounded-2xl text-neutral-50 font-semibold">
					Add to Favorites
				</button>
				<p className="text-sm">{data?.description}</p>
			</div>
		</section>
	);
}
