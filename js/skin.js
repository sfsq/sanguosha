var prefix = 'https://web.sanguosha.com/220/mobile_h5/res/runtime/m/general/big/static/';
// var prefix = 'http://web.sanguosha.com/220/assets/sgspad/generalSkin/bigView/'; 
var suffix = '.png';
var wujiangId = 1;
var skinId = 0;
var url = '';
var wujiangIdStart = 1;
var wujiangIdEnd = 501;
var wujiangIdJiange = 500;
var generalMap = {};
initGeneralMap();
addOption();
changeImg();

function changeWujiangId() {
	var selId = document.getElementById("wujiangSelect");
	var newWujiangId = parseInt(selId.options[selId.options.selectedIndex].value);
	if (newWujiangId > 0 && (newWujiangId != wujiangId)) {
		skinId = 0;
		wujiangId = newWujiangId;
		changeImg();
	}
}

function getSkinUrl() {

	let skinId2 = skinId;

	if (0 < skinId2 < 10) {
		skinId2 = '0' + skinId;
	}
	url = prefix + wujiangId + skinId2 + suffix;
}

function checknumber(S) {
	var reg = /^[0-9]+.?[0-9]*$/;
	if (reg.test(S)) {
		return true;
	}
	return false;
}

function changeImg() {
	getSkinUrl();
	document.getElementById('wujiangSkin').href = url;
	document.getElementById('skin').src = url;
	document.getElementById('wujiangName').innerHTML = '当前武将名称：<font size="5" color="#f4ab00">' + (generalMap[wujiangId + ''] || '无') +
	'</font>';
	document.getElementById('wujiangId').innerHTML = '当前武将编号：<font size="5" color="#00aaff">' + wujiangId+'</font>';
	document.getElementById('skinId').innerHTML = '当前皮肤编号：<font size="5" color="#ff0000">' + skinId+'</font>';
	emptyInput();

}

function nextWujiang() {
	wujiangId++;
	skinId = 0;
	changeImg();
}

function prevWujiang() {
	if (wujiangId > 1) {
		wujiangId--;
		skinId = 0;
		changeImg();;
	} else {
		alert("没有上个武将了");
	}
}

function nextSkin() {
	skinId++;
	changeImg();
}

function prevSkin() {
	if (skinId > 0) {
		skinId--;
		changeImg();
	} else {
		alert("没有上个皮肤了");
	}

}

function emptyInput() {
	document.getElementById('searchInput1').value = '';
	document.getElementById('searchInput2').value = '';
}

function searchWujiangId() {
	let a = document.getElementById('searchInput1').value;
	if (checknumber(a)) {
		if (a > 0) {
			wujiangId = Number(a);
			changeImg();
		} else {
			alert('请输入正整数');
			emptyInput();
		}

	} else {
		alert('请输入正整数');
		emptyInput();
	}
}

function searchSkinId() {
	let b = document.getElementById('searchInput2').value;

	if (b) {
		for (let key in generalMap) {
			if (generalMap[key] == b) {
				wujiangId = Number(key);
				skinId = 0;
				changeImg();
				return;

			}
		}
		alert('未找到此武将');
		emptyInput();
	} else {
		alert('请输入武将名称');
		emptyInput();
	}

}

function addOption() {
	var obj = document.getElementById('wujiangSelect');
	for (let key in generalMap) {
		obj.options.add(new Option(generalMap[key], key));
	}
}

