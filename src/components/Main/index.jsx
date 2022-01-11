import { Routes, Route } from 'react-router-dom';

import { Main as MainContainer } from '../../containers/';
import { UsersList, UsersSearch, useSearch } from '../Users/';
import UserProfile from '../UserProfile';

const Main = () => {
  const { currentPage, pageNext, pagePrevious, searchValue, searchValueHandleChange } = useSearch('');

  return (
    <MainContainer>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <UsersSearch searchValue={searchValue} searchValueHandleChange={searchValueHandleChange} />
              <UsersList currentPage={currentPage} pageNext={pageNext} pagePrevious={pagePrevious} />
            </>
          }
        />

        <Route
          path="/user"
          element={
            <>
              <UserProfile />
            </>
          }
        />

        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </MainContainer>
  );
};
export default Main;
