"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../AuthContext';
import styled from 'styled-components';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data.token);
        setMessage('Login successful!');
        setIsSuccess(true);
        router.push('/dashboard/devis');
      } else {
        setMessage('Invalid email or password');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
      setIsSuccess(false);
    }
  };

  return (
    <Container>
      <Card>
        <Form onSubmit={handleLogin}>
          <Title>Login</Title>
          <Input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <Input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <Button type="submit">Login</Button>
          {message && <Message success={isSuccess}>{message}</Message>}
        </Form>
      </Card>
    </Container>
  );
}

export default LoginPage;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #333;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  color: #fff;
  background-color: #0070f3;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;

const Message = styled.p`
  text-align: center;
  color: ${(props) => (props.success ? 'green' : 'red')};
  font-size: 0.9rem;
`;
