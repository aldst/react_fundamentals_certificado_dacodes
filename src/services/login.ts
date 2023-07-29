import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/Store/Store";

import { AuthenticateI } from "../types/Auth";
import { API_URL, CONFIG } from "../types/Utils";

export const useLogin = () => {
  const { Email } = useSelector((state: RootState) => state.login);

  const navigate = useNavigate();

  const handleNavigateDashboard = async () => {
    await handleToken();
    navigate("/dashboard");
  };

  const handleToken = async () => {
    await axios
      .get<AuthenticateI>(`${API_URL}/authentication/guest_session/new`, CONFIG)
      .then((response) => {
        const token = response.data.guest_session_id;

        sessionStorage.setItem("token", response.data.guest_session_id);

        setTimeout(() => {
          navigate("/now_playing", {
            state: {
              token,
              username: Email,
              expires_at: response.data.expires_at,
            },
          });
        });
      });
  };
  return { handleNavigateDashboard, handleToken, Email };
};
