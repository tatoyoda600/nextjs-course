import { Fragment, useState } from "react";
import { getData } from "@/helpers/db-util";

export default function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

	function loadFeedback(id) {
		fetch(`../api/feedback/${id}`)
			.then((res) => { return res.json()})
			.then((data) => {
				console.log(data);
				setFeedbackData(data.feedback);
			});
	}

	return (
		<Fragment>
			{
				feedbackData &&
				<div>
					<h2>{feedbackData.id}</h2>
					<h2>{feedbackData.email}</h2>
					<h2>{feedbackData.feedback}</h2>
				</div>
			}
			<ul>
				{
					props.feedbackItems.map((e) => {
						return (
							<li key={e.id}>
								{e.feedback}
								<button onClick={() => { loadFeedback(e.id) }}>Show Details</button>
							</li>
						);
					})
				}
			</ul>
		</Fragment>
		
	);
}

export async function getStaticProps() {
	const data = getData("feedback");

	return {
		props: {
			feedbackItems: data
		}
	}
}