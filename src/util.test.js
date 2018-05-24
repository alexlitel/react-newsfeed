import { apiPath, fetchRequest, formatDate } from './util'

describe('fetchRequest', () => {
  test('Successfully requests data', async () => {
    const res = await fetchRequest(`${apiPath}/articles.json`)
    expect(res).toEqual(expect.any(Array))
  })

  test('Throws error when url is malformed', async () => {
    await expect(fetchRequest(`${apiPath}/foo.json`)).rejects.toBeDefined()
  })

  test('Throws error when url is nonexistent', async () => {
    await expect(fetchRequest('')).rejects.toBeDefined()
  })
})

describe('formatDate', () => {
  test('Formats date', async () => {
    expect(formatDate('2017-04-06T02:00:01.345Z')).toEqual('April 6, 2017')
  })
})
