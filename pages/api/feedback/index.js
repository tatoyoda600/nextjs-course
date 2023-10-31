import { appendData, getData } from '@/helpers/db-util';

export default function handler(req, res) {
	const data = getData("feedback");
	
	switch (req.method) {
		case "POST":
			const feedback = {
				id: new Date().toISOString(),
				email: req.body.email,
				feedback: req.body.feedback
			}
			appendData("feedback", feedback)

			res.status(201).json({ message: "Success" });
			break;
		
		case "GET":
			res.status(200).json({ feedback: data });
			break;
	
		default:
			res.status(400).json({ message: "Target does not exist" });
			break;
	}
}