"use client";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
import {useEffect, useState} from "react";
import Image from "next/image";
import Btn_load from "@/components/buttons/Btn_load";

export default function Collection() {
	const [data, setData] = useState(null);
	const [limit, setLimit] = useState(1);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${API_URL}/artworks?page=1&limit=${limit}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, [limit]);

	if (isLoading) return <p>Loading...</p>;

	if (!data) return <p>No data</p>;

	return (
		<section className="bg-neutral-50 pt-4 flex flex-col items-center">
			<div className="flex flex-wrap justify-center gap-4">
				{data.data.map((artwork) => (
					<div
						key={artwork.id}
						className="border-2 text-pretty p-4 box-content"
						style={{
							width: `${Math.floor(artwork.thumbnail.width / 10)}px`,
							height: "auto",
						}}>
						<div
							style={{
								width: `${Math.floor(artwork.thumbnail.width / 10)}px`,
								height: `${Math.floor(artwork.thumbnail.height / 10)}px`,
							}}
							className="relative">
							<Image
								src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
								fill
								alt={artwork.thumbnail.alt_text}
							/>
						</div>
						<p className="font-semibold">{artwork.title}</p>
						<p className="italic">{artwork.artist_display}</p>
					</div>
				))}
			</div>
			<section className="py-4">
				<Btn_load loadMore={() => setLimit(limit + 1)}>{isLoading ? "Loading..." : "Load More"}</Btn_load>
			</section>
		</section>
	);
}
