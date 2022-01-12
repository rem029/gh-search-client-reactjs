import UsersList from './components/UsersList';
import UsersSearch from './components/UsersSearch/';
import useSearch from './hooks/useSearch';

export { UsersList, UsersSearch, useSearch };

const Users = () => {
  const { currentPage, pageNext, pagePrevious, searchValue, searchValueHandleChange } = useSearch('');
  return (
    <>
      <UsersSearch searchValue={searchValue} searchValueHandleChange={searchValueHandleChange} />
      <UsersList currentPage={currentPage} pageNext={pageNext} pagePrevious={pagePrevious} />
    </>
  );
};

export default Users;
