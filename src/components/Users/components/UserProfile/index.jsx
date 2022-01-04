import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FaUserFriends } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { GiStarsStack } from 'react-icons/gi';

import useAxios from '../../../../hooks/useAxios';

import './index.scss';

const UserProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user || null;

  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [starred, setStarred] = useState(0);

  const { get } = useAxios();

  useEffect(() => {
    const perPage = '?sort=stars&order=desc&page=1&per_page=10000';
    get({ baseUrl: user.followers_url + perPage })
      .then((value) => setFollowers(value.data.length))
      .catch((_) => setFollowers(0));

    get({ baseUrl: user.following_url.replace('{/other_user}', '') + perPage })
      .then((value) => setFollowing(value.data.length))
      .catch((_) => setFollowing(0));

    get({ baseUrl: user.starred_url.replace('{/owner}{/repo}', '') + perPage })
      .then((value) => setStarred(value.data.length))
      .catch((_) => setStarred(0));
  }, []);

  useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);

  return (
    <div className="user__profile__container">
      <h2>User Profile</h2>
      <img src={user.avatar_url} alt="profile-github-img" />
      <a href={user.html_url} target="_blank" rel="noreferrer noopener">
        {user.login}
      </a>
      <div className="user__profile__container__stats">
        <p>
          <FaUserFriends />
          <strong>Followers</strong>
          {followers}
        </p>
        <p>
          <FiUser />
          <strong>Following</strong> {following}
        </p>
        <p>
          <GiStarsStack />
          <strong>Starred</strong> {starred}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
