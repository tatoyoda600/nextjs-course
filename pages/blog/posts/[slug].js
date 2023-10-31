import PostContent from "@/components/blogs/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "@/helpers/posts-util";
import Head from "next/head";
import { Fragment } from "react";

export default function PostPage(props) {
	return (
		<Fragment>
			<Head>
				<title>{props.post.title}</title>
				<meta name="description" content={`${props.post.excerpt}`} />
			</Head>
			<PostContent post={props.post}/>
		</Fragment>
	);
}

export function getStaticProps(context) {
	const post = getPostData(context.params.slug);

	return {
		props: {
			post: post
		},
		revalidate: 3600 // Regenerate the static version every X seconds (3600s = 1hr)
	};
}

export function getStaticPaths() {
	const postSlugs = getPostFiles().map((e) => { return e.replace(/\.md$/, '') });

	return {
		paths: postSlugs.map((e) => { return { params: { slug: e }}}),
		fallback: "blocking"
	};
}