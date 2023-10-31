import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/data/dummy-events";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function EventsPage(props) {
	const router = useRouter();

	function applyFilters(year, month) {
		router.push(`/events/${year}/${month}`);
	}

	return (
		<Fragment>
			<Head>
				<title>All Events</title>
				<meta name="description" content="List containing all the events" />
			</Head>
			<EventSearch applyFilters={applyFilters} />
			<EventList events={props.events} />
		</Fragment>
	);
}

export async function getStaticProps() {
	const events = getAllEvents()

	return {
		props: {
			events: events
		},
		revalidate: 3600 // Regenerate the static version every X seconds (3600s = 1hr)
	};
}