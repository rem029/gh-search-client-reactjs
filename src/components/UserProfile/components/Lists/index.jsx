import UserListItem from '../ListItem';

import './index.scss';

const UsersList = ({ title = 'Title here', items = [] }) => {
  return (
    <div className={'list__container'}>
      <h3>{title}</h3>
      {items.map((item, index) => {
        const element =
          title !== 'Repos' ? (
            <UserListItem data={item} key={'user-list-item' + index} />
          ) : (
            <UserListItem data={item} key={'user-list-item' + index} isRepo />
          );

        return element;
      })}
    </div>
  );
};

export default UsersList;
