import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

export default function PostsGrid(props) {
	return (
		<ul className={classes.grid}>
			{
				props.posts.map((e) => {
					return <PostItem key={e.slug} post={e}/>
				})
			}
		</ul>
	);
}