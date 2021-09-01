import axios  from 'axios';
import QS from "qs"; //引入qs模块,用来序列化post类型的数据
import Vue from "vue";
if (process.env.NODE_ENV == "development") {
    // axios.defaults.baseURL = "";//正式
    //   axios.defaults.baseURL = "";//测试
} else if (process.env.NODE_ENV == "debug") {
    axios.defaults.baseURL = "";
} else if (process.env.NODE_ENV == "production") {
    axios.defaults.baseURL = "";
}
//设置请求超时
axios.defaults.timeout = 30000;
let type = app - type
//post请求头的设置
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.headers.put["Content-Type"] =
    "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.headers.delete["Content-Type"] =
    "Access-Control-Allow-Origin";
// axios.defaults.headers.common['app-type'] = 'wxapp'
// // 请求拦截器
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem("access_token")) {
            config.headers.Authorization = localStorage.getItem("access_token");
            //   config.headers.common['app-type'] = 'wxapp'
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
// 响应拦截器
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        let that = this
       
        if (response.status) {
            if (response.data.errorCode == 10001 || response.data.errorCode == 10040) {
              
                Vue.prototype.$message({
                    type: "error",
                    message: "登录已过期，请重新登录"
                });
                // 清除token
                localStorage.removeItem("token");   
                setTimeout(() => {
                    location.href = '#/login'
                }, 1000);
                return Promise.reject(response);
            }
            else if (response.data.errorCode == 10004) {
                Vue.prototype.$message({
                    type: "error",
                    message: "账号或密码错误"
                });
                return Promise.reject(response);

            }
            console.log(response)
            return Promise.resolve(response);

        } else {

            return Promise.reject(response);
        }
    },
    error => {
        if (error.request.status == 401) {
            Vue.prototype.$message({
                type: "error",
                message: "登录已过期，请重新登录"
            });
            localStorage.removeItem("token");
            setTimeout(() => {
                location.href = '#/login'
            }, 1000);
        }
        if (error.request.status == 404 && JSON.parse(error.request.response).msg == '账户不存在') {
            Vue.prototype.$message({
                type: "error",
                duration:1000,
                message: JSON.parse(error.request.response).msg
            });
        }
    }
);

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export default function request(api, method = "GET", data) {
    return new Promise((resolve, reject) => {
        if (method == 'post' || method == 'POST') {
            axios
                .post(api, QS.stringify(data))
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data);
                });
        } else if (method == 'GET' || method == 'get') {
            axios
                .get(api, { params: data })
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data);
                });
        }
        else if (method == 'put' || method == 'PUT') {
            axios
                .put(api, QS.stringify(data))
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data);
                });
        }
        else if (method == 'del' || method == 'delete' || method == 'Del' || method == 'Delete') {
            axios
                .delete(api, { params: data })
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data);
                });
        }
    })
}