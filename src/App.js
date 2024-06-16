'use client'
import { useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #33ccff 0%, #0066ff 100%);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex;
  justify-content: center;
  height: 400px;
  width: 600px;
  padding: 0;
`;

const ImageContainer = styled.div`
  background-image: url("/background.jpg");
  background-size: cover;
  width: 640px;
  height: 460px;
  border-radius: 10px 0 0 10px;
  padding: 0;
  padding-right: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  background: #fff;
  padding: 40px;
  border-radius:0 10px 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const Message = styled.p`
  margin-bottom: 20px;
  color: ${(props) => (props.success ? 'green' : 'red')};
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function Login({ initialMessage }) {
  const [username, setUsername] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [roleLogin, setRoleLogin] = useState('employee');
  const [message, setMessage] = useState(initialMessage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, passwordLogin, roleLogin }),
      });

      if (!response.ok) {
        throw new Error('Failed to authenticate');
      }

      const data = await response.json();

      if (data.message === 'Login successful') {
        setMessage({ text: 'Login successful!', success: true });
      } else {
        setMessage({ text: 'Authentication failed. Please check your credentials.', success: false });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ text: 'Failed to login. Please try again later.', success: false });
    }
  };

  return (
    <MainContainer>
      <ImageContainer />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>Login</Title>
          {message && <Message success={message.success}>{message.text}</Message>}
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="role">Role</Label>
            <Select
              id="role"
              value={roleLogin}
              onChange={(e) => setRoleLogin(e.target.value)}
            >
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
              <option value="senior_manager">Senior Manager</option>
            </Select>
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    </MainContainer>
  );
}
