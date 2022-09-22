// refs: https://github.com/sindresorhus/ky
import Ky from 'ky'

const api = Ky.create({
  prefixUrl: '/api',
  hooks: {
    beforeRequest: [
      async (request, options) => {
        const token = window.localStorage.getItem('TOKEN')
        if (token) {
          request.headers.set('token', token)
        }
      },
    ],
  },
})

export {api}
