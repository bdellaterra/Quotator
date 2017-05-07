import { ajax } from 'rxjs/observable/dom/ajax'
import { QUOTE_API_URL } from 'constants/index.js'

const quoteURL = 'https://api.chucknorris.io/jokes/random'

export const quoteEpic = (action$) =>
  action$.ofType('FETCH_QUOTE')
    .mergeMap((action) =>
      ajax({ url: QUOTE_API_URL, responseType: 'json', crossDomain: true })
        .map((response) => ({ type: 'FETCH_QUOTE_FULFILLED', payload: response }))
    )

