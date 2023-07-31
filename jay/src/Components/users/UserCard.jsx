import Button from "../common/button/Button";

function UserCard({ user }) {
  // console.log(user)
  const { name, address, posts, followers, isMarried, avatar } = user;

  const handleFollowClick = () => {
    alert(`You are now following ${name}`);
  };
  return (<div data-testid="user-card">
    <li>
      <img src={avatar} alt={name} />
      <h2 data-testid="user_name">{name}</h2>
      <p data-testid="user_address">{address}</p>
      <h3>Posts</h3>
      <p data-testid="user_posts">{posts}</p>
      <h3>Followers</h3>
      <p data-testid="user_followers">{followers}</p>
      <h3>Married</h3>
      <p data-testid="is-married">{isMarried ? 'Yes' : 'No'}</p>
      <Button onClick={handleFollowClick} text="Follow" />
    </li>
  </div>);
}

export default UserCard;
