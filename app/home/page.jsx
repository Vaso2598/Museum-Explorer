"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Btn_primary from "@/components/buttons/Btn_primary";
import Btn_secondary from "@/components/buttons/Btn_secondary";
import Btn_invert from "@/components/buttons/Btn_invert";
import checkToken from "@/lib/checkToken";
import {usePathname} from "next/navigation";

const Home = () => {
	checkToken();

	const url = usePathname();
	console.log(url);

	return (
		<>
			<section className="flex flex-row justify-between items-center px-28 py-4 bg-neutral-50 text-swamp-900">
				<div className="w-2/5 flex flex-col gap-4">
					<h1 className="text-5xl text-darkGreen">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
					<p className="text-swamp-900">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem tenetur consectetur delectus facere
						culpa nihil itaque ipsum explicabo amet eos at obcaecati, quaerat ipsa nisi expedita excepturi. Aliquid,
						assumenda!
					</p>
					<div className="flex gap-6">
						<Btn_primary>Buy Tickets</Btn_primary>
						<Btn_secondary>Learn More</Btn_secondary>
					</div>
				</div>
				<div className="flex flex-col gap-4 w-2/5">
					<Image
						className="border-2 p-2 rounded-t-full"
						src="/placeholder/europeana.jpg"
						width={476}
						height={660}
						alt="image"
					/>
					<p className="text-swamp-900 text-sm italic text-wrap">
						Garland of Fruit and Flowers. Creator: Jan Davidsz de Heem. Date: 1660 - 1650. Institution: Mauritshuis.
						Provider: Digitale Collectie. Providing Country: Netherlands. PD for Public Domain Mark
					</p>
				</div>
			</section>
			<section className="px-28 py-24 flex justify-between gap-16 bg-swamp-700 text-neutral-50">
				<div className="w-2/5 flex flex-col gap-4">
					<Image src="/placeholder/europeana2h.jpg" width={534} height={354} alt="image" />
					<p className="text-neutral-50 text-sm italic text-wrap">
						Garland of Fruit and Flowers. Creator: Jan Davidsz de Heem. Date: 1660 - 1650. Institution: Mauritshuis.
						Provider: Digitale Collectie. Providing Country: Netherlands. PD for Public Domain Mark
					</p>
				</div>
				<div className="flex flex-col gap-4 w-2/5">
					<h2 className="text-4xl">Discover Old and New Art</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia corporis repellat fuga nostrum perspiciatis
						aspernatur suscipit mollitia deserunt hic impedit autem quam consequuntur cumque, ducimus obcaecati, magnam
						molestiae sequi recusandae!
					</p>
					<Btn_invert>
						<Link href="/collection">Check Collection</Link>
					</Btn_invert>
				</div>
			</section>
			<section className="px-24 pt-8 bg-neutral-50 flex flex-col gap-8 items-center">
				<div className="flex items-center gap-4">
					<div className="size-2 bg-swamp-700 rounded-full"></div>
					<div className="size-4 bg-swamp-700 rounded-full"></div>
					<div className="size-6 bg-swamp-700 rounded-full"></div>
					<h2 className="text-3xl font-semibold">News & Updates</h2>
					<div className="size-6 bg-swamp-700 rounded-full"></div>
					<div className="size-4 bg-swamp-700 rounded-full"></div>
					<div className="size-2 bg-swamp-700 rounded-full"></div>
				</div>
				<iframe
					width="1280"
					height="720"
					src="https://www.youtube.com/embed/cFoA-OkinYE?si=Ii8O3g6w7G7OK92M"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen></iframe>
			</section>
		</>
	);
};

export default Home;
