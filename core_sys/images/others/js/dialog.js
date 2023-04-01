const gameStart = {
	0:'这次的旅途还愉快吗？',
	1:'列车即将到达第一个停靠点。<br>有几位要下车的旅客。',
	2:'要不要和乘务员打个招呼呢？',
	3:'留心观察一下「右上方」站名和乘客的生日。',
	4:'牢记车站的顺序，或许会有好事发生。<br>加油。',
}
const trainPassenger = {
	tippy:{
		correct:'',
		incorrect:['感谢您的到来。','我很想见到大家！','总有一天我会健健康康地回到到那木制的街道、回到Rabbit House里、去看望那些可爱的孩子们！'],
		name:'Tippy',
		second: 'Rabbit House的Master',
		birthday:'???'
	},
	maya:{
		correct:'这个车站里有宝物的味道…我头上的宝物探测器有反应了！<br>哈！？才不是呆毛！',
		incorrect:'吾~　真可惜，这个车站没有宝物的味道。',
		name:'Maya',
		second: '星际宝物猎人',
		birthday:'8/8'
	},
	aoyama:{
		correct:'找到了好的小说灵感呢。<br>看来坐上这趟列车是个很好的决定。<br>哼哼　下次再来吧~。',
		incorrect:'哼哼　不是这个车站哟。<br>我还没有构思好小说的内容。　',
		name:'Aoyama',
		second: '银河小说家',
		birthday:'10/27'
	},
	megu:{
		correct:'谢谢。<br>感觉梦到了那个木制的街道…。<br>啊嘞　难道说这是梦吗？',
		incorrect:'感觉不是这里…。<br>啊嘞　这么说起来我为什么会坐上这趟列车？',
		name:'Megu',
		second: '丧失记忆的天使',
		birthday:'11/2'
	},
	mocha:{
		correct:'谢谢。<br>对了，记得跟餐车里的面包说一下。<br>………软软糯糯的身材很适合锻炼哟。',
		incorrect:'嗯？这里不是哦内酱站吗？',
		name:'Mocha',
		second: '宇宙面包房的女王',
		birthday:'3/13'
	},
	fuyu:{
		correct:'谢谢…下次再来玩吧。<br>下次来一起尝尝我做的便当吧。',
		incorrect:'啊…不是这座车站…。<br>难道是因为来过太多次Rabbit House而被强制退场了…？',
		name:'Fuyu',
		second: '穿梭在星际里的大师',
		birthday:'1/24'
	},
	yura:{
		correct:'大家的关系也太友好了吧～。<br>我要撤啦～。',
		incorrect:'还没瞄准了～<br>不是这个车站呢～',
		name:'Yura',
		second: '「清除一切」的清洁员',
		birthday:'1/12'
	},
	elu_natsume:{
		correct:[
			"哇～看到ナツメ酱了。<br>连站台上的工作人员都和飞来飞去的鸟儿一样成双成对的。这一站真有趣。",
			"是代表幸福的青鸟！エル快来！快来抓住她！"
		],
		incorrect:[
			"就这？",
			"不是这个车站"
		],
		name:'Elu & Natsume',
		second: '旅行的双子',
		birthday:'6/15'
	},
	rin:{
		correct:'啊…已经到了吗。<br>咕…结果还是没有找到青山老师…！',
		incorrect:'',
		name:'Rin',
		second: '银河编辑者',
		birthday:'5/4'
	},
}
const gameStation = {
	taurus:{
		station:"白羊座站",
		conductor:'chiya',
		dialogue:[{"千夜":"您好！请出示一下您的车票！<br>话说回来，要不要尝一尝我们特制的印有这辆列车形象的小吃呢？"}],
		passenger:'rin',
	},
	gemini:{
		station:"双子座站",
		conductor:'syaro',
		dialogue:[{"纱路":"欢迎各位顾客来餐车点香草茶喝<br正在绝赞微笑服务中！"}],
		passenger:'elu_natsume',
	},
	capricorn:{
		station:"魔羯座站",
		conductor:'rize',
		dialogue:[{"理世":"救护室空出来了！<br>有人不舒服吗！"}],
		passenger:'yura',
	},
	aquarius:{
		station:"水瓶座站",
		conductor:'chino',
		dialogue:[{智乃:"这是本车的特色服务——手冲特调咖啡。<br>哦…如果能符合您的胃口的话就太好了…"}],
		passenger:'fuyu',
	},
	pisces:{
		station:"双鱼座站",
		conductor:'cocoa',
		dialogue:[{心爱:"请收下您的乘车纪念特产银河Stollen！<br>如果能让我摸一摸你的话就更开心了。<br>※译注：史多伦（Stollen）是德国圣诞节必备的传统面包"}],
		passenger:'mocha',
	},
	scorpio:{
		station:"天蝎座站",
		conductor:'syaro_chiya',
		dialogue:[{千夜:'有两位乘客要下车。'},{纱路:'我知道了。这辆列车就交给我吧。'}],
		passenger:['megu','aoyama'],
	},
	leo:{
		station:"狮子座站",
		conductor:'rize',
		dialogue:[{理世:"欢迎孩子们来救护室来玩，<br>这里就像托儿所一样。<br>嘛　要真是这样就好了。"}],
		passenger:'maya',
	},
	kigumi:{
		station:"木制街道站",
		conductor:'cocoa_chino',
		dialogue:[{心爱:'是我们的家！'},{智乃:'大家检查一下有没有落下什么东西？'}],
		passenger:'tippy',
	},
}
const gameEnding = {
	0:'怎么了，这里可不是我要下车的地方。',
	1:'可是如果现在停车的话，应该会有要下车的乘客吧。',
	2:'你有认真地检查过自己的车票了吗？<br>是时候从梦中清醒过来了。',
	3:'看来，你该准备下车了…还有那些孩子们。',
	4:'看那，那些孩子好像都下车了。<br>他们正在叫你呢。',
	5:'哈哈哈，在我的梦里也是这些吵吵闹闹的孩子们啊。',
	6:'下车时请注意安全。<br>这辆车就交给我吧。',
	7:'…我把这家店和那个孩子就托付给你了。',
	8:'隆宏。',	
}
const stampAnswer = {
	stamp1:"taurus",
	stamp2:"gemini",
	stamp3:"capricorn",
	stamp4:"aquarius",
	stamp5:"pisces",
	stamp6:"scorpio",
	stamp7:"leo",
}