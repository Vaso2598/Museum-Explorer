import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
	return (
		<>
			<section className="flex flex-row justify-between items-center px-28">
				<div className="w-2/5 flex flex-col gap-4">
					<h1 className="text-5xl text-darkGreen">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
					<p className=" text-swamp">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem tenetur consectetur delectus facere
						culpa nihil itaque ipsum explicabo amet eos at obcaecati, quaerat ipsa nisi expedita excepturi. Aliquid,
						assumenda!
					</p>
					<div>
						<button className="box-content border-2 border-current bg-primary font-semibold text-white py-2 px-6">
							Buy Tickets
						</button>
						<button className="box-content border-2 border-current bg-white font-semibold text-primary py-2 px-6">
							Learn More
						</button>
					</div>
				</div>
				<Image
					className="w-2/5 border-2 p-2 rounded-t-full"
					src="/placeholder/2411.png"
					width={476}
					height={660}
					alt="image"
				/>
			</section>
			<section className="px-48">
				<div className="flex">
					<Image className="" src="/placeholder/hqdefault.jpg" width={534} height={354} alt="image" />
					<div>
						<h2 className="text-4xl">Discover Yourself With Nature</h2>
						<p className="">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia corporis repellat fuga nostrum perspiciatis
							aspernatur suscipit mollitia deserunt hic impedit autem quam consequuntur cumque, ducimus obcaecati,
							magnam molestiae sequi recusandae!
						</p>
						<button className="">Learn More</button>
					</div>
				</div>
				<Image className="" src="/placeholder/hqdefault.jpg" width={1040} height={409} alt="image" />
			</section>
			<section className="px-24">
				<h2 className="text-lg">News & Updates</h2>
				<Link href="/">View All Posts</Link>
				<div className="flex">
					<div>
						<Image className="" src="/placeholder/hqdefault.jpg" width={520} height={333} alt="image" />
						<h3 className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
						<p className="text-sm">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam vel veritatis illum recusandae
							sapiente perspiciatis odit quod deleniti exercitationem. Quas nihil modi vel rerum tenetur. Amet mollitia
							accusantium laborum!
						</p>
						<p>
							<i>date dd-mm-yyyy</i>
						</p>
					</div>
					<div>
						<Image className="" src="/placeholder/hqdefault.jpg" width={236} height={151} alt="image" />
						<h3 className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
						<p className="text-sm">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam vel veritatis illum recusandae
							sapiente perspiciatis odit quod deleniti exercitationem. Quas nihil modi vel rerum tenetur. Amet mollitia
							accusantium laborum!
						</p>
						<p>
							<i>date dd-mm-yyyy</i>
						</p>
						<Image className="" src="/placeholder/hqdefault.jpg" width={236} height={151} alt="image" />
						<h3 className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
						<p className="text-sm">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam vel veritatis illum recusandae
							sapiente perspiciatis odit quod deleniti exercitationem. Quas nihil modi vel rerum tenetur. Amet mollitia
							accusantium laborum!
						</p>
						<p>
							<i>date dd-mm-yyyy</i>
						</p>
						<Image className="" src="/placeholder/hqdefault.jpg" width={236} height={151} alt="image" />
						<h3 className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
						<p className="text-sm">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam vel veritatis illum recusandae
							sapiente perspiciatis odit quod deleniti exercitationem. Quas nihil modi vel rerum tenetur. Amet mollitia
							accusantium laborum!
						</p>
						<p>
							<i>date dd-mm-yyyy</i>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;
