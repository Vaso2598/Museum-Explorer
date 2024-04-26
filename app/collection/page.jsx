"use client";
import {useEffect, useState} from "react";
import Image from "next/image";
import Btn_load from "@/components/buttons/Btn_load";
import {useRouter} from "next/navigation";
import Link from "next/link";
import checkToken from "@/lib/checkToken";

export default function Collection() {
	checkToken();
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [isLoading, setLoading] = useState(true);
	const [inputValue, setInputValue] = useState("");
	const [searchValue, setSearchValue] = useState("");

	const router = useRouter();

	const handleSearch = async ($e) => {
		$e.preventDefault();
		setSearchValue(inputValue);
		router.push(`/collection?inputValue=${inputValue}`);
		localStorage.setItem("searchValueInLocalStorage", inputValue);
	};

	const clearValue = ($e) => {
		$e.preventDefault();
		setInputValue("");
	};

	if (inputValue === "") {
		router.push(`collection?page=${page}`);
	}

	useEffect(() => {
		const url = searchValue
			? `https://api.artic.edu/api/v1/artworks/search?q=${searchValue}page=${page}&limit=10`
			: `https://api.artic.edu/api/v1/artworks?page=${page}&limit=10`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data.data);
				setLoading(false);
			});
	}, [page, searchValue]);

	if (isLoading) return <p>Loading...</p>;

	if (!data) return <p>No data</p>;

	return (
		<section className="bg-neutral-50 pt-4 px-28 flex flex-col items-center">
			<section className="w-full flex justify-center">
				<form action="#" onSubmit={handleSearch} className="w-4/5 relative flex items-center">
					<input
						type="search"
						onChange={($e) => setInputValue($e.target.value)}
						placeholder="Search by keyword, artist, or reference"
						className=" block w-full h-16 px-6 rounded-full border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400"
					/>
					<button
						onClick={handleSearch}
						className={
							inputValue.length > 0
								? "absolute right-3 rotate-90 flex justify-center rounded-full bg-swamp-700 hover:bg-swamp-600 active:bg-swamp-700 size-12 text-neutral-50 text-4xl"
								: "hidden"
						}>
						△
					</button>
					<button
						onClick={clearValue}
						className={
							inputValue.length > 0
								? "absolute right-16 rotate-45 flex justify-center rounded-full bg-swamp-700 hover:bg-swamp-600 active:bg-swamp-700 size-12 text-neutral-50 text-4xl"
								: "hidden"
						}>
						+
					</button>
				</form>
			</section>
			<section className="flex flex-wrap justify-center gap-4 py-9">
				{data.map((artwork) => (
					<div
						key={artwork.id}
						className="border-2 text-pretty p-4 box-content flex flex-col justify-between"
						style={{
							width: "15vw",
							minHeight: "300px",
							maxHeight: "500px",
						}}>
						<Link href={`/collection/${artwork.id}`}>
							<div
								style={{
									width: "15vw",
									height: artwork.thumbnail ? `${Math.floor(artwork.thumbnail.height / 25)}px` : "150px",
									maxHeight: "400px",
								}}
								className="relative">
								<Image
									src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
									fill
									alt={artwork.thumbnail ? artwork.thumbnail.alt_text : "Artwork"}
									sizes="20vw"
									className="object-contain"
								/>
							</div>
							<p className="font-semibold">{artwork.title}</p>
							<p className="italic">{artwork.artist_display}</p>
						</Link>
					</div>
				))}
			</section>
			<section className={inputValue.length > 0 ? "hidden" : "pb-8 flex gap-8 justify-between items-center"}>
				<Btn_load disabled={page === 1} loadMore={() => setPage(page - 1)}>
					{isLoading ? "Loading..." : "Previous Page"}
				</Btn_load>
				<p className="text-swamp-700 font-semibold">Page #{page}</p>
				<Btn_load loadMore={() => setPage(page + 1)}>{isLoading ? "Loading..." : "Next Page"}</Btn_load>
			</section>
		</section>
	);
}
