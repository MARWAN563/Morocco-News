import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const OPage = ({setIsAuthenticated}) => {
  const [value, setValue] = useState({ username: '', password: '', id: '' });
  const navigate = useNavigate();

  function verify(event) {
    event.preventDefault(); 
    const Admin = { username: 'M-one', password: 'Marouane2004', id: '28022004' };
    if (value.username === Admin.username && value.password === Admin.password && value.id === Admin.id) {
      setIsAuthenticated(true);
      navigate('/AdminSection');
    } else {
      navigate('/PublicSection');
    }
  }

  return (
    <>
      <div id="formContainer">
        <h1 className="form-title">Welcome to Morocco News</h1>
        <p className="form-description">
          Please fill in the form below to verify your identity. If you're an admin, you'll be redirected to the admin section. Otherwise, you'll be taken to the public section.
        </p>
        <form className="form-pass" onSubmit={verify}>
          <h2 className="form-header">User Information</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              required
              type="text"
              placeholder="Enter your username"
              value={value.username}
              onChange={(event) => setValue({ ...value, username: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              required
              type="password"
              placeholder="Enter your password"
              value={value.password}
              onChange={(event) => setValue({ ...value, password: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              id="id"
              required
              type="text"
              placeholder="Enter your ID"
              value={value.id}
              onChange={(event) => setValue({ ...value, id: event.target.value })}
            />
          </div>
          <button id="button" type="submit" className="submit-button">Verify</button>
        </form>
      </div>
    </>
  );
};

export default OPage;