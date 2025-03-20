import { useContext, useState } from 'react';
import { DataContext } from './DataContext';
import { Link } from 'react-router-dom';
import './PostSection.css'; 

const PostSection = () => {
  const { posts, setPosts } = useContext(DataContext);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState({ title: '', author: '', details: '', date: '' });

  const handleRemove = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(posts[index]);
  };

  const handleSave = () => {
    const updatedPosts = [...posts];
    updatedPosts[editIndex] = editValue;
    setPosts(updatedPosts);
    setEditIndex(null); 
    setEditValue({ title: '', author: '', details: '', date: '' }); 
  };

  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '0', padding: '0' }}>
        Welcome Admin to the Posts Studio
      </h1>

      <div id="PostSection">
        <Link to="/AdminSection" id="AdminSectionButton">
          <button>Admin Section</button>
        </Link>
        {posts.map((post, index) => (
          <div key={index} id="postMedia">
            <div id="postMediaContainer">
              {editIndex === index ? (
                <div className="edit-form">
                  <input
                    type="text"
                    placeholder="Edit Title"
                    value={editValue.title}
                    onChange={(e) => setEditValue({ ...editValue, title: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Edit Author"
                    value={editValue.author}
                    onChange={(e) => setEditValue({ ...editValue, author: e.target.value })}
                  />
                  <textarea
                    placeholder="Edit Details"
                    value={editValue.details}
                    onChange={(e) => setEditValue({ ...editValue, details: e.target.value })}
                  />
                  <button onClick={handleSave}>Save</button>
                  <button onClick={() => setEditIndex(null)}>Cancel</button>
                </div>
              ) : (
                <>
                  <h2>{index + 1}. Title: {post.title}</h2>
                  <h4>Author: {post.author}</h4>
                  <p>{post.details}</p>
                  <p>{post.date}</p>
                </>
              )}
            </div>
            {editIndex !== index && (
              <div className="postMediaButtons">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default PostSection;