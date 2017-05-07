
export default (state = { quotation: '' }, action) => {
  switch (action.type) {
    // case 'FETCH_QUOTE':
    //   return { quotation: '' }

    case 'FETCH_QUOTE_FULFILLED':
      return { quotation: JSON.stringify(action.payload.response.value) }

    default:
      return state
  }
}

