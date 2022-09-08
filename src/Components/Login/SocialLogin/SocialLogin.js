import React from "react";
import icon1 from "../../../Images/social/google.png";
import icon2 from "../../../Images/social/facebook.png";
import icon3 from "../../../Images/social/github.png";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.int";
import Loading from "../../Shared/Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fuser, floading, ferror] = useSignInWithFacebook(auth);
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);

    const navigate = useNavigate(); 
    const location = useLocation();



    
    let from = location.state?.from?.pathname || "/";

    if (gerror || ferror ||  giterror ) {
        return (
          <div>
            <p className="text-error">Error: { gerror.message || ferror.message ||  giterror.message }</p>
          </div>
        );
      }
      if (gloading || floading || gitloading ) {
        return <Loading></Loading>
      }

      if (guser || fuser || gituser) {
        navigate(from, { replace: true });
      }

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5">
        <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-accent">
          <img src={icon1} alt="google" />
        </button>
        <button onClick={() => signInWithFacebook()} class="btn btn-outline btn-accent">
          <img src={icon2} alt="facebook" />
        </button>
        <button onClick={() => signInWithGithub()} class="btn btn-outline btn-accent">
          <img src={icon3} alt="github" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
