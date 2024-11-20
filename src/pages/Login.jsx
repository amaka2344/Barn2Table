import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import AuthCard from '../components/AuthCard';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here (API call)
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    console.log('Logging in with:', { email, password });
  };

  return (
    <AuthCard title="Login">
      <form onSubmit={handleLogin}>
        <InputField
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={error && !email ? 'Email is required' : ''}
        />
        <InputField
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={error && !password ? 'Password is required' : ''}
        />
        <Button type="submit" text="Login" />
      </form>
      <p className="text-center mt-4">
        Don't have an account?{' '}
        <a href="/register" className="text-blue-500 hover:underline">
          Register
        </a>
      </p>
    </AuthCard>
  );
};

export default Login;
