import { useContext, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import { postData } from '@/helpers/fetch-util';
import NotificationContext from '@/store/notification-context';
import Loading from '../ui/loading';

function Comments(props) {
  const { showNotification } = useContext(NotificationContext);
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      fetch(`/api/events/comments/${eventId}`)
        .then((res) => { return res.json(); })
        .then((data) => {
          setComments(data.comments);
          setIsLoading(false);
        });
    }
  }, [showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    showNotification({
      title: "Posting comment...",
      message: "Your comment is being posted.",
      status: "pending",
    });

    postData(`/api/events/comments/${eventId}`, commentData,
      (data) => {
        setComments(comments.concat(data.comment));
        showNotification({
          title: "Success!",
          message: "Your comment was posted",
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
    <section className={classes.comments}>
      <button className={classes.displayButton} onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isLoading && <CommentList comments={comments} />}
      {showComments && isLoading && <Loading />}
    </section>
  );
}

export default Comments;
