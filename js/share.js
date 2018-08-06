
	$.ajax({
        url : "http://demo.315net.com/wxshare/get-sign-package" ,
		type : "post",
        datatype : 'json',
        data:{
            url:window.location.href
        },
		cache : true,
		success : function(data) {
            console.log(JSON.parse(data))
            data = JSON.parse(data).data
            console.log(data)
			wx.config({
				debug : false,// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId :data.appId,// 必填，公众号的唯一标识
				timestamp : data.timestamp,// 必填，生成签名的时间戳
				nonceStr : data.nonceStr,// 必填，生成签名的随机串
				signature : data.signature,// 必填，签名，
				jsApiList : [
				// 所有要调用的 API 都要加到这个列表中
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',         
                'onMenuShareQZone',        

             ]
            });
             setWx()
		}
    });

    function setWx()
    {
        wx.ready(function() {
            var desc = '锯齿防伪，引领商品防伪科技的领导者！'
            if(location.href.indexOf('result.html')>-1){
                var obj = JSON.parse(getQueryString('res'));
                var name = obj.data.productName;
                console
                 if(getQueryString('resultType')!=2){
                    var isTrues = obj.data.resultType == 0 ? '真品' : '赝品';
                    desc = '我查验的'+name+'为《'+isTrues+'》'
                }
               
            }
            var shareData={
                title: '拍拍看-查验真伪神器',
                desc: desc,
                link: location.href,
                imgUrl: window.location.origin+'/images/logos.png',
                success: function () { 
                   
                },
                cancel: function () { 
                   
                }
                }
            wx.onMenuShareTimeline(shareData); 
            wx.onMenuShareAppMessage(shareData); 
            wx.onMenuShareQQ(shareData); 
            wx.onMenuShareQZone(shareData); 
             
     
        });
    }