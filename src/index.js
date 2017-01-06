import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {makeHTTPDriver} from '@cycle/http'
import {makeRouterDriver} from 'cyclic-router'
import {App} from './app'
import switchPath from 'switch-path'
import {createHistory} from 'history'

const main = App

const drivers = {
  DOM: makeDOMDriver('#app'),
  HTTP: makeHTTPDriver(),
  router: makeRouterDriver( createHistory(), switchPath )
}

run(main, drivers)
