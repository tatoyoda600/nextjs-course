import EventList from "@/components/events/event-list";
import NewsletterRegistration from "@/components/input/newsletter-registration";
import { getFeaturedEvents } from "@/data/dummy-events";
import Head from "next/head";
import { Fragment } from "react";

export default function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>NextJS Test</title>
				<meta name="description" content="List of featured events" />
			</Head>
			<NewsletterRegistration />
			<EventList events={props.featuredEvents} />
		</Fragment>
	);
}

export async function getStaticProps() {
	const featuredEvents = getFeaturedEvents();

	return {
		props: {
			featuredEvents: (featuredEvents ? featuredEvents : [])
		},
		revalidate: 3600 // Regenerate the static version every X seconds (3600s = 1hr)
	};
}