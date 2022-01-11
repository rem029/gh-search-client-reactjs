import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FaUserFriends } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';

import UsersList from './components/Lists';

import useAxios from '../../hooks/useAxios';

import './index.scss';

const UserProfile = () => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [repos, setRepos] = useState([]);
  const [activeView, setActiveView] = useState('Repos' || 'Following' || 'Followers');

  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user || null;

  const { get } = useAxios();

  const setViewTo = {
    repos: (e) => {
      e.preventDefault();
      setActiveView('Repos');
    },
    following: (e) => {
      e.preventDefault();
      setActiveView('Following');
    },
    followers: (e) => {
      e.preventDefault();
      setActiveView('Followers');
    },
  };

  useEffect(() => {
    const perPage = '?sort=stars&order=desc&page=1&per_page=10000';
    if (!user) return navigate('/');

    get({ baseUrl: user.followers_url + perPage })
      .then((value) => setFollowers(value.data))
      .catch((_) => setFollowers(0));

    get({ baseUrl: user.following_url.replace('{/other_user}', '') + perPage })
      .then((value) => setFollowing(value.data))
      .catch((_) => setFollowing(0));

    get({ baseUrl: user.repos_url + perPage })
      .then((value) => setRepos(value.data))
      .catch((_) => setRepos(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="user__profile__container">
      <h2>User Profile</h2>
      {user && (
        <>
          <img src={user.avatar_url} alt="profile-github-img" />
          <a href={user.html_url} target="_blank" rel="noreferrer noopener">
            {user.login}
          </a>
          <div className="user__profile__container__stats">
            <p>
              <FaUserFriends />
              <strong>Followers</strong>
              {followers.length}
            </p>
            <p>
              <FiUser />
              <strong>Following</strong> {following.length}
            </p>
            <p>
              <BsFillJournalBookmarkFill />
              <strong>Repos</strong> {repos.length}
            </p>
          </div>

          <div className="user__profile__container__listview">
            <div className="user__profile__container__listview_controls">
              <button
                className={activeView === 'Followers' ? 'user__profile__container__listview_controls-is-active' : ''}
                onClick={setViewTo['followers']}
              >
                <FaUserFriends />
              </button>
              <button
                className={activeView === 'Following' ? 'user__profile__container__listview_controls-is-active' : ''}
                onClick={setViewTo['following']}
              >
                <FiUser />
              </button>
              <button
                className={activeView === 'Repos' ? 'user__profile__container__listview_controls-is-active' : ''}
                onClick={setViewTo['repos']}
              >
                <BsFillJournalBookmarkFill />
              </button>
            </div>

            {activeView === 'Repos' && <UsersList title="Repos" items={repos} />}
            {activeView === 'Following' && <UsersList title="Following" items={following} />}
            {activeView === 'Followers' && <UsersList title="Followers" items={followers} />}
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
