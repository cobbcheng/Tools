exports.fastClick = function(){
	document.body.addEventListener('touchstart',function(){})
}

exports.clearCookie = function(){
	document.cookie = ''

}

exports.getParamFormUrl=function(name){
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {return unescape(r[2]);}
	return null;
}

exports.isWeixin = function(){
	var ua = navigator.userAgent.toLowerCase();
	if((ua.match(/MicroMessenger/i)=="micromessenger")) {
	   return true;
	} else {
	   return false;
	}
}

exports.getCookie = function(name){
  return document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"))==null ? null : decodeURIComponent(RegExp.$2);
}

exports.setCookie = function(name,value){
	var Days = 360;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ encodeURIComponent (value) + ";expires=" + exp.toGMTString();
}

exports.checkMobile = function(val){
  var pattern=/(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
  if(pattern.test(val)) {
    return true;
  }else{
    return false;
  }
}

exports.getLocalTime = function(nS){
	var timeArr = new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ').split(' ')
	return timeArr[0] + timeArr[2]
}

exports.dateCompare = function(endDate){
	return new Date() < new Date(endDate.replace(/\-/g, "\/")) ? true : false
}


exports.loadProductsCallBack = function(res){
    try{
        res = JSON.parse(res);
    }catch(e){
        var reg = /body={(\S*?)}/g;
        var reg2 = /style=(\S*?)>/g;
        var reg3 = /<img src=\"\s*(\S*?)\s*\"/g;
        var reg4 = /<a href=\"\s*(\S*?)\s*\"/g;
        var reg5 = /<span class=\"\s*(\S*?)\s*\"/g;

        res = res.replace(reg,function(i,n){
          return i.replace(/\"/g,'\'');
        });
        res = res.replace(reg2,function(i,n){
          return i.replace(/\"/g,'\'');
        });
        res = res.replace(reg3,function(i,n){
          return i.replace(/\"/g,'\'');
        });
        res = res.replace(reg4,function(i,n){
          return i.replace(/\"/g,'\'');
        });
        res = res.replace(reg5,function(i,n){
          return i.replace(/\"/g,'\'');
        });
        //res = foo.filterHtml(res);
        res = JSON.parse(res);

    }
    return res;
}
exports.stopScroll=function(event){
  event.preventDefault();
  event.stopPropagation();
}
exports.addZero=function(num,length){
  //补0
  return ('0000000000000000'+num).slice(-length);
}


