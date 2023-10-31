import Head from "next/head";
import { Fragment } from "react";
import ErrorAlert from "./error-alert";

export default function Loading() {
  return (
		<Fragment>
			<Head>
				<title>Loading...</title>
			</Head>
			<ErrorAlert>
				<p className="center">Loading...</p>
			</ErrorAlert>
		</Fragment>
	);
}