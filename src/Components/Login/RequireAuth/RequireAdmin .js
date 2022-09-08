import React from 'react';
import useAdmin from "../../../Hooks/useAdmin";
import { signOut } from 'firebase/auth';
import Loading from "../../Shared/Loading/Loading";
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.int';
import { useAuthState } from 'react-firebase-hooks/auth';

const RequireAdmin  = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
   
    const location = useLocation();

    if(loading || adminLoading){
        return <Loading></Loading>;
    }


    if(!user || !admin){
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAdmin ;