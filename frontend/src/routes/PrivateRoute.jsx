import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../pages/Spinner";

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const {auth, setAuth} = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get("https://mern-auth-system-nu.vercel.app/api/product", {
                headers: {
                    Authorization: auth?.token||''
                }
            })

            if(res.status===200){
                setOk(true);
            }else{
                setOk(false);
            }
        }

        if(auth?.token) authCheck();

    }, [auth?.token]);
    return ok? <Outlet/> : <Spinner/> ;
}