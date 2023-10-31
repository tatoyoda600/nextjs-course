import EventContent from "@/components/events/detail/event-content";
import EventLogistics from "@/components/events/detail/event-logistics";
import EventSummary from "@/components/events/detail/event-summary";
import Comments from "@/components/input/comments";
import { getEventById, getFeaturedEvents } from "@/data/dummy-events";
import Head from "next/head";
import { Fragment } from "react";

export default function SelectedEventPage(props) {
	const event = props.event

	return (
		<Fragment>
			<Head>
				<title>{event.title}</title>
				<meta name="description" content={event.description} />
			</Head>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
			<Comments eventId={event.id} />
		</Fragment>
	);
}

export async function getStaticProps(context) {
	const event = getEventById(context.params.id)

	if (!event) {
		return {
			revalidate: 10,
			redirect: {
				destination: "/events"
			}
		};
	}

	return {
		props: {
			event: event
		},
		revalidate: 3600 // Regenerate the static version every X seconds (3600s = 1hr)
	};
}

export async function getStaticPaths() {
	const events = getFeaturedEvents();
	const paths = events.map((e) => {
		return {
			params: {
				id: e.id
			}
		}
	});

	return {
		paths: paths,
		fallback: "blocking"
	};
}