import 'isomorphic-fetch'

export const apiPath = 'https://demo1231077.mockable.io/api'

/**
 * fetchRequest
 * Fetches a request.
 *
 * @param      {string}  url  The url string
 * @return     {object}  Returns data from the fetch request
 * @throws Will throw error if request is malformed or unsuccessful
 */
export const fetchRequest = (url: string) =>
	 fetch(url, {
	 	method: 'GET',
	 	mode: 'cors',
	 	header: {
	 		'Access-Control-Allow-Origin': '*',
	 	},
	 })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    }).then(res => res.data)
    .catch(e => Promise.reject(e))

/**
 * formatDate
 * Returns a formatted readable date
 *
 * @param      {string}  date    The date in ISO-8301 format
 * @return     {string}  Readable date string
 */
export const formatDate = (date) => {
  const months = ['January',
  				  'February',
  				  'March',
  				  'April',
  				  'May',
  				  'June',
  				  'July',
  				  'August',
  				  'September',
  				  'October',
  				  'November',
  				  'December']
  const workableDate = date.slice(0, date.indexOf('T')).split('-').map(Number)
  return `${months[workableDate[1] - 1]} ${workableDate[2]}, ${workableDate[0]}`
}
