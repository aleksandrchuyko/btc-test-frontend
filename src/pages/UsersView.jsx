import { UserForm } from 'components/UserForm/UserForm';
import { UserList } from 'components/UserList/UserList';
import { Filter } from 'components/Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter, setFilter } from 'redux/userlistSlice';

import { useAddUserMutation, useGetAllUsersQuery } from 'redux/users/users-api';
import { Card, CardGroup, Container } from 'react-bootstrap';

const UsersView = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);
  const {
    data: users,
    isLoading,
    isSuccess,
  } = useGetAllUsersQuery('', {
    refetchOnMountOrArgChange: true,
  });
  const [addUser] = useAddUserMutation();

  //get users list by filter
  const getFilteredUsers = () => {
    if (filter.trim()) {
      return users.filter(user => {
        return user.name.toLowerCase().includes(filter.toLowerCase());
      });
    } else return users;
  };

  //redux actions
  const handleAddUser = ({ name, email, password }) => {
    addUser({ name, email, password });
  };

  const updateFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  //------------------

  const filteredUsers = getFilteredUsers();

  return (
    <Container className="mt-2">
      {!isLoading && isSuccess && (
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>New user</Card.Title>
              <UserForm users={users} onSubmit={handleAddUser}></UserForm>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Your users</Card.Title>
              <Filter name={filter} onChange={updateFilter}></Filter>
              <UserList users={filteredUsers} />
            </Card.Body>
          </Card>
        </CardGroup>
      )}
    </Container>
  );
};

export default UsersView;
