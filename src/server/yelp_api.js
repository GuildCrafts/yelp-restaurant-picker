// TODO: dangerous to do, this should live in the backend config
export const CLIENT_ID = '9HlpdLwFp9S37UGD_9l87A'
export const API_KEY = 'NGgTVOE1lkB6rG57tnf89c7wl1bW5edBYyrBVA40dqH6IiNhHbnjURn4pXBd0EnWVtJpnsCwwJgJ9dq54bejQvsQocCiffKdq4Jg9ekV'
export const SECRET_KEY= 'lFIDNuiKvhrJtGgDZyKcNLcmUP4VqJnQTOFhWE3M9kWz4yG5P5xzaOtmxc9yQevH'

console.log('going to make api call to yelp')

fetch('https://api.yelp.com/v3/businesses/search?term=Restaurants&location=Oakland',
      {method: 'GET', headers: {'Authorization': `Bearer ${API_KEY}`}, mode: 'no-cors'})
  .then(result => {
    console.log('result:', result);
  })
