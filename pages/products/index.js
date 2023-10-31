import fs from "fs/promises";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import { Fragment } from "react";

export default function ProductsPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Products</title>
				<meta name="description" content="List of all products" />
			</Head>
			<ul>
				{
					props.products.map((e) => {
						return (
							<li key={e.id}>
								<Link href={`/products/${e.id}`}>
									{e.title}
								</Link>
							</li>
						);
					})
				}
			</ul>
		</Fragment>
	);
}

export async function getStaticProps(context) {
	const dataPath = path.join(process.cwd(), "data", "dummy-products.json");
	let validPath = true;
	try {
		await fs.access(dataPath, fs.constants.R_OK);
	}
	catch (err) {
		validPath = false;
	}
	
	const data = validPath ? JSON.parse(await fs.readFile(dataPath)) : undefined;
	
	if (!data || !validPath) {
		return {
			revalidate: 10,
			redirect: {
				destination: "/"
			}
		};
	}

	if (!data.products || data.products.length == 0) {
		return {
			revalidate: 10,
			notFound: true
		};
	}

	return {
		props: {
			products: data.products
		},
		revalidate: 3600 // Regenerate the static version every X seconds (3600s = 1hr)
	};
}