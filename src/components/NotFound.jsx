import { Link } from "react-router-dom";


function NotFound() {
  return (
   <>
    <div className="notfound">
        <p>Sorry,Page not found</p>
        <Link to ="/">Back to home page.....</Link>
    </div>
   </>
  )
}
export default NotFound;