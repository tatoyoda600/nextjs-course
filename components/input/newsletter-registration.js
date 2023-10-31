import { useContext, useRef } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '@/store/notification-context';
import { postData } from '@/helpers/fetch-util';

function NewsletterRegistration() {
  const { showNotification } = useContext(NotificationContext);
  const emailInput = useRef();

  function registrationHandler(event) {
    event.preventDefault();
    showNotification({
      title: "Signing up...",
      message: "Registering for newsletter",
      status: "pending",
    });

    postData("/api/events/newsletter", { email: emailInput.current.value },
      (data) => {
        showNotification({
          title: "Success!",
          message: "Registered for newsletter",
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
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInput}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
