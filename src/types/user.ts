export interface UserParams {
  email: string;
  password: string;
}

export interface UserSaveParams {
  username: string;
  email: string;
  birthday: Date;
  country: string;
  password: string;
}

export interface UserResponse {
  user: UserData;
  token: string;
}

export interface UserData {
  username: string;
  birthday: Date;
  country: string;
  createdAt: Date;
  lastConnection: Date;
  image: string;
}
