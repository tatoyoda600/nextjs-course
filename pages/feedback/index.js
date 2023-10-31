import { useRef, useState } from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailInput = useRef();
  const feedbackInput = useRef();

  function submitFeedback(event) {
    event.preventDefault();
    
    const body = {
      email: emailInput.current.value,
      feedback: feedbackInput.current.value
    };

    fetch("../api/feedback", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => { return res.json()})
      .then((data) => {
        console.log(data);
      });
  }

  function loadFeedback() {
    fetch("../api/feedback")
      .then((res) => { return res.json()})
      .then((data) => {
        setFeedbackItems(data.feedback);
      });
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFeedback}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInput} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInput}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedback}>Load Feedback</button>
      <ul>
        {
          feedbackItems.map((e) => {
            return (
              <li key={e.id}>
                {e.feedback}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default HomePage;
