import xs from 'xstream'
import { h1 } from '@cycle/dom'

export default function AutocompletePage( sources ) {
  return {
    DOM: xs.of( h1( 'AutocompletePage' )),
    HTTP: xs.of({ url: '/hello' })
  }
}
