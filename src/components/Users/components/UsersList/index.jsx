import { AiOutlineFileSearch } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { useSelector } from 'react-redux';

import config from '../../../../config';

import UserListItem from '../UserListItem';
import { Spinner } from '../../../UI';

import './index.scss';

const UsersList = ({ currentPage = 1, pageNext = () => {}, pagePrevious = () => {} }) => {
  const usersLoading = useSelector((state) => state.users.loading);
  const usersData = useSelector((state) => state.users.data?.items || []);
  const userTotalItems = useSelector((state) => state.users.data?.total_count || 0);
  const usersError = useSelector((state) => state.users.errors);

  const query = useSelector((state) => state.query || '');

  const onClickNext = (e) => {
    e.preventDefault();
    pageNext();
  };

  const onClickPrevious = (e) => {
    e.preventDefault();
    pagePrevious();
  };

  return (
    <div className={`user_list__container ${usersLoading ? 'user_list__container_loading' : ''}`}>
      {userTotalItems > config.itemsPerPage && (
        <div className="user_list__container_control">
          <button onClick={onClickPrevious}>
            <BiSkipPrevious />
          </button>
          <p>{currentPage}</p>
          <button onClick={onClickNext} disabled={config.itemsPerPage > usersData.length}>
            <BiSkipNext />
          </button>
          <p>Result(s): {userTotalItems}</p>
        </div>
      )}

      {!usersLoading && !usersData.length > 0 && (
        <div className="user_list__init__display_container">
          {usersError && <p>{JSON.stringify(usersError)}</p>}

          {!usersError && !query.length > 0 ? (
            <>
              <AiOutlineFileSearch className="user_list__init__display_icon" />
              <p>Search usernames in Github.</p>
            </>
          ) : (
            <p>No users found</p>
          )}
        </div>
      )}

      {usersLoading && <Spinner />}

      {!usersLoading && usersData.length > 0 && (
        <>
          {usersData.map((user) => {
            return <UserListItem user={user} key={'user-list-item' + user.id} />;
          })}
        </>
      )}
    </div>
  );
};

export default UsersList;
