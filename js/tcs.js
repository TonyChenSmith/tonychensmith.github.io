//全局变量 point有提示意味 https://www.worldtimebuddy.com/ 时区网站
var zh_CN_title={"tcs_main":"主页","tcs_about":"关于","tcs_404":"404"};
var gen_title={"tcs_main":"Home","tcs_about":"About","tcs_404":"404"};

var zh_CN_nav={"tcs_point":"选择页面","tcs_turn_lang":"中文","tcs_turn_home":"主页","tcs_turn_about":"关于","tcs_copyright":"Tony Chen Smith © 2019 版权所有。"};
var gen_nav={"tcs_point":"Switch page","tcs_turn_lang":"English","tcs_turn_home":"Home","tcs_turn_about":"About","tcs_copyright":"Copyright © 2019 Tony Chen Smith. All rights reserved."};

var zh_CN_page={"tcs_main":"zh_CN/tcs_main.html","tcs_about":"zh_CN/tcs_about.html","tcs_404":"zh_CN/tcs_404.html"};
var gen_page={"tcs_main":"tcs_main.html","tcs_about":"tcs_about.html","tcs_404":"tcs_404.html"};

var css_func={"tcs_main":TCSMainTheme,"tcs_about":TCSAboutTheme,"tcs_404":TCS404Theme};

var tcs_active={"page":"","themeType":"","lang":""};

var light_theme={"zh_CN":"亮色","en_US":"Light"};
var dark_theme={"zh_CN":"暗色","en_US":"Dark"};

//获得参数
function GetQueryString(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return unescape(r[2]); return null;
}

//获得页面
function LoadPage(bodyName,name,themeType,lang)
{
	$(bodyName).empty();
	if(lang == "zh_CN")
	{
		$(bodyName).load(zh_CN_page[name],function(){
			if(css_func[name] != undefined)
			{
				css_func[name](themeType);
			}
		});
	}
	else
	{
		$(bodyName).load(gen_page[name],function(response,status,xhr){
			if(css_func[name] != undefined)
			{
				css_func[name](themeType);
			}
		});
	}
}

//获得标题
function GetTitle(pageName,lang)
{
	if(lang == "zh_CN")
	{
		if(zh_CN_title[pageName]!=null)
		{
			return zh_CN_title[pageName];
		}
		else
		{
			return zh_CN_title["tcs_404"];
		}
	}
	else
	{
		if(gen_title[pageName]!=null)
		{
			return gen_title[pageName];
		}
		else
		{
			return gen_title["tcs_404"];
		}
	}
}

//事件初始化
function Init()
{
	$("#tcs_turn_theme").click(function(){
		if(tcs_active["themeType"] == "light")
		{
			tcs_active["themeType"]="dark";
			TurnDarkTheme(tcs_active["lang"]);
			css_func[tcs_active["page"]]("dark");
			ChangeHistory();
		}
		else
		{
			tcs_active["themeType"]="light";
			TurnLightTheme(tcs_active["lang"]);
			css_func[tcs_active["page"]]("light");
			ChangeHistory();
		}
		return false;
	});
				
	$("#tcs_turn_lang").click(function(){
		if(tcs_active["lang"] == "en_US")
		{
			tcs_active["lang"]="zh_CN";
			ParseParams();
			ChangeHistory();
		}
		else
		{
			tcs_active["lang"]="en_US";
			ParseParams();
			ChangeHistory();
		}
		return false;
	});
	
	$("#tcs_turn_home").click(function(){
		if(tcs_active["page"] == "tcs_main")
		{
			ChangeHistory();
		}
		else
		{
			tcs_active["page"]="tcs_main";
			ParseParams();
			PushHistory();
		}
		return false;
	});
	
	$("#tcs_turn_about").click(function(){
		if(tcs_active["page"] == "tcs_about")
		{
			ChangeHistory();
		}
		else
		{
			tcs_active["page"]="tcs_about";
			ParseParams();
			PushHistory();
		}
		return false;
	});
}

