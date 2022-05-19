import { useSelector } from 'react-redux';
import { selectAllPosts, getPostsStatus, getPostsError } from './postsSlice';
import PostsExcerpt from './PostsExcerpt';

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let renderedPosts;
  if (postStatus === 'loading') {
    renderedPosts = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date)); // order latest post on top

    renderedPosts = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === 'failed') {
    renderedPosts = <p>{error}</p>;
  }

  return (
    <section>
      {/* <h2>Posts</h2> */}
      {renderedPosts}
    </section>
  );
}
