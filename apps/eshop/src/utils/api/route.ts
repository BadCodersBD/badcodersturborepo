export const endPoints = {
  akibfb: {
    emailToCustomer: '/customers/find-by-email',
    orderHistoryOfCustomer: '/orders/order-history',
    wishlistCreate: '/wishlist/create',
    wishlistDetails: '/wishlist/find-by-customer',
    wishlistDelete: '/wishlist/delete',
  },
  akijecom: {
    orderCreate: '/orders/create',
    shippingInfo: '/shippingInfo/create',
    sslPayment: '/ssl-payment',
    orderDetails: '/order-details/find-by-order-id',
    addressFindbyCustomer: '/address/find-by-customer',
    addressUpdate: '/address/update',
    cashOnDelivery: '/payment/cash-on-delivery',
    hubs: '/hub',
    createHub: '/hub/create',
    assignHub: '/admin-orders/assign-hub',
    deliveryman: '/delivery-man',
    assignDeliveryman: '/admin-orders/assign-delivery-man',
    deliverymanOrderLists: '/delivery-man/delivery-Man',
    deliverymanOrderComplete: '/delivery-man/delivered-order',
    createDeliveryMan: 'delivery-man-auth/register',
    stockIn: '/transaction/create',
    allStockProductWithHub: '/transaction/running-balance-by-product',
  },
  auth: {
    register: '/auth/register',
    login: '/auth/login',
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
  visitor: {
    userDeviceInfo: '/client-info/create',
  },
}
