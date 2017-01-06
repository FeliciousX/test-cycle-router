import {div, a, nav} from '@cycle/dom'
import xs from 'xstream'
import { merge, propOr } from 'ramda'

import Hello from './Hello'
import AutocompletePage from './AutocompletePage'
import NotFound from './NotFound'

export function App (sources) {
  const {router} = sources

  const match$ = router.define({
    '/hello': Hello,
    '/auto': AutocompletePage,
    '/': NotFound,
  })
  const page$ = match$
  .map(({path, value}) => value(merge(sources, {
      path: router.path(path)
  })))

  const makeLink = (path, label) => a({props: {href: path}, style: {padding: '1em'}}, label)

  const nav$ = xs.of(nav({style: {marginBottom: '1em'}}, [
    makeLink('/hello', 'Hello'),
    makeLink('/auto', 'Autocomplete')
  ]))

  const propOrNever = propOr( xs.never() )

  const view$ = page$.map(propOrNever('DOM')).flatten()
  const http$ = page$.map(propOrNever('HTTP')).flatten()
  const router$ = page$.map(propOrNever('router')).flatten()

  const vdom$ = xs.combine(nav$, view$)
  .map(([navDom, viewDom]) => div([navDom, viewDom]))

  return {
    DOM: vdom$,
    HTTP: http$,
    router: router$
  };
}
