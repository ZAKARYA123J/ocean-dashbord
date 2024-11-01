"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../AuthContext';
import { AiOutlineLoading } from 'react-icons/ai'; // Import the loading spinner icon

import './LoginPage.css'; // Import the CSS file

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the login process starts

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
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
    }
  };

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleLogin} className="form">
          <h2 className="title">Login</h2>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="input"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="input"
          />
          <button 
            type="submit" 
            className="button"
            disabled={loading} // Disable button while loading
          >
            {loading ? <AiOutlineLoading className="spinner" fontSize={30} /> : 'Login'}
          </button>
          {message && <p className={`message ${isSuccess ? 'success' : 'error'}`}>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
