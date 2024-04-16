import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
	return (
		<>
			<section className="flex flex-row">
				<div>
					<h1 className="border border-red-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi sapiente libero, molestiae fuga, dolores
						voluptas repudiandae ad temporibus a minus culpa eum animi quis at. Adipisci rerum soluta perferendis!
					</h1>
					<p className="border border-red-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem tenetur consectetur delectus facere
						culpa nihil itaque ipsum explicabo amet eos at obcaecati, quaerat ipsa nisi expedita excepturi. Aliquid,
						assumenda!
					</p>
					<button className="border border-red-700">Buy Tickets</button>
					<button className="border border-red-700">Learn More</button>
				</div>
				<Image className="border border-red-700" src="/placeholder/2411.png" width={476} height={660} alt="image" />
			</section>
			<section>
				<div className="flex">
					<Image
						className="border border-red-700"
						src="/placeholder/hqdefault.jpg"
						width={534}
						height={354}
						alt="image"
					/>
					<div>
						<h2 className="border border-red-700">Discover Yourself With Nature</h2>
						<p className="border border-red-700">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia corporis repellat fuga nostrum perspiciatis
							aspernatur suscipit mollitia deserunt hic impedit autem quam consequuntur cumque, ducimus obcaecati,
							magnam molestiae sequi recusandae!
						</p>
						<button className="border border-red-700">Learn More</button>
					</div>
				</div>
				<Image
					className="border border-red-700"
					src="/placeholder/hqdefault.jpg"
					width={1040}
					height={409}
					alt="image"
				/>
			</section>
			<section>
				<h2>News & Updates</h2>
				<Link href="/">View All Posts</Link>
				<div className="flex">
					<div>
						<Image
							className="border border-red-700"
							src="/placeholder/hqdefault.jpg"
							width={520}
							height={333}
							alt="image"
						/>
						<h3>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque rem doloremque porro dolore aut adipisci
							quis laborum ducimus dolor culpa labore sit exercitationem maxime, consequatur voluptatem inventore
							architecto quos iure.
						</h3>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam vel veritatis illum recusandae
							sapiente perspiciatis odit quod deleniti exercitationem. Quas nihil modi vel rerum tenetur. Amet mollitia
							accusantium laborum!
						</p>
						<p>
							<i>date dd-mm-yyyy</i>
						</p>
					</div>

					<div>
						<Image
							className="border border-red-700"
							src="/placeholder/hqdefault.jpg"
							width={236}
							height={151}
							alt="image"
						/>
						<h3>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque rem doloremque porro dolore aut adipisci
							quis laborum ducimus dolor culpa labore sit exercitationem maxime, consequatur voluptatem inventore
							architecto quos iure.
						</h3>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam vel veritatis illum recusandae
							sapiente perspiciatis odit quod deleniti exercitationem. Quas nihil modi vel rerum tenetur. Amet mollitia
							accusantium laborum!
						</p>
						<p>
							<i>date dd-mm-yyyy</i>
						</p>

						<Image
							className="border border-red-700"
							src="/placeholder/hqdefault.jpg"
							width={236}
							height={151}
							alt="image"
						/>
						<h3>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque rem doloremque porro dolore aut adipisci
							quis laborum ducimus dolor culpa labore sit exercitationem maxime, consequatur voluptatem inventore
							architecto quos iure.
						</h3>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam vel veritatis illum recusandae
							sapiente perspiciatis odit quod deleniti exercitationem. Quas nihil modi vel rerum tenetur. Amet mollitia
							accusantium laborum!
						</p>
						<p>
							<i>date dd-mm-yyyy</i>
						</p>

						<Image
							className="border border-red-700"
							src="/placeholder/hqdefault.jpg"
							width={236}
							height={151}
							alt="image"
						/>
						<h3>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque rem doloremque porro dolore aut adipisci
							quis laborum ducimus dolor culpa labore sit exercitationem maxime, consequatur voluptatem inventore
							architecto quos iure.
						</h3>
						<p>
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
