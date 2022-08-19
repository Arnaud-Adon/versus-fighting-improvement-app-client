import api from './axios';
import type { UserParams, UserSaveParams, UserResponse } from '../types/user';

export const service = {
  fetchUser: async (body: UserParams): Promise<UserResponse> => {
    try {
      const { data } = await api.post<UserResponse>('/user/sign-in', body);
      return data;
    } catch (error: any) {
      throw new Error(error);
      //error?.response.data.message
    }
  },
  saveUser: async (body: UserSaveParams): Promise<UserResponse> => {
    try {
      const { data } = await api.post<UserResponse>('/user/sign-up', body);
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  },
};
