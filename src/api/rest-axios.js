import axios from 'axios';

export const axiosRest = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
});

axiosRest.interceptors.request.use(
    async (config) => {

        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwYzliODQ0OS04OWU4LTRmZjctYWNkNC1iZWQ2Mjk4YWZiZmYiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2NzkxNjA2MjIsImV4cCI6MTY4MDA2MDYyMn0.7F0kx-bVSU4LXwHGwtbts6zh6k5dOy3kdLGmvPxLX64'

        config.headers.Authorization = `Bearer ${accessToken}`;

        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosRest;
