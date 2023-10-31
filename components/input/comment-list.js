import classes from './comment-list.module.css';

function CommentList(props) {
  console.log(props.comments);

  return (
    <ul className={classes.comments}>
      {
        props.comments.map((e) => {
          return (
            <li key={e.id}>
              <p>{e.text}</p>
              <div>
                By <address>{e.name}</address>
              </div>
            </li>
          );
        })
      }
    </ul>
  );
}

export default CommentList;
