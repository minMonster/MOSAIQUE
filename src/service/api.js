import request from '@/service'

export const myInfo = (params, opts) => request.get('my_info', { params, ...opts })
