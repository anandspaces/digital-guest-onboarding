import { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make API call to authenticate user
    onLogin(username, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="space-y-4 p-6 border rounded-lg shadow-lg">
        <h2 className="text-2xl text-center font-semibold">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
