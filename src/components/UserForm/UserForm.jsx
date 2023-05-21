import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { Box } from 'components/Box';

export const UserForm = ({ users, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const currentInputName = e.currentTarget.name;
    switch (currentInputName) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'email':
        setEmail(e.currentTarget.value);
        break;
      case 'password':
        setPassword(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (users.find(user => user.email === email)) {
      window.alert(`${email} is already in users!`);
      return false;
    }

    onSubmit({ name, email, password });

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Label>User name</Form.Label>

          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>User email</Form.Label>
          <Form.Control
            type="mail"
            name="email"
            value={email}
            onChange={handleChange}
            pattern="^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>User password</Form.Label>
          <Form.Control
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add user
        </Button>
      </Form>
    </Box>
  );
};

UserForm.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.exact({
      createdAt: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ).isRequired,
};
