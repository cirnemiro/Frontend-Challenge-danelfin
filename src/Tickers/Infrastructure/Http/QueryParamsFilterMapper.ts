const QueryParamsFilterMapper = ({queryParams}: { queryParams: URLSearchParams }) => {
  if (undefined === queryParams) return []

  const filters = []

  /** @TODO: refactor. Make this moreconfig/lesscode */
  if (queryParams.has('country')) {
    // @ts-ignore
    filters.push({key: 'country', value: queryParams.get('country')})
  }
  if (queryParams.has('fundamental')) {
    // @ts-ignore
    filters.push({key: 'fundamental_score', value: queryParams.get('fundamental')})
  }
  if (queryParams.has('technical')) {
    // @ts-ignore
    filters.push({key: 'technical_score', value: queryParams.get('technical')})
  }
  if (queryParams.has('sentiment')) {
    // @ts-ignore
    filters.push({key: 'sentiment_score', value: queryParams.get('sentiment')})
  }
  if (queryParams.has('buy')) {
    // @ts-ignore
    filters.push({key: 'is_trade_idea_buy', value: queryParams.get('buy')})
  }
  if (queryParams.has('sell')) {
    // @ts-ignore
    filters.push({key: 'is_trade_idea_sell', value: queryParams.get('sell')})
  }

  return filters.length > 0 ? filters : []
}

export default QueryParamsFilterMapper
