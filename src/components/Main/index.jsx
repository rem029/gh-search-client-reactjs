import { Routes, Route } from 'react-router-dom';

import { Main as MainContainer } from '../../containers/';
import Users from '../Users/';
import UserProfile from '../UserProfile';

const Main = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </MainContainer>
  );
};
export default Main;
