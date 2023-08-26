import { grayBlack } from './grayBlack'
import { grayBlue } from './grayBlue'
import { grayBrown } from './grayBrown'
import { grayGreen } from './grayGreen'
import { grayOrange } from './grayOrange'
import { grayRed } from './grayRed'

import { primaryBlue } from './primaryBlue'
import { primaryBrown } from './primaryBrown'
import { primaryGreen } from './primaryGreen'
import { primaryOrange } from './primaryOrange'
import { primaryRed } from './primaryRed'
import { primaryYellow } from './primaryYellow'

import { whiteBlack } from './whiteBlack'
import { whiteBlue } from './whiteBlue'
import { whiteBrown } from './whiteBrown'
import { whiteGreen } from './whiteGreen'
import { whiteOrange } from './whiteOrange'
import { whiteRed } from './whiteRed'

export type ThemeName = keyof typeof themes

export const themes = {
    ['gray-black']: grayBlack,
    ['gray-blue']: grayBlue,
    ['gray-brown']: grayBrown,
    ['gray-green']: grayGreen,
    ['gray-orange']: grayOrange,
    ['gray-red']: grayRed,

    ['primary-blue']: primaryBlue,
    ['primary-brown']: primaryBrown,
    ['primary-green']: primaryGreen,
    ['primary-orange']: primaryOrange,
    ['primary-red']: primaryRed,
    ['primary-yellow']: primaryYellow,

    ['white-black']: whiteBlack,
    ['white-blue']: whiteBlue,
    ['white-brown']: whiteBrown,
    ['white-green']: whiteGreen,
    ['white-orange']: whiteOrange,
    ['white-red']: whiteRed,
}
