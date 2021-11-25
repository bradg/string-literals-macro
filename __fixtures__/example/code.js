import {w} from '../../string-literals.macro'

const inp = w`hello world`
const in3 = w`how  are
    you	today`
const in4 = w`hello world ${ignore} x ${ok}`
const escapeSpaces = w`age birth\ year`