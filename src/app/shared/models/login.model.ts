export interface ILoginResponse {
    accessToken: string
    user: IUserResponse
  }
  export interface IUserResponse {
    email: string
    id: number
  }