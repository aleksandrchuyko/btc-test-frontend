import { Box } from 'components/Box';
import { Button } from 'react-bootstrap';
import { useRemoveUserMutation } from 'redux/users/users-api';

export const UserEditor = ({ id, name, email, password }) => {
  const [removeUser, { isLoading: isDeleting }] = useRemoveUserMutation();
  return (
    <Box
      style={{
        height: '50vh',
				position: 'absolute',
				zIndex: 1,
        backgroundColor: 'green',
      }}
    >
      <Button
        variant="outline-secondary"
        size="sm"
        type="button"
        disabled={isDeleting}
        onClick={() => {
          removeUser(id);
        }}
      >
        Delete
      </Button>
    </Box>
  );
};
