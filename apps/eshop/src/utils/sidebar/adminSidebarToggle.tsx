import { atom } from 'recoil'

export const adminSidebarToggleState = atom({
  key: 'adminSidebarToggle',
  default: false as boolean,
})
