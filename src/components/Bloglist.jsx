
import './Bloglist.css';
import { Link } from "react-router-dom";

function Bloglist(props) {
  const blogs = props.blogs;
  

  
  
  return (
    <>
      <div>
        
         <div >
         {blogs.map((blog) => (
           <div key={blog.id} className="blog-preview"> <Link key={blog.id} to={`/blog/${blog.id}`}><p   key={blog.id}>{blog.title}  </p></Link></div>
          ))}
         </div>
      
      </div>
    </>
  );
}
export default Bloglist;
