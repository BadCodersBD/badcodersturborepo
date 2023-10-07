export const endPoints = {
  auth: {
    register: '/users/signup',
    login: '/users/login',
    sendOtp: '/auth/reset-pass/send-otp',
    otpValidation: '/auth/reset-pass/otp-validate',
    updatePassword: '/auth/reset-pass/update-password',
  },
  admin: {
    auth: {
      login: '/admin-auth/login',
      adminOrder: '/admin-orders',
    },
  },
  delivery: {
    auth: {
      login: '/delivery-man-auth/login',
    },
    resendOTP: '/delivery-man-otp',
  },
}
