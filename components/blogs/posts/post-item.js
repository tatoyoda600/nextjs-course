import Link from "next/link";
import classes from "./post-item.module.css"
import Image from "next/image";

export default function PostItem(props) {
	const { title, image, excerpt, date, slug } = props.post;

	const formattedDate = new Date(date).toLocaleDateString(
		"en-US", 
		{ day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }
	);

	return (
		<li className={classes.post}>
			<Link href={`/blog/posts/${slug}`}>
				<div className={classes.image}>
					<Image src={`/images/blog/posts/${slug}/${image}`} alt={title} width={300} height={300} style={{ width: "100%", height: "auto" }} />
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<time>{formattedDate}</time>
					<p>{excerpt}</p>
				</div>
			</Link>
		</li>
	);
}