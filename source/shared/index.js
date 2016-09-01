export const createLocals = ({
  store,
  params = {},
  query = {}
}) => ({
  state: store.getState(),
  dispatch: store.dispatch,
  params: {
    ...params,
    ...query
  }
})

export const basepath = process.env.BASE_PATH || ''
