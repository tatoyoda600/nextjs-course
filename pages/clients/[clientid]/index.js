import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function SelectedClientPage() {
	const router = useRouter();

	function goToItem(id) {
		router.push({
			pathname: "/clients/[clientid]/[id]",
			query: {
				clientid: router.query.clientid,
				id: id
			}
		})
	}

	return (
		<Fragment>
			<Head>
				<title>{`Client #${router.query.clientid}`}</title>
				<meta name="description" content={`Page for client #${router.query.clientid}`} />
			</Head>
			<h1>
				Selected Client Page ({router.query.clientid})
			</h1>
				<button onClick={() => {goToItem(1)}}>
					Go To Item 1
				</button>
		</Fragment>
	);
}