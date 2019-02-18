import request from '@/utils/request'

export function getHeaderMenu() {
  return request({
    url: '/api/sample/getHeader',
    method: 'get'
  })
}