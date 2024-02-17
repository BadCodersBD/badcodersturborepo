export interface IAuthReducer {
  // isLoading: boolean;
  isSubmitting: boolean;
  errors: any;
  registerInput: {
    email: string;
    password: string;
    // firstName: string;
    // lastName: string;
    username: string;
    // phone: string;
  };
}

export interface ILoginAuthReducer {
  // isLoading: boolean;
  isSubmitting: boolean;
  loginInput: {
    emailorphone: string;
    password: string;
  };
  errors: any;
}
