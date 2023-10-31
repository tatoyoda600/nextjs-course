import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/data/dummy-events";
import Head from "next/head";
import { Fragment } from "react";

export default function FilteredEventsPage(props) {
	const events = props.events;
	const date = new Date(props.year, props.month - 1);
	const humanReadableDate = new Date(date).toLocaleDateString(
		'en-US',
		{ month: 'long', year: 'numeric', timeZone: "UTC" }
	);

	if (!events || events.length == 0) {
		return (
			<Fragment>
				<Head>
					<title>No Events Found</title>
					<meta name="description" content="No events found for the specified date" />
				</Head>
				<ResultsTitle date={date}/>
				<ErrorAlert>
					<p className="center">No Events Found</p>
				</ErrorAlert>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<Head>
				<title>{`Events for ${humanReadableDate}`}</title>
				<meta name="description" content={`A list of events planned for ${humanReadableDate}`} />
			</Head>
			<ResultsTitle date={date}/>
			<EventList events={events}/>
		</Fragment>
	);
}

export async function getServerSideProps(context) {
	const year = Number(context.params.params[0]);
	const month = Number(context.params.params[1]);
	if (isNaN(year) || isNaN(month) || year < 0 || month < 1 || month > 12) {
		return {
			redirect: {
				destination: "/events"
			}
		};
	}
	
	const events = getFilteredEvents({ year: year, month: month });

	return {
		props: {
			events: events,
			year: year,
			month: month
		}
	};
}