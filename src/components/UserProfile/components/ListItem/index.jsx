import { useNavigate } from 'react-router-dom';
import './index.scss';

const UserListItem = ({ data = {}, isRepo = false }) => {
  return (
    <div className="user__list__item__container">
      {!isRepo && (
        <>
          <a href={data.html_url} target="_blank" rel="noreferrer noopener">
            {data.login}
          </a>
          <img src={data.avatar_url} alt="user-profile-logo"></img>
        </>
      )}

      {isRepo && (
        <>
          <a href={data.html_url} target="_blank" rel="noreferrer noopener">
            {data.full_name}
          </a>
        </>
      )}
    </div>
  );
};

export default UserListItem;
