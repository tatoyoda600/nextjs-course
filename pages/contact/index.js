import ContactForm from "@/components/contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";

export default function ContactPage() {
	return (
		<Fragment>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Contact page" />
			</Head>
			<ContactForm />
		</Fragment>
	);
}