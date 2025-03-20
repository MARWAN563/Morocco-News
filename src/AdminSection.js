import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';
import './AdminSection.css'; 
export default function AdminSection() {
  const [value, setValue] = useState({ title: '', author: '', details: '', date: '' });
  const { posts, setPosts } = useContext(DataContext);

  function handleclick() {
    const currentDateTime = new Date().toLocaleString(); 
    setPosts([...posts, { ...value, date: currentDateTime }]); 
    setValue({ title: '', author: '', details: '', date: '' }); 
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Admin Section</h1>
      <div id="creator">
        <h1 id="titleAdmine">Create a New Post</h1>
        <div>
          <form id="CreatorForm" onSubmit={(event) => { event.preventDefault(); handleclick(); }}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                required
                type="text"
                placeholder="Enter the title"
                value={value.title}
                onChange={(event) => setValue({ ...value, title: event.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                id="author"
                required
                type="text"
                placeholder="Enter the author's name"
                value={value.author}
                onChange={(event) => setValue({ ...value, author: event.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="details">Post Details</label>
              <textarea
                id="details"
                required
                style={{ resize: 'none' }}
                placeholder="Enter the post details"
                value={value.details}
                onChange={(event) => setValue({ ...value, details: event.target.value })}
              />
            </div>
            <button type="submit" id="button" className="submit-button">Submit</button>
          </form>
          <div className="navigation-buttons">
            <Link to='/AdminSection/PostSection'>
              <button className="nav-button">Post Section</button>
            </Link>
            <Link to='/'>
              <button className="nav-button">Home</button>
            </Link>
            <Link to='/PublicSection'>
              <button className="nav-button">Public Section</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}