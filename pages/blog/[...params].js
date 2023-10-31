import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function BlogPage() {
	const router = useRouter();
	const blogId = router.query.params
		? "(" + router.query.params.map((e, i) => {
			return i == 0 ? e : ` -> ${e}`
		}) + ")" 
		: "";

	return (
		<Fragment>
			<Head>
				<title>Blog</title>
				<meta name="description" content={`Details of blog ${blogId}`} />
			</Head>
			<h1>
				Blog Page {blogId}
			</h1>
		</Fragment>
	);
}