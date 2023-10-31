import Head from "next/head";
import { Fragment } from "react";

export default function UserProfilePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Profile Page</title>
				<meta name="description" content="User profile page" />
			</Head>
			<h1>{props.username}</h1>
		</Fragment>
	);
}

export async function getServerSideProps(context) {
	return {
		props: {
			username: "Username"
		}
	}
}