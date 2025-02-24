import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);

    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);

    return response.data;
};

export const getUserProfile = async (accessToken) => {
    // authorization 속성 정의
    const response = await axios.get(`${API_URL}/user`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return response.data;
};

export const updateProfile = async (imgFile, nickname, accessToken) => {
    // 이미지 파일을 FormData에 담는 방법
    const formData = new FormData();

    formData.append("avatar", imgFile); // imgFile 추가
    formData.append("nickname", nickname); // nickname 추가

    // 요청 시 Content-Type 유의
    const response = await axios.patch(`${API_URL}/profile`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return response.data;
};
