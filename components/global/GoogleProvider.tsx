'use client';

import { GoogleOAuthProvider } from "@react-oauth/google";



const GoogleProvider = ({ children }:any) => {
  return ( 
    <GoogleOAuthProvider clientId='8449455201-hgpd1h93047868gqsjbm97nhlij5p7m4.apps.googleusercontent.com'>
       {children}
    </GoogleOAuthProvider>
   );
}
 
export default GoogleProvider;
