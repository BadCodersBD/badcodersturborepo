import ViewListIcon from '@mui/icons-material/ViewList'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import PaymentIcon from '@mui/icons-material/Payment'

export const listOfMenu = [
  {
    id: 1,
    type: 'User Settings',
    listOfItems: [
      {
        id: 1,
        name: 'Account Settings',
        icon: <ManageAccountsIcon />,
        url: '/profile',
      },
      {
        id: 2,
        name: 'Rent History',
        icon: <ViewListIcon />,
        url: '/renthistory',
      },
      {
        id: 3,
        name: 'Payment Setting',
        icon: <PaymentIcon />,
        url: '/userPaymentSettings',
      },
    ],
  },
]
