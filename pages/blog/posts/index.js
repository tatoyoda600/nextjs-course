import AllPosts from "@/components/blogs/all-posts";
import { getAllPosts } from "@/helpers/posts-util";
import Head from "next/head";
import { Fragment } from "react";

export default function BlogPostsPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Blog Posts</title>
				<meta name="description" content={`Blog posts list`} />
			</Head>
			<AllPosts posts={props.posts} />
		</Fragment>
	);
}

export function getStaticProps() {
	const posts = getAllPosts();

	return {
		props: {
			posts: posts
		},
		revalidate: 3600 // Regenerate the static version every X seconds (3600s = 1hr)
	};
}