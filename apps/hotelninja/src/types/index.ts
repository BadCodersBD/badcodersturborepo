

export type ResponseType = {
    statusCode: number
    error: string
    message: string
    Status: number
    data: {
      email: string,
      name: string,
      phone: string,
      strAccess_token: string;
      strRefresh_token: string,
      userId: number
    }
  }

  export interface IRegisterType {
    email: string
    password: string
    firstName: string
    lastName: string
  }