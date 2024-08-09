import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LoginPage.css";
import logintext from "../../assets/images/loginText.png";
import loginbutton from "../../assets/images/loginButton.png";
import { useNavigate } from "react-router-dom";
import { loginKakao } from '../../api/loginKakao';

const LoginPage = () => {
  const Rest_api_key = process.env.REACT_APP_KAKAO_API_KEY;
  const redirect_uri = "http://localhost:3000/oauth2/callback/kakao"; // Redirect URI
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  // 카카오에서 액세스 토큰 가져오기
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      axios
      .post(
        "https://kauth.kakao.com/oauth/token",
        {
          grant_type: "authorization_code",
          client_id: Rest_api_key,
          redirect_uri,
          code,
        },
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((response) => {
        const { access_token } = response.data;
        setAccessToken(access_token);
        console.log("access", access_token)
      
      })
      .catch((error) => {
        console.error("Error fetching access token:", error);
        setErrorMessage("액세스 토큰을 얻는 데 실패했습니다.");
      });
    }
    
  }, []);

  // /login/kakao API에 요청 보내기
  useEffect(() => {
    console.log('useEffect 실행: ', accessToken)
    const fetchUserInfo = async () => {
      if (accessToken) {
        loginKakao(accessToken)
        .then((data) => {
          console.log('로그인 성공!', data);
          // 로그인 성공 후 MainPage로 이동
          navigate("/", { replace: true });

          localStorage.setItem('accessToken', data.data.accessToken);
          localStorage.setItem('role', data.data.role);
          localStorage.setItem('email', data.data.email);
          localStorage.setItem('nickname', data.data.nickname);
          
          console.log("accessToken_save", data.data.accessToken);

        })
        .catch((error) => {
          console.log('로그인 실패:', error);
        });
      }
      else {
        console.log('로그인 실패 또는 아직 로그인하지 않음');
      }
    };
  
    fetchUserInfo();
  }, [accessToken]);

  return (
    <div className="login-page">
      <div className="logintext-container">
        <img src={logintext} alt="logintext" />
      </div>
      <div className="loginorsignup">로그인/회원가입</div>
      <div className="loginbutton-container">
        <img src={loginbutton} alt="loginbutton" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
