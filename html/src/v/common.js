import FastClick from 'fastclick'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', () => FastClick.attach(document.body), false)
}
//require('es6-promise').polyfill();
import axios from 'axios'

axios.defaults.transformRequest = [data => {
    let ret = []
    for (let it in data) {
        ret.push(encodeURIComponent(it) + '=' + encodeURIComponent(data[it]))
    }
    return ret.join('&')
}]

axios.defaults.responseType = 'json'

// 添加响应拦截器
axios.interceptors.response.use(response => {
    config.load.status = 0
    if (response.data.code == '403') {
        cookie('token', null)
        let origin = location.origin
        let appId = /www/.test(origin) ? "wx78d24fae4560369c" : "wx69ea98b970de5cf5"
        let url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appId + "&redirect_uri=" + origin + "/v1/api0/weixin/oauth/redirect&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect"
        location.href = url
    } else {
        if (response.data.code != 200) {
            config.toast.msg = response.data.msg
        }
        return response.data
    }
}, error => Promise.reject(error))


Date.prototype.format = function(format) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

let params = function() {
    let url = location.search || location.href;
    let g = {};
    if (url.indexOf("?") != -1) {
        let str = url.split('?')[1],
            arr = str.indexOf("&") != -1 ? str.split("&") : [str];
        for (let i = 0; i < arr.length; i++) {
            let tmp = arr[i].split("=");
            g[tmp[0]] = decodeURI(tmp[1]);
        }
    }
    return g;
}()

let Cookie = {
    read(name) {
        let value = document.cookie.match('(?:^|;)\\s*' + name + '=([^;]*)');
        return (value) ? decodeURIComponent(value[1]) : null;
    },
    write(value) {
        let str = value.name + '=' + encodeURIComponent(value.value);
        if (value.domain) {
            str += '; domain=' + value.domain;
        }
        if (value.path) {
            str += '; path=' + value.path;
        }
        if (value.day) {
            let time = new Date();
            time.setTime(time.getTime() + value.day * 24 * 60 * 60 * 1000);
            str += '; expires=' + time.toGMTString();
        }
        document.cookie = str;
    },
    dispose(name) {
        let str = this.read(name);
        this.write({
            name: name,
            value: str,
            day: -1
        });
    }
}


let extend = (a, b) => {
    for (var key in b) {
        a[key] = b[key]
    }
    return a
}

Number.prototype.cutFixed = function(n) {
    var t = this.toString().split('.')
    var s = '000000000000000'
    if (n) {
        if (/\./.test(this)) {
            return [t[0], (t[1] + s).substr(0, n)].join('.')
        } else {
            return [this, s.substr(0, n)].join('.')
        }
    } else {
        return this
    }
}

let fullNumber = (n) => n > 9 ? n : '0' + n

extend(window, {
    axios,
    extend,
    fullNumber,
    formatDate(t) {
        let time = new Date(t)
        return [
            [fullNumber(time.getMonth() + 1), fullNumber(time.getDate())].join('-'), [fullNumber(time.getHours()), fullNumber(time.getMinutes())].join(':')
        ].join(' ')
    },
    formatNumber(n, length = 2) {
        if (n) {
            return n.cutFixed(length)
        } else {
            return length == 2 ? '0.00' : '0.0000'
        }
    },
    cookie(name, value, options) {
        if (typeof value != 'undefined') {
            if (value === null) {
                return Cookie.dispose(name);
            } else {
                options = options || {};
                options.name = name;
                options.value = value;
                return Cookie.write(options);
            }
        } else {
            return Cookie.read(name);
        }
    },
    config: {
        load: {
            status: ''
        },
        toast: {
            msg: ''
        },
        menu: {
            index: -1
        },
        login : {
            show : 0
        }
    }
})

document.setTitle = t => {
    document.title = t;
    var i = document.createElement('iframe');
    i.src = '//m.baidu.com/favicon.ico';
    i.style.display = 'none';
    i.onload = function() {
        setTimeout(function() {
            i.remove();
        }, 9)
    }
    document.body.appendChild(i);
}