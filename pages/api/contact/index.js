import { MongoClient } from "mongodb";

export default function handler(req, res) {
	switch (req.method) {
		case "POST":
			const { email, name, message } = req.body;

			if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "") {
				res.status(422).json({ message: "Invalid input" });
				return;
			}

			const comment = {
				email: email,
				name: name,
				message: message
			};

			MongoClient.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.a5bnmrt.mongodb.net/?retryWrites=true&w=majority`)
				.then((client) => {
					client.db(process.env.MONGODB_DATABASE)
						.collection(process.env.MONGODB_COLLECTION)
						.insertOne(comment)
							.then ((result) => {
								client.close();
								res.status(201).json({ message: "Success" });
							})
							.catch((err) => {
								client.close();
								res.status(500).json({ message: "Could not store message in the database" });
							});
				})
				.catch((err) => {
					res.status(500).json({ message: "Could not connect to the database" });
				})
			break;
			
		default:
			res.status(400).json({ message: "Target does not exist" });
			break;
	}
}