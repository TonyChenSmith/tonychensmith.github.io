//新的tcs.js
var zh_CN_Header={"tcs_point":"跳转","tcs_lang":"转为：英语","tcs_guide_home":"主页","tcs_guide_about":"关于"};
var en_US_Header={"tcs_point":"Turn","tcs_theme":"To:Chinese","tcs_guide_home":"Home","tcs_guide_about":"About"};

var tcs_active={"page":"","themeType":""};

//获得参数
function TCSGetQueryString(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return unescape(r[2]); return null;
}

//转全局中文
function TCSHeaderTurnChinese()
{
	$("*").css("cssText","font-family:'微软雅黑', '黑体', 'sans-serif';font-size:100%");
	$("#tcs_point").text(zh_CN_Header["tcs_point"]);
	$("#tcs_lang").text(zh_CN_Header["tcs_lang"]);
	$("#tcs_guide_home").text(zh_CN_Header["tcs_guide_home"]);
	$("#tcs_guide_about").text(zh_CN_Header["tcs_guide_about"]);
}

//亮色主题
function TCSHeaderLightTheme(lang)
{
	$("body").css("background-color","#F1F1F1");
	$("#tcs_header a").css("color","#F5F5F5");
	$(".navbar").css({"background-color":"#0292ED","border":"none"});
	$(".navbar-toggle").css("cssText","background-color:#32AEFD !important;border-color:#F5F5F5 !important");
	$(".navbar-toggle").mousedown(function(){$(this).css("cssText","background-color:#016AAD !important");});
	$(".navbar-toggle").mouseup(function(){$(this).css("cssText","background-color:#32AEFD !important");});
	$(".navbar-toggle").hover(function(){$(this).css("cssText","background-color:#016AAD !important");},function(){$(this).css("cssText","background-color:#32AEFD !important");});
	$(".icon-bar").css("cssText","background-color:#B2B2B2 !important");
}

//暗色主题
function TCSHeaderDarkTheme(lang)
{
	$("body").css("background-color","#151515");
	$("#tcs_header a").css("color","#6CC5FD");
	$(".navbar").css({"background-color":"#003659","border":"none"});
	$(".navbar-toggle").css("cssText","background-color:#016AAD !important;border-color:#6CC5FD !important");
	$(".navbar-toggle").mousedown(function(){$(this).css("cssText","background-color:#32AEFD !important");});
	$(".navbar-toggle").mouseup(function(){$(this).css("cssText","background-color:#016AAD !important");});
	$(".navbar-toggle").hover(function(){$(this).css("cssText","background-color:#32AEFD !important");},function(){$(this).css("cssText","background-color:#016AAD !important");});
	$(".icon-bar").css("cssText","background-color:#CECECE !important");
}