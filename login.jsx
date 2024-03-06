import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

// Login component
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    if (!username || !password) {
      setError('Please enter both username/email and password.');
      return;
    }
    // Password strength validation can be added here

    // Mock login functionality
    if (username === 'user@example.com' && password === 'password') {
      // Save rememberMe state to local storage
      if (rememberMe) {
        localStorage.setItem('rememberMe', true);
      } else {
        localStorage.removeItem('rememberMe');
      }
      // Redirect to homepage
      // For simplicity, assuming homepage route is "/"
      return <Redirect to="/" />;
    } else {
      setError('Invalid username/email or password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Username/Email:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label>Remember Me</label>
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/forgot-password">Forgot Password?</Link>
    </div>
  );
};

// ForgotPassword component
const ForgotPassword = () => {
  return (
    <div>
      <h2>Forgot Password</h2>
      {/* Implement your forgot password functionality here */}
    </div>
  );
};

// App component
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </Router>
  );
};

// Home component
const Home = () => {
  return (
    <div>
      <h2>Welcome to the Application Homepage!</h2>
      {/* Add your application homepage content here */}
    </div>
  );
};

export default App;
