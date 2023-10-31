import Loading from "@/components/ui/loading";
import Head from "next/head";
import { Fragment, useEffect, useRef, useState } from "react";

const API_URL = `https://api.api-ninjas.com/v1/dadjokes?limit=${5}`;
const API_KEY = "/1SOco/DosZF9KCLmIp1kQ==23RDMdBU8JINhLfG";

export default function JokesPage(props) {
	const [jokes, setJokes] = useState(props.jokes);
	const isLoading = useRef(false);

	useEffect(() => {
		if (!isLoading.current) {
			isLoading.current = true;
			fetch(API_URL, { headers: { "X-Api-Key": API_KEY }})
				.then((res) => { return res.json()})
				.then((data) => {
					const tempJokes = [];
	
					data.forEach((e, i) => {
						tempJokes.push({
							id: i,
							joke: e.joke
						})
					});
	
					setJokes(tempJokes);
					isLoading.current = false;
				});
		}
		}, []);

	if (isLoading.current || jokes.length == 0) {
		return (
			<Loading />
		);
	}

	return (
		<Fragment>
			<Head>
				<title>Jokes</title>
				<meta name="description" content="A list of a couple random jokes" />
			</Head>
			<ul>
				{
					jokes.map(joke => {
						return (
							<li key={joke.id}>
								{joke.joke}
							</li>
						);
					})
				}
			</ul>
		</Fragment>
	);
}

export async function getStaticProps() {
	return fetch(API_URL, { headers: { "X-Api-Key": API_KEY }})
		.then((res) => { return res.json()})
		.then((data) => {
			const tempJokes = [];

			data.forEach((e, i) => {
				tempJokes.push({
					id: i,
					joke: e.joke
				})
			});
			
			return {
				props: {
					jokes: tempJokes
				}
			};
		});
}