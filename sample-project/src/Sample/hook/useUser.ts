import axios from "axios";
import { useEffect, useState } from "react";
interface Users {
    id: number;
    userName: string;
  }
const useUser=()=>{
    const [users, setUsers] = useState<Users[]>([]);
    const [error, setErrors] = useState("");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      axios
        .get("http://localhost:36675/Admin")
        //success  of APi Call
        .then((res) => setUsers(res.data))
        //if any error or failed the APi call to the Server
        .catch((err) => {
          setErrors(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
    return{users,error,isLoading};
}

export default useUser;