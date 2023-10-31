import EventItem from "./event-item"
import classes from "./event-list.module.css";

export default function EventList(props) {
	return (
		<ul className={classes.list}>
			{ props.events.map((e) => {
				return <EventItem
					key={e.id}
					image={e.image}
					title={e.title}
					date={e.date}
					location={e.location}
					id={e.id}
				/>
			}) }
		</ul>
	);
}