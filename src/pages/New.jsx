import { useState } from "react";
import Navbar from "../components/Navbar";
import {  useNavigate } from "react-router-dom";
import './new.css';
function New() {

  const [title , setTitle] = useState('');
  const [body , setBody] = useState('');
  const [author , setAuthor] = useState('');
  const [isPending , setIsPending ] = useState(false);
 const navigate = useNavigate();
  const handleSubmit = (e) =>
    {
      e.preventDefault(); //prevent refresh
      const blog ={ title ,body, author }                   //e.target.value => fetch the data from input box
      setIsPending(true);
   

      console.log(blog);
      


      fetch('http://localhost:8000/blogs', {          //JSON code for POST REQUEST
        method : 'POST',
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(blog)
      })
      .then(() => {
        console.log("blog added");
        setIsPending(false);
       navigate('/'); //navigate back to home page
      })

     

    }
   

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="new">
        <form onSubmit={handleSubmit} >
          <h1>Add New Blog</h1>
          <label>
            <h1>Blog Title</h1>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required></input> 
          </label>
          <label>
            <h1>Blog Content</h1>
            <textarea onChange={(e) => setBody(e.target.value)} required></textarea>
          </label>
          <label>
            <h1>Blog Author</h1>
            <input type="text" value={author}
            onChange={(e) => setAuthor(e.target.value)}>   
              
            </input>
          </label>
          { !isPending && <div className="button" ><button >Add New Blog</button></div>}
          { isPending && <div className="button" ><button>adding</button></div>}
        </form>
        
      
      </div>
      
    </>
  );
}
export default New;
