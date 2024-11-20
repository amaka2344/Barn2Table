import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import AuthCard from '../components/AuthCard';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here (API call)
    if (!name || !email || !phone || !password || password !== confirmPassword) {
      setError('Please ensure all fields are filled correctly');
      return;
    }
     // Validate phone number (example: length check, can be extended)
     if (!/^\d{11}$/.test(phone)) {
        setError('Phone number must be 10 digits');
        return;
      }

    console.log('Registering with:', { name, email, phone, password });
  };

  return (
    <AuthCard title="Register">
      <form onSubmit={handleRegister}>
        <InputField
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          errorMessage={error && !name ? 'Name is required' : ''}
        />
        <InputField
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={error && !email ? 'Email is required' : ''}
        />
        <InputField
        type="tel"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        errorMessage={error && !/^\d{11}$/.test(phone) ? 'Invalid phone number' : ''}
        />

        <InputField
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={error && password !== confirmPassword ? 'Passwords do not match' : ''}
        />
        <InputField
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit" text="Register" />
      </form>
      <p className="text-center mt-4">
        Already have an account?{' '}
        <a href="/login" className="text-blue-500 hover:underline">
          Login
        </a>
      </p>
    </AuthCard>
  );
};

export default Register;
