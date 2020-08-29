$(function(){
	//为body赋予高度
		  var hei = $(window).height();
		  var $bod = $("body");
		  $bod.height(hei);
		   var $top = $(".header-r");
		  	  $top.on("click",function(){
		  	   $(this).toggleClass("s-cor");
		  	   $(this).children(".slide").toggleClass("f-tra");	
		  	   $(this).children(".slide").children("ul").toggle(500);
		  	  });
	var btnHide = false
		$('#img').click(function(){
			console.log(111)
			btnHide = !btnHide
			if(btnHide == true){	
				$('.sideBar').css('display', 'block')
				
			} else {
				$('.sideBar').css('display', 'none')
				
			}
		})
		navTouchend('#image','.seach-b');
		$('.contentbox .switch span').on('click', function () {
		    // 处理切换
		    var _qhid = $(this).attr('qhid');
		    $('.switchqh').hide();
		    $('.switchqh[qhid="' + _qhid + '"]').show();
		    $(this).attr('class', 'on').siblings().attr('class', '');
		})
		// 默认选中第一个
		$('.contentbox .switch span').eq(0).click();
})
function navTouchend (id,id1){
	$(id).on({
		touchstart:function(){
			$(id1).show();
		},
		touchend:function(){
			$(id1).hide();
		}
	});
}