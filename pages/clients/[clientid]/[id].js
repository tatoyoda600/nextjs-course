import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function SelectedClientItemPage() {
	const router = useRouter();

	return (
		<Fragment>
			<Head>
				<title>{`Item #${router.query.id} of Client #${router.query.clientid}}`}</title>
				<meta name="description" content={`Page for item #${router.query.id} of client #${router.query.clientid}`} />
			</Head>
			<h1>
				Selected Client Item Page ({router.query.clientid} -&gt; {router.query.id})
			</h1>
		</Fragment>
	);
}