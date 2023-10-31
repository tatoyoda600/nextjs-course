import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

export default function ClientsPage() {
	const clients = [
		{ id: "1", name: "2"},
		{ id: "Hi", name: "Hello"},
		{ id: "ID", name: "Name"}
	]
	return (
		<Fragment>
			<Head>
				<title>Clients</title>
				<meta name="description" content="List of all clients" />
			</Head>
			<h1>
				Clients Page
				<ul>
					{
						clients.map((e) => {
							return (
								<li key={e.id}>
									<Link href={{
										pathname: "/clients/[clientid]",
										query: { clientid: e.id }
									}}>
										{e.name}
									</Link>
								</li>
							);
						})
					}
				</ul>
			</h1>
		</Fragment>
	);
}