import Link from "next/link";
import classes from "./button.module.css"

export default function Button(props) {
	if (props.pathname) {
		return (
			<Link className={classes.btn} href={
				props.query ? 
					{ pathname: props.pathname, query: props.query } :
					{ pathname: props.pathname }
			}>
				{props.children}
			</Link>
		);
	}
	else {
		return (
			<button className={classes.btn} onClick={props.onClick}>
				{props.children}
			</button>
		);
	}
}