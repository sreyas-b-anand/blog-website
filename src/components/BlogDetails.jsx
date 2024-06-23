
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../pages/useFetch";
import './BlogDetails.css';


function BlogDetails() {
  const navigate = useNavigate();
    const {id} = useParams();
    const { data : blog ,isLoading , isError } = useFetch('http://localhost:8000/blogs/'+id);

    const handleClick = () =>
    {
      fetch('http://localhost:8000/blogs/' + id , {
        method : 'DELETE'
      }).then(() => {
        navigate('/')
      })
    }


  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="blog-details">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Failed to Fetch</p>}
        {blog && <div>
          <article>
            Title : {blog.title} <br />
            Author : {blog.author}
            <p>{blog.body}</p>
          </article>
          </div>}

          <button className="btn-dlt" onClick={handleClick}>delete</button>
      </div>
      
    </>
  );
}
export default BlogDetails;
