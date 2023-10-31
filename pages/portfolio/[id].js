import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function PortfolioItemPage() {
	const router = useRouter();

	return (
		<Fragment>
			<Head>
				<title>{`Portfolio Item #${router.query.id}`}</title>
				<meta name="description" content={`Page for portfolio item #${router.query.id}`} />
			</Head>
			<h1>
				Portfolio Item Page ({router.query.id})
			</h1>
		</Fragment>
	);
}