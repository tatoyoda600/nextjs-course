import { appendData, getData } from '@/helpers/db-util';

export default function handler(req, res) {
	const id = req.query.id;

	switch (req.method) {
		case "POST":
			const { email, name, text } = req.body;

			if (!email || !email.includes("@") || !name || name.trim() === "" || !text || text.trim() === "") {
				res.status(422).json({ message: "Invalid input" });
				return;
			}

			const comment = {
				id: new Date().toISOString(),
				eventId: id,
				email: email,
				name: name,
				text: text
			};

			try {
				appendData("comments", comment);
				res.status(201).json({ message: "Success", comment: comment });
			}
			catch (err) {
				res.status(500).json({ message: "Insert failed" });
				return;
			}
			break;
		case "GET":
			
			try {
				const comments = getData("comments").filter((e) => {
					return e.eventId === id;
				});
				res.status(200).json({ comments: comments });
			}
			catch (err) {
				res.status(500).json({ message: "Get comments failed" });
				return;
			}
			break;
	
		default:
			res.status(400).json({ message: "Target does not exist" });
			break;
	}
}