//解析参数
function ParseParams()
{
	if(tcs_active["lang"] == "zh_CN")
	{
		TurnChinese();
		var title=GetTitle(tcs_active["page"],"zh_CN");
		if(title == zh_CN_title["tcs_404"])
		{
			tcs_active["page"]="tcs_404";
		}
		$("title").text(title);
		if(tcs_active["themeType"] == "light")
		{
			TurnLightTheme("zh_CN");
			LoadPage("#tcs_content",tcs_active["page"],"light","zh_CN");
		}
		else
		{
			TurnDarkTheme("zh_CN");
			LoadPage("#tcs_content",tcs_active["page"],"dark","zh_CN");
		}
	}
	else
	{
		TurnEnglish();
		var title=GetTitle(tcs_active["page"],"en_US");
		if(title == gen_title["tcs_404"])
		{
			tcs_active["page"]="tcs_404";
		}
		$("title").text(title);
		if(tcs_active["themeType"] == "light")
		{
			TurnLightTheme("en_US");
			LoadPage("#tcs_content",tcs_active["page"],"light","en_US");
		}
		else
		{
			TurnDarkTheme("en_US");
			LoadPage("#tcs_content",tcs_active["page"],"dark","en_US");
		}
	}
}

//转中文
function TurnChinese()
{
	$("*").css("cssText","font-family:'微软雅黑', '黑体', 'sans-serif';font-size:100%");
	$("#tcs_point").text(zh_CN_nav["tcs_point"]);
	$("#tcs_turn_lang").text(zh_CN_nav["tcs_turn_lang"]);
	$("#tcs_turn_home").text(zh_CN_nav["tcs_turn_home"]);
	$("#tcs_turn_about").text(zh_CN_nav["tcs_turn_about"]);
	$("#tcs_copyright").text(zh_CN_nav["tcs_copyright"]);
}

//转英语
function TurnEnglish()
{
	$("*").css("cssText","font-family:Arial, Helvetica, sans-serif;font-size:100%");
	$("#tcs_point").text(gen_nav["tcs_point"]);
	$("#tcs_turn_lang").text(gen_nav["tcs_turn_lang"]);
	$("#tcs_turn_home").text(gen_nav["tcs_turn_home"]);
	$("#tcs_turn_about").text(gen_nav["tcs_turn_about"]);
	$("#tcs_copyright").text(gen_nav["tcs_copyright"]);
}

//提交历史记录
function PushHistory()
{
	history.pushState(null,null,"index.html?page=".concat(tcs_active["page"]).concat("&theme=").concat(tcs_active["themeType"]).concat("&lang=").concat(tcs_active["lang"]));
}

//改变历史记录
function ChangeHistory()
{
	history.replaceState(null,null,"index.html?page=".concat(tcs_active["page"]).concat("&theme=").concat(tcs_active["themeType"]).concat("&lang=").concat(tcs_active["lang"]));
}

//亮色主页面主题
function TurnLightTheme(lang)
{
	if(light_theme[lang] != null)
	{
		$("#tcs_turn_theme").text(light_theme[lang]);
	}
	else
	{
		$("#tcs_turn_theme").text(light_theme["en_US"]);
	}
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
function TurnDarkTheme(lang)
{
	if(dark_theme[lang] != null)
	{
		$("#tcs_turn_theme").text(dark_theme[lang]);
	}
	else
	{
		$("#tcs_turn_theme").text(dark_theme["en_US"]);
	}
	$("body").css("background-color","#151515");
	$("#tcs_index_header a").css("color","#6CC5FD");
	$(".navbar").css({"background-color":"#003659","border":"none"});
	$(".navbar-toggle").css("cssText","background-color:#016AAD !important;border-color:#6CC5FD !important");
	$(".navbar-toggle").mousedown(function(){$(this).css("cssText","background-color:#32AEFD !important");});
	$(".navbar-toggle").mouseup(function(){$(this).css("cssText","background-color:#016AAD !important");});
	$(".navbar-toggle").hover(function(){$(this).css("cssText","background-color:#32AEFD !important");},function(){$(this).css("cssText","background-color:#016AAD !important");});
	$(".icon-bar").css("cssText","background-color:#CECECE !important");
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
		$(".tcs_about_hr").css("background-color","#1D1D1D");
	}
	else
	{
		$("#tcs_about_gen").css("cssText","color:#FFFFFF");
		$(".tcs_about_hr").css("background-color","#CCCCCC");
	}
}

//404样式
function TCS404Theme(themeType)
{
	if(themeType == "light")
	{
		$("#tcs_404_gen").css("cssText","color:#000000");
		$("#tcs_404_hr_1").css("background-color","#1D1D1D");
	}
	else
	{
		$("#tcs_404_gen").css("cssText","color:#FFFFFF");
		$("#tcs_404_hr_1").css("background-color","#CCCCCC");
	}
}