function initGeneralMap() {
	generalMap["1"] = "刘备";
	generalMap["2"] = "关羽";
	generalMap["3"] = "张飞";
	generalMap["4"] = "诸葛亮";
	generalMap["5"] = "赵云";
	generalMap["6"] = "马超";
	generalMap["7"] = "黄月英";
	generalMap["8"] = "孙权";
	generalMap["9"] = "甘宁";
	generalMap["10"] = "吕蒙";
	generalMap["11"] = "黄盖";
	generalMap["12"] = "周瑜";
	generalMap["13"] = "大乔";
	generalMap["14"] = "陆逊";
	generalMap["15"] = "曹操";
	generalMap["16"] = "司马懿";
	generalMap["17"] = "夏侯惇";
	generalMap["18"] = "张辽";
	generalMap["19"] = "许褚";
	generalMap["20"] = "郭嘉";
	generalMap["21"] = "甄姬";
	generalMap["22"] = "华佗";
	generalMap["23"] = "吕布";
	generalMap["24"] = "貂蝉";
	generalMap["25"] = "孙尚香";
	generalMap["26"] = "黄忠";
	generalMap["27"] = "魏延";
	generalMap["28"] = "夏侯渊";
	generalMap["29"] = "曹仁";
	generalMap["30"] = "小乔";
	generalMap["31"] = "老周泰";
	generalMap["32"] = "老张角";
	generalMap["34"] = "典韦";
	generalMap["35"] = "荀彧";
	generalMap["36"] = "庞统";
	generalMap["37"] = "卧龙";
	generalMap["38"] = "太史慈";
	generalMap["39"] = "庞德";
	generalMap["40"] = "颜良文丑";
	generalMap["41"] = "袁绍";
	generalMap["42"] = "徐晃";
	generalMap["43"] = "曹丕";
	generalMap["44"] = "孙坚";
	generalMap["45"] = "董卓";
	generalMap["46"] = "祝融";
	generalMap["47"] = "孟获";
	generalMap["48"] = "贾诩";
	generalMap["49"] = "鲁肃";
	generalMap["50"] = "张郃";
	generalMap["51"] = "邓艾";
	generalMap["52"] = "姜维";
	generalMap["53"] = "刘禅";
	generalMap["54"] = "孙策";
	generalMap["55"] = "张昭张纮";
	generalMap["56"] = "左慈";
	generalMap["57"] = "蔡文姬";
	generalMap["72"] = "伏完";
	generalMap["73"] = "刘协";
	generalMap["74"] = "灵雎";
	generalMap["100"] = "袁术";
	generalMap["101"] = "公孙瓒";
	generalMap["103"] = "SP孙尚香";
	generalMap["104"] = "杨修";
	generalMap["105"] = "SP庞德";
	generalMap["106"] = "SP关羽";
	generalMap["107"] = "SP马超";
	generalMap["108"] = "SP赵云";
	generalMap["109"] = "SP貂蝉";
	generalMap["110"] = "SP贾诩";
	generalMap["111"] = "SP曹仁";
	generalMap["112"] = "SP蔡文姬";
	generalMap["113"] = "陈琳";
	generalMap["114"] = "曹洪";
	generalMap["115"] = "关银屏";
	generalMap["116"] = "夏侯霸";
	generalMap["117"] = "大乔小乔";
	generalMap["118"] = "诸葛恪";
	generalMap["119"] = "张宝";
	generalMap["121"] = "乐进";
	generalMap["122"] = "曹昂";
	generalMap["123"] = "诸葛瑾";
	generalMap["124"] = "张星彩";
	generalMap["125"] = "祖茂";
	generalMap["126"] = "丁奉";
	generalMap["127"] = "潘凤";
	generalMap["128"] = "马良";
	generalMap["129"] = "诸葛诞";
	generalMap["130"] = "程昱";
	generalMap["131"] = "何太后";
	generalMap["135"] = "孙鲁育";
	generalMap["136"] = "文聘";
	generalMap["137"] = "孙皓";
	generalMap["139"] = "SP姜维";
	generalMap["140"] = "兀突骨";
	generalMap["151"] = "曹植";
	generalMap["152"] = "高顺";
	generalMap["153"] = "陈宫";
	generalMap["155"] = "凌统";
	generalMap["156"] = "马谡";
	generalMap["157"] = "吴国太";
	generalMap["158"] = "徐盛";
	generalMap["160"] = "于禁";
	generalMap["161"] = "张春华";
	generalMap["162"] = "曹彰";
	generalMap["164"] = "荀攸";
	generalMap["166"] = "廖化";
	generalMap["167"] = "马岱";
	generalMap["168"] = "步练师";
	generalMap["169"] = "程普";
	generalMap["170"] = "韩当";
	generalMap["171"] = "华雄";
	generalMap["172"] = "刘表";
	generalMap["173"] = "钟会";
	generalMap["174"] = "曹冲";
	generalMap["175"] = "郭淮";
	generalMap["176"] = "满宠";
	generalMap["177"] = "关平";
	generalMap["178"] = "简雍";
	generalMap["179"] = "刘封";
	generalMap["180"] = "潘璋马忠";
	generalMap["181"] = "虞翻";
	generalMap["182"] = "朱然";
	generalMap["183"] = "伏皇后";
	generalMap["184"] = "李儒";
	generalMap["185"] = "法正";
	generalMap["186"] = "徐庶";
	generalMap["187"] = "王异";
	generalMap["188"] = "关兴张苞";
	generalMap["201"] = "神关羽";
	generalMap["202"] = "神吕蒙";
	generalMap["203"] = "神周瑜";
	generalMap["204"] = "神诸葛亮";
	generalMap["205"] = "神曹操";
	generalMap["206"] = "神吕布";
	generalMap["207"] = "神赵云";
	generalMap["208"] = "神司马懿";
	generalMap["210"] = "周泰";
	generalMap["211"] = "于吉";
	generalMap["212"] = "张角";
	generalMap["214"] = "华雄";
	generalMap["215"] = "标袁术";
	generalMap["220"] = "神刘备";
	generalMap["221"] = "神陆逊";
	generalMap["222"] = "神曹丕";
	generalMap["223"] = "神甄姬";
	generalMap["224"] = "神甘宁";
	generalMap["225"] = "神张辽";
	generalMap["245"] = "张琪英";
	generalMap["299"] = "界刘备";
	generalMap["300"] = "界关羽";
	generalMap["301"] = "界张飞";
	generalMap["302"] = "界赵云";
	generalMap["303"] = "界马超";
	generalMap["304"] = "界徐庶";
	generalMap["305"] = "界甘宁";
	generalMap["306"] = "界吕蒙";
	generalMap["307"] = "界黄盖";
	generalMap["308"] = "界周瑜";
	generalMap["309"] = "界大乔";
	generalMap["310"] = "界陆逊";
	generalMap["311"] = "界曹操";
	generalMap["312"] = "界司马懿";
	generalMap["313"] = "界夏侯惇";
	generalMap["314"] = "界张辽";
	generalMap["315"] = "界许褚";
	generalMap["316"] = "界郭嘉";
	generalMap["317"] = "界李典";
	generalMap["318"] = "界华佗";
	generalMap["319"] = "界吕布";
	generalMap["320"] = "界公孙瓒";
	generalMap["321"] = "曹真";
	generalMap["322"] = "韩浩史涣";
	generalMap["323"] = "陈群";
	generalMap["324"] = "吴懿";
	generalMap["325"] = "周仓";
	generalMap["326"] = "张松";
	generalMap["327"] = "孙鲁班";
	generalMap["328"] = "朱桓";
	generalMap["329"] = "顾雍";
	generalMap["330"] = "沮授";
	generalMap["331"] = "蔡夫人";
	generalMap["332"] = "曹叡";
	generalMap["333"] = "曹休";
	generalMap["334"] = "钟繇";
	generalMap["335"] = "刘谌";
	generalMap["336"] = "夏侯氏";
	generalMap["337"] = "张嶷";
	generalMap["338"] = "孙休";
	generalMap["339"] = "朱治";
	generalMap["340"] = "全琮";
	generalMap["341"] = "公孙渊";
	generalMap["342"] = "郭图逢纪";
	generalMap["343"] = "张鲁";
	generalMap["345"] = "士燮";
	generalMap["346"] = "马云禄";
	generalMap["347"] = "蹋顿";
	generalMap["348"] = "严白虎";
	generalMap["349"] = "关索";
	generalMap["350"] = "王朗";
	generalMap["351"] = "鲍三娘";
	generalMap["353"] = "曹婴";
	generalMap["360"] = "司马朗";
	generalMap["361"] = "SP黄月英";
	generalMap["362"] = "王基";
	generalMap["363"] = "步骘";
	generalMap["364"] = "李通";
	generalMap["365"] = "糜竺";
	generalMap["366"] = "董白";
	generalMap["367"] = "赵襄";
	generalMap["368"] = "贺齐";
	generalMap["369"] = "董允";
	generalMap["370"] = "马忠";
	generalMap["371"] = "阚泽";
	generalMap["372"] = "王允";
	generalMap["373"] = "诸葛果";
	generalMap["374"] = "麴义";
	generalMap["375"] = "戏志才";
	generalMap["376"] = "孙乾";
	generalMap["377"] = "卑弥呼";
	generalMap["378"] = "刘琦";
	generalMap["379"] = "鲁芝";
	generalMap["380"] = "郭皇后";
	generalMap["381"] = "李严";
	generalMap["382"] = "孙登";
	generalMap["383"] = "刘虞";
	generalMap["384"] = "岑昏";
	generalMap["385"] = "刘资孙放";
	generalMap["386"] = "黄皓";
	generalMap["387"] = "张让";
	generalMap["388"] = "辛宪英";
	generalMap["389"] = "吴苋";
	generalMap["390"] = "徐氏";
	generalMap["391"] = "曹节";
	generalMap["392"] = "嵇康";
	generalMap["393"] = "秦宓";
	generalMap["394"] = "薛综";
	generalMap["395"] = "蔡邕";
	generalMap["400"] = "严颜";
	generalMap["401"] = "王平";
	generalMap["402"] = "陆绩";
	generalMap["403"] = "孙亮";
	generalMap["404"] = "蒯越蒯良";
	generalMap["406"] = "许攸";
	generalMap["407"] = "卢植";
	generalMap["408"] = "郝昭";
	generalMap["409"] = "陈到";
	generalMap["410"] = "诸葛瞻";
	generalMap["411"] = "周妃";
	generalMap["413"] = "毌丘俭";
	generalMap["414"] = "陆抗";
	generalMap["415"] = "张绣";
	generalMap["416"] = "司马徽";
	generalMap["417"] = "徐荣";
	generalMap["418"] = "李傕";
	generalMap["419"] = "张济";
	generalMap["420"] = "苏飞";
	generalMap["421"] = "黄权";
	generalMap["422"] = "唐咨";
	generalMap["423"] = "樊稠";
	generalMap["424"] = "郭汜";
	generalMap["426"] = "曹纯";
	generalMap["427"] = "许靖";
	generalMap["428"] = "王粲";
	generalMap["429"] = "吴庞统";
	generalMap["430"] = "袁谭袁熙";
	generalMap["431"] = "沙摩柯";
	generalMap["432"] = "吕虔";
	generalMap["440"] = "界诸葛亮";
	generalMap["441"] = "界黄月英";
	generalMap["442"] = "界孙权";
	generalMap["443"] = "界孙尚香";
	generalMap["444"] = "界甄姬";
	generalMap["445"] = "界貂蝉";
	generalMap["446"] = "界华雄";
	generalMap["447"] = "界左慈";
	generalMap["448"] = "界张角";
	generalMap["449"] = "界于吉";
	generalMap["450"] = "界袁绍";
	generalMap["451"] = "界刘禅";
	generalMap["452"] = "界孙策";
	generalMap["453"] = "界夏侯渊";
	generalMap["454"] = "界卧龙";
	generalMap["455"] = "界庞统";
	generalMap["456"] = "界魏延";
	generalMap["457"] = "界小乔";
	generalMap["458"] = "界孙坚";
	generalMap["459"] = "审配";
	generalMap["460"] = "荀谌";
	generalMap["461"] = "高览";
	generalMap["462"] = "界庞德";
	generalMap["463"] = "界太史慈";
	generalMap["465"] = "吕凯";
	generalMap["5000"] = "卞喜";
	generalMap["5001"] = "普净";
	generalMap["5002"] = "秦琪";
	generalMap["2006"] = "国战曹丕";
	generalMap["2010"] = "国战甄姬";
	generalMap["2014"] = "乐进";
	generalMap["2018"] = "国战诸葛亮";
	generalMap["2021"] = "国战黄月英";
	generalMap["2029"] = "甘夫人";
	generalMap["2034"] = "国战周瑜";
	generalMap["2036"] = "国战陆逊";
	generalMap["2039"] = "国战小乔";
	generalMap["2044"] = "丁奉";
	generalMap["2046"] = "国战吕布";
	generalMap["2047"] = "国战貂蝉";
	generalMap["2054"] = "马腾";
	generalMap["2055"] = "孔融";
	generalMap["2056"] = "纪灵";
	generalMap["2057"] = "田丰";
	generalMap["2058"] = "潘凤";
	generalMap["2059"] = "邹氏";
	generalMap["2060"] = "何太后";
	generalMap["2061"] = "蒋琬费祎";
	generalMap["2063"] = "国战徐盛";
	generalMap["2064"] = "国战马岱";
	generalMap["2065"] = "国战邓艾";
	generalMap["2066"] = "国战孙策";
	generalMap["2067"] = "国战董卓";
	generalMap["2068"] = "国战于吉";
	generalMap["2069"] = "臧霸";
	generalMap["2070"] = "糜夫人";
	generalMap["2071"] = "陈武董袭";
	generalMap["2072"] = "张任";
	generalMap["2073"] = "国战曹洪";
	generalMap["2074"] = "蒋钦";
	generalMap["2075"] = "国战姜维";
	generalMap["2076"] = "李傕郭汜";
	generalMap["2077"] = "国战荀攸";
	generalMap["2078"] = "国战沙摩柯";
	generalMap["4500"] = "秦广王";
	generalMap["4501"] = "楚江王";
	generalMap["4502"] = "宋帝王";
	generalMap["4503"] = "五官王";
	generalMap["4504"] = "阎罗王";
	generalMap["4505"] = "卞城王";
	generalMap["4506"] = "泰山王";
	generalMap["4507"] = "都市王";
	generalMap["4508"] = "平等王";
	generalMap["4509"] = "转轮王";
	generalMap["4510"] = "孟婆";
	generalMap["4511"] = "地藏王";
}
