import LikeButton from './Likebutton.jsx';

const PostCard = ({ post, onLikeToggle }) => (
  <div>
    <img src={post.profileImage} alt={post.username} width="50" />
    <h3>{post.username}</h3>
    <p>{post.content}</p>
    <LikeButton isLiked={post.isLiked} onToggle={onLikeToggle} />
  </div>
);

export default PostCard;