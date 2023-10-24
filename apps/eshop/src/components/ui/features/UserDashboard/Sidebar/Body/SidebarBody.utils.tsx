import ViewListIcon from '@mui/icons-material/ViewList'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import PaymentIcon from '@mui/icons-material/Payment'

export const listOfMenu = [
  {
    id: 1,
    type: 'User Profile',
    listOfItems: [
      {
        id: 1,
        name: 'Account Settings',
        icon: <ManageAccountsIcon />,
        url: '/manageAccount',
      },
      {
        id: 2,
        name: 'Order History',
        icon: <ViewListIcon />,
        url: '/orderHistory',
      },
      {
        id: 3,
        name: 'Wish List',
        icon: <FavoriteIcon />,
        url: '/userWishList',
      },
      {
        id: 4,
        name: 'Payment Setting',
        icon: <PaymentIcon />,
        url: '/userPaymentSettings',
      },
    ],
  },
]
