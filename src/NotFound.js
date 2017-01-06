import xs from 'xstream'
import { h1 } from '@cycle/dom'

export default function NotFound( sources ) {
  return {
    DOM: xs.of( h1( '404 NOT FOUND' ))
  }
}
