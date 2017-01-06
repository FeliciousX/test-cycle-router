import { h1 } from '@cycle/dom'
import xs from 'xstream'

export default function Hello(sources) {
  return {
    DOM: xs.of(h1('hello world')),
    HTTP: xs.of({ url: '/auto' })
  }
}
