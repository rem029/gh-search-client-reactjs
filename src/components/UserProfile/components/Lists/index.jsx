import UserListItem from '../ListItem';

import './index.scss';

const UsersList = ({ title = 'Title here', items = [] }) => {
  return (
    <div className={'list__container'}>
      <h3>{title}</h3>
      {items.map((item, index) => {
        const isRepo = title === 'Repos';
        return <UserListItem data={item} key={'user-list-item' + index} isRepo={isRepo} />;
      })}
    </div>
  );
};

export default UsersList;
