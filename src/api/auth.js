import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);

    return response.data;
};

export const login = async (userData) => {
    // const response = await axios.post(
    //     `${API_URL}/login?expiresIn=10m`,
    //     userData
    // );

    const response = await axios.post(`${API_URL}/login`, userData);

    // 서버가 반환하는 토큰
    const token = response.data.token;
    if (token) {
        localStorage.setItem("token", token); // 토큰 저장
    }

    return response.data;
};

export const getUserProfile = async (token) => {
    // authorization 속성 정의
    const response = await axios.get(`${API_URL}/user`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const updateProfile = async (imgFile, nickname, token) => {
    // 이미지 파일을 FormData에 담는 방법
    const formData = new FormData();

    formData.append("avatar", imgFile); // imgFile 추가
    formData.append("nickname", nickname); // nickname 추가

    // 요청 시 Content-Type 유의
    const response = await axios.patch(`${API_URL}/profile`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};
