import { appendData } from '@/helpers/db-util';

export default function handler(req, res) {
	switch (req.method) {
		case "POST":
			const email = req.body.email;
			if (!email || !email.includes('@')) {
				res.status(422).json({ message: "Invalid email" });
				return;
			}

			try {
				appendData("newsletter", {email: email});
			}
			catch (err) {
				res.status(500).json({ message: "Subscribe failed" });
				return;
			}
			
			res.status(201).json({ message: "Success" });
			break;
	
		default:
			res.status(400).json({ message: "Target does not exist" });
			break;
	}
}