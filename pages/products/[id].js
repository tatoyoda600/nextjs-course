import { Fragment } from "react";
import fs from "fs/promises";
import path from 'path'
import Loading from "@/components/ui/loading";
import Head from "next/head";

export default function ProductDetailPage(props) {
	if (!props.product) {
		return (
			<Loading />
		);
	}

	return (
		<Fragment>
			<Head>
				<title>{props.product.title}</title>
				<meta name="description" content={`Product details page for "${props.product.title}"`} />
			</Head>
			<h1>{props.product.title}</h1>
			<p>{props.product.description}</p>
		</Fragment>
	);
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { id: "p1" } }
		],
		fallback: "blocking"
	}
}

export async function getStaticProps(context) {
	const { params } = context;
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

	const product = data.products && data.products.length > 0 ? data.products.find((e) => e.id === params.id) : undefined;

	if (!product) {
		return {
			revalidate: 10,
			notFound: true
		};
	}

	return {
		props: {
			product: product
		},
		revalidate: 3600 // Regenerate the static version every X seconds (3600s = 1hr)
	};
}