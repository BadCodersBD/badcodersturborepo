import ViewListIcon from '@mui/icons-material/ViewList'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'

export const listOfMenu = [
  {
    id: 1,
    type: 'User Settings',
    listOfItems: [
      {
        id: 1,
        name: 'OverView',
        icon: <ManageAccountsIcon />,
        url: '/adminProfile',
      },
      {
        id: 2,
        name: 'Pending Rent History',
        icon: <ViewListIcon />,
        url: '/adminrenthistory',
      },
    ],
  },
]
