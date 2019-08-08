//获得参数
function GetQueryString(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return unescape(r[2]); return null;
}

//获得页面
function LoadPage(bodyName,name,cssFunction,themeType)
{
	$(bodyName).empty();
	$(bodyName).load(name.concat(".html"),function(){
		if(cssFunction != undefined)
		{
			cssFunction(themeType);
		}
	});
	$(bodyName).attr("page",name);
}

//获得标题
function GetTitle(pageName,lang)
{
	if(lang == "zh_CN")
	{
		if(pageName == "tcs_main")
		{
			return "主页";
		}
		else if(pageName == "tcs_about")
		{
			return "关于";
		}
		else
		{
			return "未定义";
		}
	}
	else
	{
		if(pageName == "tcs_main")
		{
			return "Home";
		}
		else if(pageName == "tcs_about")
		{
			return "About";
		}
		else
		{
			return "Undefine";
		}
	}
}

//亮色主页面主题
function TurnLightTheme()
{
	$("body").css("background-color","#F1F1F1");
	$("#tcs_index_header a").css("color","#F5F5F5");
	$(".navbar").css({"background-color":"#0292ED","border":"none"});
	$(".navbar-toggle").css("cssText","background-color:#32AEFD !important;border-color:#F5F5F5 !important");
	$(".navbar-toggle").mousedown(function(){$(this).css("cssText","background-color:#016AAD !important");});
	$(".navbar-toggle").mouseup(function(){$(this).css("cssText","background-color:#32AEFD !important");});
	$(".navbar-toggle").hover(function(){$(this).css("cssText","background-color:#016AAD !important");},function(){$(this).css("cssText","background-color:#32AEFD !important");});
	$(".icon-bar").css("cssText","background-color:#B2B2B2 !important");
}

//暗色主页面主题
function TurnDarkTheme()
{
	$("body").css("background-color","#151515");
	$("#tcs_index_header a").css("color","#6CC5FD");
	$(".navbar").css({"background-color":"#003659","border":"none"});
	$(".navbar-toggle").css("cssText","background-color:#016AAD !important;border-color:#6CC5FD !important");
	$(".navbar-toggle").mousedown(function(){$(this).css("cssText","background-color:#32AEFD !important");});
	$(".navbar-toggle").mouseup(function(){$(this).css("cssText","background-color:#016AAD !important");});
	$(".navbar-toggle").hover(function(){$(this).css("cssText","background-color:#32AEFD !important");},function(){$(this).css("cssText","background-color:#016AAD !important");});
	$(".icon-bar").css("cssText","background-color:#CECECE !important");
}

function FindCSSFunction(pageName)
{
	if(pageName == "tcs_main")
	{
		return TCSMainTheme;
	}
	else if(pageName == "tcs_about")
	{
		return TCSAboutTheme;
	}
	return undefined;
}

//Main样式
function TCSMainTheme(themeType)
{
	if(themeType == "light")
	{
		$("#tcs_main_gen").css("cssText","color:#000000");
		$("#tcs_main_hr_1").css("background-color","#1D1D1D");
		$("#tcs_main_inscription").css({"color":"#5F5F5F","background-color":"#CACACA","border-color":"#C2C2C2"});
	}
	else
	{
		$("#tcs_main_gen").css("cssText","color:#FFFFFF");
		$("#tcs_main_hr_1").css("background-color","#CCCCCC");
		$("#tcs_main_inscription").css({"color":"#D4D4D4","background-color":"#858585","border-color":"#7C7C7C"});
	}
}

//About样式
function TCSAboutTheme(themeType)
{
	if(themeType == "light")
	{
		$("#tcs_about_gen").css("cssText","color:#000000");
		$("#tcs_about_hr_1").css("background-color","#1D1D1D");
	}
	else
	{
		$("#tcs_about_gen").css("cssText","color:#FFFFFF");
		$("#tcs_about_hr_1").css("background-color","#CCCCCC");
	}
}