import { postData } from "@/helpers/fetch-util";
import classes from "./contact-form.module.css"
import { useContext, useState } from "react";
import NotificationContext from "@/store/notification-context";

export default function ContactForm() {
  const { showNotification } = useContext(NotificationContext);
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	function sendMessage(event) {
		event.preventDefault();
		
    showNotification({
      title: "Sending message...",
      message: "Your message is being sent.",
      status: "pending",
    });

		postData("/api/contact", { email: email, name: name, message: message },
		(data) => {
			showNotification({
				title: "Success!",
				message: "Your message was sent",
				status: "success",
			});
		},
		(err) => {
			showNotification({
				title: "Error",
				message: err.message || "Something went wrong!",
				status: "error",
			});
		});
	}

	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>
			<form className={classes.form} onSubmit={sendMessage}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input type="email" id="email" required value={email} onChange={(event) => { setEmail(event.target.value) }} />
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input type="text" id="name" required value={name} onChange={(event) => { setName(event.target.value) }} />
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your Message</label>
					<textarea id="message" rows="5" value={message} onChange={(event) => { setMessage(event.target.value) }} ></textarea>
				</div>

				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
		</section>
	);
}