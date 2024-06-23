import { useState,useEffect }  from 'react'

function useFetch(url) {

    const [data, setData] = useState(null);
    const [isloading , setIsLoading] = useState(true);
    const [isError , setIsError] = useState(false);

    useEffect(() => {
   
        fetch(url)
       .then(res => {
        if(!res.ok)
          {
            throw Error('error loading the page');
          }
        console.log(res);
        return res.json();
       })
       .then(data => {
        setData(data);
        setIsLoading(false);
        setIsError(false);
    
      
       })
       .catch(error => {
        console.log(error.message);
        setIsError(error.message);
        setIsLoading(false);
    
       });
    
       
      },[url]);
      
    
  return {data ,isloading,isError };
   
}
export default useFetch;