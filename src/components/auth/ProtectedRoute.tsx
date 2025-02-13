import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import CookieService from "../../service/CookieService";

interface IProps {
  isAllowed?: boolean;
  redirectPath:string;
  children: ReactNode;
  data?: unknown;
}

const ProtectedRoute = ({ isAllowed, redirectPath, children, data }: IProps) => {
  // if (!isAllowed) return <Navigate to={redirectPath} replace state={data} />;
  // return children;
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    setToken(CookieService.getCookie('jwt') || '');
  }, []);

  if (!isAllowed || token) {
    return <Navigate to={redirectPath} replace state={data} />;
  }

  return children;

};

export default ProtectedRoute;
