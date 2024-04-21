"use client";
import {useEffect, useState} from "react";
import Image from "next/image";

export default function Collection() {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://api.artic.edu/api/v1/artworks?page=1&limit=5")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <p>Loading...</p>;

	if (!data) return <p>No data</p>;

	return (
		<section>
			{data.data.map((artwork) => (
				<div key={artwork.id}>
					<Image
						src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
						width={150}
						height={150}
						alt={artwork.thumbnail.alt_text}
					/>
					<p>{artwork.title}</p>
				</div>
			))}
		</section>
	);
}
