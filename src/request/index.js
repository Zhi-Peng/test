import axios from 'axios'

// 设置axios的默认请求地址,根据不同环境配置接口地址
// axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
// console.log(process.env.VUE_APP_BASEURL, '77777777777777')

//  TODO 测试请求头参数 待删除
axios.defaults.headers.common["token"] = 'e73e9c55ce1467ee4afa5ee1c05c3f5d'
const transformRequest = function (data) {
  console.log(data, 'dddddd')
  
  return data
}

const transformResponse = function (data) {
  return data
}

// 请求成功拦截的处理
const requestSuccess = function (config) {
  // 处理请求成功拦截的逻辑代码
  return config
}

// 请求失败拦截的处理
const requestError = function (config) {
  // 处理请求失败的逻辑代码
  return config
}

// 响应成功后的数据处理
const responseSuccess = function (config) {
  return config
}

// 响应失败后的数据处理
const responseError = function (error) {
  console.log(error.response, '-------------')
  
  if (!error) {
    console.log('请检查网络')
    return
  }

  // 应对后端未拦截误
  if (error.response.status === 500) {
    console.log('data')
    return ''
  }

  return error.response
}
const http = axios.create({
  transformRequest: [transformRequest],
  transformResponse: [transformResponse]
})

http.interceptors.request.use(requestSuccess, requestError)
http.interceptors.response.use(responseSuccess, responseError)

const config = (method, url, params, headers) => {
  return {
    method,
    url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    headers
  }
}

/**
 * @param {Array} 
 * 
 * 
*/

const setHead = (reqHead) => {
  if (!reqHead) return 
  const head = {}
  reqHead.forEach(item => {
    if (item.value) {
      head[item.name] = item.value
    }
  })

  return head
}

export default class Http {
  async get (url, params) {
    const confi = config('GET', url, params)

    try {
      const data = await http(confi)
      return data
    } catch (err) {
      return err
    }
  }

  async post (url, data, reqHead) {
    const headers = setHead(reqHead)
    const confi = config('POST', url, data, headers)

    try {
      const data = await http(confi)
      return data
    } catch (err) {
      return err
    }
  }
} 