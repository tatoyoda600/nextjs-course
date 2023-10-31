import Image from "next/image";
import classes from "./hero.module.css";
import Button from "../ui/button";
import ArrowRightIcon from "../icons/arrow-right-icon";

export default function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image src="/images/blog/site/max.png" alt="An image showing some guy" width={300} height={300} />
			</div>
			<h1>Hello there!</h1>
			<p>This is a test blog made with the intention of learning NextJS.</p>
			<Button pathname="/blog/posts">
				<span>All Posts</span>
				<span className={classes.icon}>
					<ArrowRightIcon />
				</span>
			</Button>
		</section>
	);
}