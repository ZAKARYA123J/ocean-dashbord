"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9; /* Light background color */
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  
  &:focus {
    border-color: #0070f3; /* Blue color on focus */
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #0070f3; /* Primary button color */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5; /* Darker blue on hover */
  }
`;

const Message = styled.p`
  text-align: center;
  color: ${props => (props.success ? 'green' : 'red')};
`;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validEmail = 'test@example.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
      setMessage('Login successful!');
      setIsSuccess(true);
      router.push('/dashboard/devis');  // Redirect to /dashboard/devis
    } else {
      setMessage('Invalid email or password');
      setIsSuccess(false);
    }
  };

  return (
    <Container>
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
    </Container>
  );
}

export default LoginPage;
