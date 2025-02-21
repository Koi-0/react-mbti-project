import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.log("error =>", error);
    }
};

// export const login = async (userData) => {};

// export const getUserProfile = async (token) => {};

// export const updateProfile = async (formData) => {};
