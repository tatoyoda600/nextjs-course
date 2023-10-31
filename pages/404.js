import Head from "next/head";
import { Fragment } from "react";

export default function NotFoundPage() {
	return (
		<Fragment>
			<Head>
				<title>Page Not Found</title>
				<meta name="description" content="Error 404" />
			</Head>
			<h1>
				Error 404: Page Not Found!
			</h1>
		</Fragment>
	);
}