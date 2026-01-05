import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";

export default function RequireAuth({ children }) {
  const user = useAuthStore((s) => s.user);
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      alert("로그인이 필요한 서비스입니다.");
    }
  }, [user]);

  // 로그인 안됐으면 메인으로 이동
  if (!user) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
}
