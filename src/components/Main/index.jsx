import { Routes, Route } from 'react-router-dom';

import { Main as MainContainer } from '../../containers/';
import { UserProfile, UsersList, UsersSearch } from '../Users/';

const Main = () => {
  return (
    <MainContainer>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <UsersSearch />
              <UsersList />
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
