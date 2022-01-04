import { useNavigate } from 'react-router-dom';
import './index.scss';

const UserListItem = ({ user = {} }) => {
  const navigate = useNavigate();

  const userListOnClick = () => {
    navigate('/profile', { state: { user } });
  };

  return (
    <div className="user__list__item__container" onClick={userListOnClick}>
      <p>{user.login}</p>
      <img src={user.avatar_url} alt="user-profile-logo"></img>
    </div>
  );
};

export default UserListItem;
