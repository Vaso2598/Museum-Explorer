import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer>
			<section className="flex justify-between px-28 py-10 bg-swamp-800 text-neutral-50 items-start">
				<div className="w-1/5">
					<Image
						className="w-32 h-32 -ml-10 -my-8"
						src="/logo-white.svg"
						width={150}
						height={150}
						alt="Final Exam Project Logo"
					/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nuncLorem ipsum dolor sit amet,
						consectetur adipiscing elit.
					</p>
				</div>
				<div className="w-1/5">
					<h2 className="font-semibold pb-4">Sitemap</h2>
					<menu className="font-semibold items-center gap-4">
						<li className="hover:text-neutral-300">
							<Link href="/home">Home</Link>
						</li>
						<li className="hover:text-neutral-300">Exhibitions</li>
						<li className="hover:text-neutral-300">
							<Link href="/collection"> Collection</Link>
						</li>
						<li className="hover:text-neutral-300">Programs & Events</li>
						<li className="hover:text-neutral-300">Store</li>
					</menu>
				</div>
				<div className="w-1/5">
					<h2 className="font-semibold pb-4">Connect</h2>
					<div className="flex gap-8 items-center">
						<Image className="size-8" src="/twitter.svg" width={150} height={150} alt="Twitter" priority />
						<Image className="size-8" src="/facebook.svg" width={150} height={150} alt="Facebook" priority />
						<Image className="size-8" src="/linkedin.svg" width={150} height={150} alt="Linkedin" priority />
						<Image className="size-8 mt-2" src="/mail.svg" width={150} height={150} alt="Mail" priority />
					</div>
				</div>
			</section>
			<section className="h-16 bg-swamp-900 text-neutral-50 flex justify-center items-center">
				<p>© 2024. All rights reserved.</p>
			</section>
		</footer>
	);
};

export default Footer;
