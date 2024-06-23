import Navbar from "../components/Navbar";
import Bloglist from "../components/Bloglist";
import useFetch from "./useFetch";


function Home() {

  
const url ='http://localhost:8000/blogs';
   const {data : blogs,isError,isloading}  =  useFetch(url);
  return (
    <>
      <Navbar />
      {isError && <div>{isError}</div>}
      {isloading && <div>Is loading</div>}
      { blogs &&<Bloglist blogs={blogs} key={blogs.id} />}
      
    </>
  );
}
export default Home;
