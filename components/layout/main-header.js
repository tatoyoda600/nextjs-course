import Link from "next/link";
import classes from "./main-header.module.css"
import Logo from "./logo";

export default function MainHeader() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link href="/">
					<Logo />
				</Link>
			</div>
			<nav className={classes.navigation}>
				<ul>
					<li>
						<Link href="/clients">Clients</Link>
					</li>
					<li>
						<Link href="/events">Events</Link>
					</li>
					<li>
						<Link href="/products">Products</Link>
					</li>
					<li>
						<Link href="/jokes">Jokes</Link>
					</li>
					<li>
						<Link href="/blog">Blog</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}