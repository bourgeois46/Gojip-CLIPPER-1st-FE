import instance from '../api/axios';

export const loginKakao = async (accessToken) => {
    const response = await instance.post(
        "/login/kakao",
        {},
        {
            headers: {
                'token': accessToken
            }
        }
    );
    return response.data;
};