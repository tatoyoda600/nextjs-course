import Head from "next/head";
import { Fragment } from "react";

export default function UserIdPage(props) {
	return (
		<Fragment>
			<Head>
				<title>User ID</title>
				<meta name="description" content="User ID page" />
			</Head>
			<h1>{props.id}</h1>
		</Fragment>
	);
}

export async function getServerSideProps(context) {
	return {
		props: {
			id: `userid-${context.params.id}`
		}
	}
}