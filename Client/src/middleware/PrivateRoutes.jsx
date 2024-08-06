import { useQuery } from "react-query";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Spinner } from "../lib/loading";
import { getMe } from "../services/authService";
import useAuth from "../zustand/authStore";

function PrivateRoutes() {
  const { user, setUser } = useAuth();
  const location = useLocation();

  const { data, isLoading, isFetching } = useQuery("me", getMe, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: Infinity,
    onSuccess: (data) => {
      
      setUser(data.data.data);
    },
    onError: () => {
      setUser(null);
    },
  });

  const loading = isLoading || isFetching;

  if (loading) {
    return <Spinner className="middle" />;
  }
  console.log(user,"user");

  if (!user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default PrivateRoutes;
