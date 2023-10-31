import FeaturedPosts from "@/components/blogs/featured-posts";
import Hero from "@/components/blogs/hero";
import { getFeaturedPosts } from "@/helpers/posts-util";
import Head from "next/head";
import { Fragment } from "react";

export default function BlogHomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Blog Home</title>
				<meta name="description" content={`Home page of the blog`} />
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</Fragment>
	);
}

export function getStaticProps() {
	const posts = getFeaturedPosts();

	return {
		props: {
			posts: posts
		},
		revalidate: 3600 // Regenerate the static version every X seconds (3600s = 1hr)
	};
}