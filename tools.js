exports.getParamFormUrl = (name) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) { return unescape(r[2]) }
  return null
}

exports.isWeixin = () => {
  var ua = navigator.userAgent.toLowerCase()
  if ((ua.match(/MicroMessenger/i) === 'micromessenger')) {
    return true
  } else {
    return false
  }
}

exports.getCookie = (name) => {
  return document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)')) === null ? null : decodeURIComponent(RegExp.$2)
}

exports.setCookie = (name, value) => {
  var Days = 360
  var exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + exp.toGMTString()
}

exports.checkMobile = (val) => {
  return /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/.test(val)
}

exports.getLocalTime = (nS) => {
  var timeArr = new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ').split(' ')
  return timeArr[0] + timeArr[2]
}

exports.dateCompare = (endDate) => {
  return new Date() < new Date(endDate.replace(/\-/g, '\/')) ? true : false
}

exports.addZero = (num, length) => {
  // 补0
  return ('00000000000000000000' + num).slice(-length)
}

exports.fixAndroidScroll = () => {
  // .container 设置了 overflow 属性, 导致 Android 手机下输入框获取焦点时, 输入法挡住输入框的 bug
  // 解决方法:
  // 0. .container 去掉 overflow 属性, 但此 demo 下会引发别的问题
  // 1. 参考 http://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element
  //    Android 手机下, input 或 textarea 元素聚焦时, 主动滚一把
  if (/Android/gi.test(navigator.userAgent)) {
    window.addEventListener('resize', function () {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        window.setTimeout(function () {
          document.activeElement.scrollIntoViewIfNeeded()
        }, 0)
      }
    })
  }
}

exports.checkName = name => {
  return /(?!.*先生.*|.*小姐.*|.*男士.*|.*女士.*|.*太太.*)^([\u4e00-\u9fa5\ ]{2,4})$/.test(name)
}

exports.checkID = id => {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(id)
}
