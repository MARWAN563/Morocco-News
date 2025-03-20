import { useState, useEffect } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Formlaire from './Formulaire';
import AdminSection from './AdminSection';
import PublicSection from './PublicSection';
import { DataContext } from './DataContext';
import PostSection  from './PostSection'

function Main() {
  return (
    <>
      <div id="main-content">
        <header id="header">
          <h1>Welcome to Morocco News</h1>
          <p>
            Your gateway to staying informed. Explore the latest updates and stories from Morocco and beyond.
          </p>
        </header>

        <section id="introduction-section">
          <div className="intro-card">
            <h2>About Us</h2>
            <p>
              Morocco News is your trusted source for breaking news, sports updates, and economic developments. 
              Dive into our platform to stay ahead of the curve.
            </p>
          </div>
          <div className="intro-card">
            <h2>Why Choose Us?</h2>
            <p>
              We deliver accurate, timely, and comprehensive news coverage. Join us to stay informed and connected.
            </p>
          </div>
          <div className="intro-card">
            <h2>Get Started</h2>
            <p>
              Click the link below to access the form and let us know if you're an admin or a user.
            </p>
          </div>
        </section>

        <footer id="footer">
          <Link to="/form" style={{ textDecoration: "none", textTransform: "uppercase" }}>
            <h1>
              <span style={{ textDecoration: "underline", color: "red" }}>Click Here</span> to go to the form page
            </h1>
          </Link>
          <p>&copy; 2025 Morocco News. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [posts, setPosts] = useState(() => {
    try {
      const storedItems = JSON.parse(localStorage.getItem('Posts')) || [];
      return storedItems;
    } catch (error) {
      console.error('Error initializing Posts:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('Posts', JSON.stringify(posts)); // Use the same key "Posts"
    } catch (error) {
      console.error('Error saving Posts:', error);
    }
  }, [posts]);

  return (
    <DataContext.Provider value={{ posts, setPosts }}>
      <Routes>
        <Route path="/form" element={<Formlaire setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/AdminSection"
          element={isAuthenticated ? <AdminSection /> : <Navigate to="/form" />}
        />
        <Route
          path="/AdminSection/PostSection"
          element={isAuthenticated ? <PostSection /> : <Navigate to="/form" />}
        />
        <Route path="/PublicSection" element={<PublicSection />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </DataContext.Provider>
  );
}


export default App;