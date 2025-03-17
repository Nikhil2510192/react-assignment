const LikeButton = ({ isLiked, onToggle }) => (
  <button onClick={onToggle} style={{ color: isLiked ? 'red' : 'black' }}>
    {isLiked ? 'Liked' : 'Like'}
  </button>
);

export default LikeButton;