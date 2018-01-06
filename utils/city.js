var city = {

    province: ['-请选择-', "广西", "广东省", '北京', '天津', "河北省", "内蒙古", "辽宁省", "吉林省", "黑龙江省", "上海", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "海南省", "重庆省", "四川省", "贵州省", "云南省", "西藏自治区", "陕西省", "甘肃省", "青海省", "宁夏回族自治区", "新疆", "台湾省", "澳门", "香港", "钓鱼岛", "其他"],
    city: {
        '-请选择-': ['-请选择-'],

        "北京": ["北京"],

        "天津": ["天津"],

        "河北省": ["石家庄", "唐山", "秦皇岛", "邯郸", "邢台", "保定", "张家口", "承德", "沧州", "廊坊", "衡水"],

        "山西省": ["太原", "大同", "阳泉", "长治", "晋城", "朔州", "吕梁", "晋中", "临汾", "运城"],

        "内蒙古": ["呼和浩特", "包头", "乌海", "赤峰", "呼伦贝尔", "兴安盟", "通辽", "锡林郭勒盟", "乌兰察布盟", "伊克昭盟", "伊克昭盟", "巴彦淖尔盟", "阿拉善盟"],

        "辽宁省": ["沈阳", "大连", "鞍山", "抚顺", "本溪", "丹东", "锦州", "营口", "阜新", "辽阳", "盘锦", "铁岭", "朝阳", "葫芦岛", "其他"],

        "吉林省": ["长春", "吉林", "四平", "辽源", "通化", "白化", "松原", "白城", "延边朝鲜族自治州", "其他"],


        "黑龙江省": ["哈尔滨", "齐齐哈尔", "鹤岗", "双鸭山", "鸡西", "大庆", "伊春", "牡丹江", "佳木斯", "七台河", "黑河", "大兴安岭地区", "其他"],
        "上海省": ["上海"],

        "江苏省": ["南京", "苏州", "无锡", "常州", "镇江", "南通", "泰州", "扬州", "盐城", "连云港", "徐州", "淮安", "宿迁", "其他"],

        "安徽省": ["合肥", "芜湖", "蚌埠", "淮南", "马鞍山", "淮北", "铜陵", "舟山", "台州", "丽水", "其他"],

        "浙江省": ["杭州", "宁波", "温州", "湖州", "绍兴", "金华", "衢州", "安庆", "黄山", "滁州", "阜阳", "宿州", "巢湖", "六安", "亳州", "池州", "宣城", "其他"],

        "福建省": ["福州", "厦门", "莆田", "三明", "泉州", "漳州", "南平", "龙岩", "宁德", "其他"],

        "江西省": ["南昌", "景德镇", "萍乡", "九江", "新余", "鹰潭", "赣州", "吉安", "宜春", "抚州", "上饶", "其他"],

        "山东省": ["济南", "青岛", "淄博", "枣庄", "东营", "烟台", "潍坊", "济宁", "泰安", "威海", "日照", "莱芜", "临沂", "德州", "聊城", "滨州", "菏泽", "其他"],

        "河南省": ["郑州", "开封", "洛阳", "平顶山", "安阳", "鹤壁", "新乡", "濮阳", "许昌", "漯河", "三门峡", "南阳", "商丘", "周口", "驻马店", "焦作", "其他"],

        "湖北省": ["武汉", "黄石", "十堰", "荆州", "宜昌", "襄樊", "鄂州", "荆门", "孝感", "黄冈", "随州", "恩施土家族苗族自治州", "仙桃", "天门", "潜江", "神农架林区", "其他"],

        "湖南省": ["长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳", "常德", "张家界", "益阳", "郴州", "永州", "娄底", "池州", "湘西土家族苗族自治州", "其他"],

        "广东省": ["广州", "深圳", "东莞", "中山", "潮州", "揭阳", "云浮", "珠海", "汕头", "韶关", "佛山", "江门", "湛江", "茂名", "肇庆", "惠州", "梅州", "汕尾", "河源", "阳江", "清远"],


        "广西": ["南宁", "柳州", "桂林", "梧州", "北海", "防城港", "贵港", "玉林", "百色", "贺州", "河池", "来宾", "池州", "崇左", "其他"],

        "海南省": ["海口", "三亚", "五指山", "琼海", "儋州", "文昌", "万宁", "东方", "澄迈县", "定安县", "屯昌县", "临高县", "白沙黎族自治县", "昌江黎族自治县", "乐东黎族自治县", "陵水黎族自治县", "保亭黎族苗族自治县", "琼中黎族苗族自治县", "其他"],

        "重庆省": ["重庆"],

        "四川省": ["成都", "自贡", "攀枝花", "泸州", "德阳", "绵阳", "广元", "遂宁", "内江", "乐山", "南充", "眉山", "宜宾", "广安", "达州", "雅安", "巴中", "资阳", "阿坝藏族羌族自治州", "甘孜藏族自治州", "凉山彝族自治州", "其他"],


        "贵州省": ["贵阳", "六盘水", "遵义", "安顺", "铜仁地区", "毕节地区", "黔西南布依族苗族自治州", "黔东南苗族侗族自治州", "黔南布依族苗族自治州", "其他"],


        "云南省": ["昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "普洱", "临沧", "德宏傣族景颇族自治州", "怒江傈僳族自治州", "六安迪庆藏族自治州", "大理白族自治州", "楚雄彝族自治州", "红河哈尼族彝族自治州", "文山壮族苗族自治州", "西双版纳傣族自治州", "其他"],

        "西藏自治区": ["拉萨", "那曲地区", "昌都地区", "林芝地区", "林芝地区", "日喀则地区", "阿里地区", "其他"],


        "陕西省": ["西安", "铜川", "宝鸡", "咸阳", "渭南", "延安", "汉中", "榆林", "安康", "商洛", "其他"],


        "甘肃省": ["兰州", "嘉峪关", "金昌", "白银", "天水", "武威", "酒泉", "张掖", "庆阳", "平凉", "陇南", "临夏回族自治州", "甘南藏族自治州", "其他"],


        "青海省": ["西宁", "海东地区", "海北藏族自治州", "海南藏族自治州", "黄南藏族自治州", "果洛藏族自治州", "玉树藏族自治州", "海西蒙古族藏族自治州", "其他"],


        "宁夏回族自治区": ["银川", "石嘴山", "吴忠", "固原", "中卫", "其他"],


        "新疆": ["乌鲁木齐", "克拉玛依", "吐鲁番地区", "哈密地区", "和田地区", "阿克苏地区", "喀什地区", "克孜勒苏柯尔克孜自治州", "巴音郭楞蒙古自治州", "昌吉回族自治州", "博尔塔拉蒙古自治州", "石河子", "阿拉尔", "图木舒克", "五家渠", "伊犁哈萨克自治州", "其他"],

        "台湾省": ["台北市", "高雄市", "台北县", "桃园县", "新竹县", "苗栗县", "台中县", "彰化县", "南投县", "云林县", "嘉义县", "台南县", "高雄县", "屏东县", "宜兰县", "花莲县", "台东县", "澎湖县", "基隆市", "新竹市", "台中市", "嘉义市", "台南市", "其他"],

        "澳门": ["花地玛堂区", "圣安多尼堂区", "大堂区", "望德堂区", "风顺堂区", "嘉模堂区", "圣方济各堂区", "路凼", "其他"],

        "香港": ["中西区", "湾仔区", "东区", "南区", "深水埗区", "油尖旺区", "九龙城区", "黄大仙区", "观塘区", "北区", "大埔区", "沙田区", "西贡区", "元朗区", "屯门区", "荃湾区", "葵青区", "离岛区", "其他"],
        "钓鱼岛": ["钓鱼岛"],
        "其他": ["其他"],

    },
    district: {
        '-请选择-': ['-请选择-'],

        "北京": ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "平谷区", "怀柔区", "密云县", "延庆县"],


        "天津": ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "宁河县", "静海县", "蓟  县"],

        "石家庄": ["长安区", "桥东区", "桥西区", "新华区", "郊  区", "井陉矿区", "井陉县", "正定县", "栾城县", "行唐县", "灵寿县", "高邑县", "深泽县", "赞皇县", "无极县", "平山县", "元氏县", "赵  县", "辛集市", "藁", "晋州市", "新乐市", "鹿泉市"],

        "唐山": ["路南区", "路北区", "古冶区", "开平区", "新  区", "丰润县", "滦  县", "滦南县", "乐亭县", "迁西县", "玉田县", "唐海县", "遵化市", "丰南市", "迁安市"],

        "秦皇岛": ["海港区", "山海关区", "北戴河区", "青龙满族自治县", "昌黎县", "抚宁县", "卢龙县"],

        "邯郸": ["邯山区", "丛台区", "复兴区", "峰峰矿区", "邯郸县", "临漳县", "成安县", "大名县", "涉  县", "磁  县", "肥乡县", "永年县", "邱  县", "鸡泽县", "广平县", "馆陶县", "魏  县", "曲周县", "武安市"],

        "邢台": ["桥东区", "桥西区", "邢台县", "临城县", "内丘县", "柏乡县", "隆尧县", "任  县", "南和县", "宁晋县", "巨鹿县", "新河县", "广宗县", "平乡县", "威  县", "清河县", "临西县", "南宫市", "沙河市"],

        "保定": ["新市区", "北市区", "南市区", "满城县", "清苑县", "涞水县", "阜平县", "徐水县", "定兴县", "唐  县", "高阳县", "容城县", "涞源县", "望都县", "安新县", "易  县", "曲阳县", "蠡  县", "顺平县", "博野", "雄县", "涿州市", "定州市", "安国市", "高碑店市"],


        "张家口": ["桥东区", "桥西区", "宣化区", "下花园区", "宣化县", "张北县", "康保县", "沽源县", "尚义县", "蔚  县", "阳原县", "怀安县", "万全县", "怀来县", "涿鹿县", "赤城县", "崇礼县"],

        "承德": ["双桥区", "双滦区", "鹰手营子矿区", "承德县", "兴隆县", "平泉县", "滦平县", "隆化县", "丰宁满族自治县", "宽城满族自治县", "围场满族蒙古族自治县"],

        "沧州": ["新华区", "运河区", "沧  县", "青  县", "东光县", "海兴县", "盐山县", "肃宁县", "南皮县", "吴桥县", "献  县", "孟村回族自治县", "泊头市", "任丘市", "黄骅市", "河间市"],

        "廊坊": ["安次区", "固安县", "永清县", "香河县", "大城县", "文安县", "大厂回族自治县", "霸州市", "三河市"],

        "衡水": ["桃城区", "枣强县", "武邑县", "武强县", "饶阳县", "安平县", "故城县", "景  县", "阜城县", "冀州市", "深州市"],


        "太原": ["小店区", "迎泽区", "杏花岭区", "尖草坪区", "万柏林区", "晋源区", "清徐县", "阳曲县", "娄烦县", "古交市"],
        "大同": ["城  区", "矿  区", "南郊区", "新荣区", "阳高县", "天镇县", "广灵县", "灵丘县", "浑源县", "左云县", "大同县"],
        "阳泉": ["城  区", "矿  区", "郊  区", "平定县", "盂  县"],
        "长治": ["城  区", "郊  区", "长治县", "襄垣县", "屯留县", "平顺县", "黎城县", "壶关县", "长子县", "武乡县", "沁  县", "沁源县", "潞城市"],
        "晋城": ["城  区", "沁水县", "阳城县", "陵川县", "泽州县", "高平市"],
        "朔州": ["朔城区", "平鲁区", "山阴县", "应  县", "右玉县", "怀仁县"],
        "吕梁": ["离石区", "孝义市", "汾阳市", "文水县", "交城县", "兴  县", "临  县", "柳林县", "石楼县", "岚  县", "方山县", "中阳县", "交口县"],
        "晋中": ["榆次市", "介休市", "榆社县", "左权县", "和顺县", "昔阳县", "寿阳县", "太谷县", "祁  县", "平遥县", "灵石县"],
        "临汾": ["临汾市", "侯马市", "霍州市", "曲沃县", "翼城县", "襄汾县", "洪洞县", "古  县", "安泽县", "浮山县", "吉  县", "乡宁县", "蒲  县", "大宁县", "永和县", "隰  县", "汾西县"],
        "运城": ["运城市", "永济市", "河津市", "芮城县", "临猗县", "万荣县", "新绛县", "稷山县", "闻喜县", "夏  县", "绛  县", "平陆县", "垣曲县"],

        //  内蒙古
        "呼和浩特": ["新城区", "回民区", "玉泉区", "郊  区", "土默特左旗", "托克托县", "和林格尔县", "清水河县", "武川县"],
        "包头": ["东河区", "昆都伦区", "青山区", "石拐矿区", "白云矿区", "郊  区", "土默特右旗", "固阳县", "达尔罕茂明安联合旗"],
        "乌海": ["海勃湾区", "海南区", "乌达区"],
        "赤峰": ["红山区", "元宝山区", "松山区", "阿鲁科尔沁旗", "巴林左旗", "巴林右旗", "林西县", "克什克腾旗", "翁牛特旗", "喀喇沁旗", "宁城县", "敖汉旗"],
        "呼伦贝尔": ["海拉尔市", "满洲里市", "扎兰屯市", "牙克石市", "根河市", "额尔古纳市", "阿荣旗", "莫力达瓦达斡尔族自治旗", "鄂伦春自治旗", "鄂温克族自治旗", "新巴尔虎右旗", "新巴尔虎左旗", "陈巴尔虎旗"],
        "兴安盟": ["乌兰浩特市", "阿尔山市", "科尔沁右翼前旗", "科尔沁右翼中旗", "扎赉特旗", "突泉县"],
        "通辽": ["科尔沁区", "霍林郭勒市", "科尔沁左翼中旗", "科尔沁左翼后旗", "开鲁县", "库伦旗", "奈曼旗", "扎鲁特旗"],
        "锡林郭勒盟": ["二连浩特市", "锡林浩特市", "阿巴嘎旗", "苏尼特左旗", "苏尼特右旗", "东乌珠穆沁旗", "西乌珠穆沁旗", "太仆寺旗", "镶黄旗", "正镶白旗", "正蓝旗", "多伦县"],
        "乌兰察布盟": ["集宁市", "丰镇市", "卓资县", "化德县", "商都县", "兴和县", "凉城县", "察哈尔右翼前旗", "察哈尔右翼中旗", "察哈尔右翼后旗", "四子王旗"],
        "伊克昭盟": ["东胜市", "达拉特旗", "准格尔旗", "鄂托克前旗", "鄂托克旗", "杭锦旗", "乌审旗", "伊金霍洛旗"],
        "巴彦淖尔盟": ["临河市", "五原县", "磴口县", "乌拉特前旗", "乌拉特中旗", "乌拉特后旗", "杭锦后旗"],
        "阿拉善盟": ["阿拉善左旗", "阿拉善右旗", "额济纳旗"],

        //  辽宁

        "沈阳": ["沈河区", "皇姑区", "和平区", "大东区", "铁西区", "苏家屯区", "东陵区", "于洪区", "新民市", "法库县", "辽中县", "康平县", "新城子区", "其他"],
        "大连": ["西岗区", "中山区", "沙河口区", "甘井子区", "旅顺口区", "金州区", "瓦房店市", "普兰店市", "庄河市", "长海县", "其他"],

        "鞍山": ["铁东区", "铁西区", "立山区", "千山区", "海城市", "台安县", "岫岩满族自治县", "其他"],

        "抚顺": ["顺城区", "新抚区", "东洲区", "望花区", "抚顺县", "清原满族自治县", "新宾满族自治县", "其他"],

        "本溪": ["平山区", "明山区", "溪湖区", "南芬区", "本溪满族自治县", "桓仁满族自治县", "其他"],

        "丹东": ["振兴区", "元宝区", "振安区", "东港市", "凤城市", "宽甸满族自治县", "其他"],

        "锦州": ["太和区", "古塔区", "凌河区", "凌海市", "黑山县", "义县", "北宁市", "其他"],

        "营口": ["站前区", "西市区", "鲅鱼圈区", "老边区", "大石桥市", "盖州市", "其他"],

        "阜新": ["海州区", "新邱区", "太平区", "清河门区", "细河区", "彰武县", "阜新蒙古族自治县", "其他"],

        "辽阳": ["白塔区", "文圣区", "宏伟区", "太子河区", "弓长岭区", "灯塔市", "辽阳县", "其他"],

        "盘锦": ["双台子区", "兴隆台区", "盘山县", "大洼县", "其他"],

        "铁岭": ["银州区", "清河区", "调兵山市", "开原市", "铁岭县", "昌图县", "西丰县", "其他"],

        "朝阳": ["双塔区", "龙城区", "凌源市", "北票市", "朝阳县", "建平县", "喀喇沁左翼蒙古族自治县", "其他"],

        "葫芦岛": ["龙港区", "南票区", "连山区", "兴城市", "绥中县", "建昌县", "其他"],

        "其他": ["其他"],

        // 吉林
        "长春": ["朝阳区", "宽城区", "二道区", "南关区", "绿园区", "双阳区", "九台市", "榆树市", "德惠市", "农安县", "其他"],

        "吉林": ["船营区", "昌邑区", "龙潭区", "丰满区", "舒兰市", "桦甸市", "蛟河市", "磐石市", "永吉县", "其他"],

        "四平": ["铁西区", "铁东区", "公主岭市", "双辽市", "梨树县", "伊通满族自治县", "其他"],

        "辽源": ["龙山区", "西安区", "东辽县", "东丰县", "其他"],

        "通化": ["东昌区", "二道江区", "梅河口市", "集安市", "通化县", "辉南县", "柳河县", "其他"],

        "白山": ["八道江区", "江源区", "临江市", "靖宇县", "抚松县", "长白朝鲜族自治县", "其他"],

        "松原": ["宁江区", "乾安县", "长岭县", "扶余县", "前郭尔罗斯蒙古族自治县", "其他"],

        "白城": ["洮北区", "大安市", "洮南市", "镇赉县", "通榆县", "其他"],

        "延边朝鲜族自治州": ["延吉市", "图们市", "敦化市", "龙井市", "珲春市", "和龙市", "安图县", "汪清县", "其他"],

        "其他": ["其他"],

        // 黑龙江

        "哈尔滨": ["松北区", "道里区", "南岗区", "平房区", "香坊区", "道外区", "呼兰区", "阿城区", "双城市", "尚志市", "五常市", "宾县", "方正县", "通河县", "巴彦县", "延寿县", "木兰县", "依兰县", "其他"],

        "齐齐哈尔": ["龙沙区", "昂昂溪区", "铁锋区", "建华区", "富拉尔基区", "碾子山区", "梅里斯达斡尔族区", "讷河市", "富裕县", "拜泉县", "甘南县", "依安县", "克山县", "泰来县", "克东县", "龙江县", "其他"],

        "鹤岗": ["兴山区", "工农区", "南山区", "兴安区", "向阳区", "东山区", "萝北县", "绥滨县", "其他"],

        "双鸭山": ["尖山区", "岭东区", "四方台区", "宝山区", "集贤县", "宝清县", "友谊县", "饶河县", "其他"],

        "鸡西": ["鸡冠区", "恒山区", "城子河区", "滴道区", "梨树区", "麻山区", "密山市", "虎林市", "鸡东县", "其他"],

        "大庆": ["萨尔图区", "红岗区", "龙凤区", "让胡路区", "大同区", "林甸县", "肇州县", "肇源县", "杜尔伯特蒙古族自治县", "其他"],

        "伊春": ["伊春区", "带岭区", "南岔区", "金山屯区", "西林区", "美溪区", "乌马河区", "翠峦区", "友好区", "上甘岭区", "五营区", "红星区", "新青区", "汤旺河区", "乌伊岭区", "铁力市", "嘉荫县", "其他"],

        "牡丹江": ["爱民区", "东安区", "阳明区", "西安区", "绥芬河市", "宁安市", "海林市", "穆棱市", "林口县", "东宁县", "其他"],

        "佳木斯": ["向阳区", "前进区", "东风区", "郊区", "同江市", "富锦市", "桦川县", "抚远县", "桦南县", "汤原县", "其他"],

        "七台河": ["桃山区", "新兴区", "茄子河区", "勃利县", "其他"],

        "黑河": ["爱辉区", "北安市", "五大连池市", "逊克县", "嫩江县", "孙吴县", "其他"],

        "绥化": ["北林区", "安达市", "肇东市", "海伦市", "绥棱县", "兰西县", "明水县", "青冈县", "庆安县", "望奎县", "其他"],

        "大兴安岭地区": ["呼玛县", "塔河县", "漠河县", "大兴安岭辖区", "其他"],

        "其他": ["其他"],

        // 上海

        "上海": ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "宝山区", "闵行区", "嘉定区", "松江区", "金山区", "青浦区", "南汇区", "奉贤区", "浦东新区", "崇明县", "其他"],

        // 江苏
        "南京": ["玄武区", "白下区", "秦淮区", "建邺区", "鼓楼区", "下关区", "栖霞区", "雨花台区", "浦口区", "江宁区", "六合区", "溧水县", "高淳县", "其他"],

        "苏州": ["金阊区", "平江区", "沧浪区", "虎丘区", "吴中区", "相城区", "常熟市", "张家港市", "昆山市", "吴江市", "太仓市", "其他"],

        "无锡": ["崇安区", "南长区", "北塘区", "滨湖区", "锡山区", "惠山区", "江阴市", "宜兴市", "其他"],

        "常州": ["钟楼区", "天宁区", "戚墅堰区", "新北区", "武进区", "金坛市", "溧阳市", "其他"],

        "镇江": ["京口区", "润州区", "丹徒区", "丹阳市", "扬中市", "句容市", "其他"],

        "南通": ["崇川区", "港闸区", "通州市", "如皋市", "海门市", "启东市", "海安县", "如东县", "其他"],

        "泰州": ["海陵区", "高港区", "姜堰市", "泰兴市", "靖江市", "兴化市", "其他"],

        "扬州": ["广陵区", "维扬区", "邗江区", "江都市", "仪征市", "高邮市", "宝应县", "其他"],

        "盐城": ["亭湖区", "盐都区", "大丰市", "东台市", "建湖县", "射阳县", "阜宁县", "滨海县", "响水县", "其他"],

        "连云港": ["新浦区", "海州区", "连云区", "东海县", "灌云县", "赣榆县", "灌南县", "其他"],

        "徐州": ["云龙区", "鼓楼区", "九里区", "泉山区", "贾汪区", "邳州市", "新沂市", "铜山县", "睢宁县", "沛县", "丰县", "其他"],

        "淮安": ["清河区", "清浦区", "楚州区", "淮阴区", "涟水县", "洪泽县", "金湖县", "盱眙县", "其他"],

        "宿迁": ["宿城区", "宿豫区", "沭阳县", "泗阳县", "泗洪县", "其他"],

        "其他": ["其他"],

        // 浙江
        "杭州": ["拱墅区", "西湖区", "上城区", "下城区", "江干区", "滨江区", "余杭区", "萧山区", "建德市", "富阳市", "临安市", "桐庐县", "淳安县", "其他"],

        "宁波": ["海曙区", "江东区", "江北区", "镇海区", "北仑区", "鄞州区", "余姚市", "慈溪市", "奉化市", "宁海县", "象山县", "其他"],

        "温州": ["鹿城区", "龙湾区", "瓯海区", "瑞安市", "乐清市", "永嘉县", "洞头县", "平阳县", "苍南县", "文成县", "泰顺县", "其他"],

        "嘉兴": ["秀城区", "秀洲区", "海宁市", "平湖市", "桐乡市", "嘉善县", "海盐县", "其他"],

        "湖州": ["吴兴区", "南浔区", "长兴县", "德清县", "安吉县", "其他"],

        "绍兴": ["越城区", "诸暨市", "上虞市", "嵊州市", "绍兴县", "新昌县", "其他"],

        "金华": ["婺城区", "金东区", "兰溪市", "义乌市", "东阳市", "永康市", "武义县", "浦江县", "磐安县", "其他"],

        "衢州": ["柯城区", "衢江区", "江山市", "龙游县", "常山县", "开化县", "其他"],

        "舟山": ["定海区", "普陀区", "岱山县", "嵊泗县", "其他"],

        "台州": ["椒江区", "黄岩区", "路桥区", "临海市", "温岭市", "玉环县", "天台县", "仙居县", "三门县", "其他"],

        "丽水": ["莲都区", "龙泉市", "缙云县", "青田县", "云和县", "遂昌县", "松阳县", "庆元县", "景宁畲族自治县", "其他"],

        "其他": ["其他"],
        // 安徽
        "合肥": ["庐阳区", "瑶海区", "蜀山区", "包河区", "长丰县", "肥东县", "肥西县", "其他"],

        "芜湖": ["镜湖区", "弋江区", "鸠江区", "三山区", "芜湖县", "南陵县", "繁昌县", "其他"],

        "蚌埠": ["蚌山区", "龙子湖区", "禹会区", "淮上区", "怀远县", "固镇县", "五河县", "其他"],

        "淮南": ["田家庵区", "大通区", "谢家集区", "八公山区", "潘集区", "凤台县", "其他"],

        "马鞍山": ["雨山区", "花山区", "金家庄区", "当涂县", "其他"],

        "淮北": ["相山区", "杜集区", "烈山区", "濉溪县", "其他"],

        "铜陵": ["铜官山区", "狮子山区", "郊区", "铜陵县", "其他"],

        "安庆": ["迎江区", "大观区", "宜秀区", "桐城市", "宿松县", "枞阳县", "太湖县", "怀宁县", "岳西县", "望江县", "潜山县", "其他"],

        "黄山": ["屯溪区", "黄山区", "徽州区", "休宁县", "歙县", "祁门县", "黟县", "其他"],

        "滁州": ["琅琊区", "南谯区", "天长市", "明光市", "全椒县", "来安县", "定远县", "凤阳县", "其他"],

        "阜阳": ["颍州区", "颍东区", "颍泉区", "界首市", "临泉县", "颍上县", "阜南县", "太和县", "其他"],

        "宿州": ["埇桥区", "萧县", "泗县", "砀山县", "灵璧县", "其他"],

        "巢湖": ["居巢区", "含山县", "无为县", "庐江县", "和县", "其他"],

        "六安": ["金安区", "裕安区", "寿县", "霍山县", "霍邱县", "舒城县", "金寨县", "其他"],

        "亳州": ["谯城区", "利辛县", "涡阳县", "蒙城县", "其他"],

        "池州": ["贵池区", "东至县", "石台县", "青阳县", "其他"],

        "宣城": ["宣州区", "宁国市", "广德县", "郎溪县", "泾县", "旌德县", "绩溪县", "其他"],

        "其他": ["其他"],

        // 福建
        "福州": ["鼓楼区", "台江区", "仓山区", "马尾区", "晋安区", "福清市", "长乐市", "闽侯县", "闽清县", "永泰县", "连江县", "罗源县", "平潭县", "其他"],

        "厦门": ["思明区", "海沧区", "湖里区", "集美区", "同安区", "翔安区", "其他"],

        "莆田": ["城厢区", "涵江区", "荔城区", "秀屿区", "仙游县", "其他"],

        "三明": ["梅列区", "三元区", "永安市", "明溪县", "将乐县", "大田县", "宁化县", "建宁县", "沙县", "尤溪县", "清流县", "泰宁县", "其他"],

        "泉州": ["鲤城区", "丰泽区", "洛江区", "泉港区", "石狮市", "晋江市", "南安市", "惠安县", "永春县", "安溪县", "德化县", "金门县", "其他"],

        "漳州": ["芗城区", "龙文区", "龙海市", "平和县", "南靖县", "诏安县", "漳浦县", "华安县", "东山县", "长泰县", "云霄县", "其他"],

        "南平": ["延平区", "建瓯市", "邵武市", "武夷山市", "建阳市", "松溪县", "光泽县", "顺昌县", "浦城县", "政和县", "其他"],

        "龙岩": ["新罗区", "漳平市", "长汀县", "武平县", "上杭县", "永定县", "连城县", "其他"],

        "宁德": ["蕉城区", "福安市", "福鼎市", "寿宁县", "霞浦县", "柘荣县", "屏南县", "古田县", "周宁县", "其他"],

        "其他": ["其他"],
        // 江西
        "南昌": ["东湖区", "西湖区", "青云谱区", "湾里区", "青山湖区", "新建县", "南昌县", "进贤县", "安义县", "其他"],

        "景德镇": ["珠山区", "昌江区", "乐平市", "浮梁县", "其他"],

        "萍乡": ["安源区", "湘东区", "莲花县", "上栗县", "芦溪县", "其他"],

        "九江": ["浔阳区", "庐山区", "瑞昌市", "九江县", "星子县", "武宁县", "彭泽县", "永修县", "修水县", "湖口县", "德安县", "都昌县", "其他"],

        "新余": ["渝水区", "分宜县", "其他"],

        "鹰潭": ["月湖区", "贵溪市", "余江县", "其他"],

        "赣州": ["章贡区", "瑞金市", "南康市", "石城县", "安远县", "赣县", "宁都县", "寻乌县", "兴国县", "定南县", "上犹县", "于都县", "龙南县", "崇义县", "信丰县", "全南县", "大余县", "会昌县", "其他"],

        "吉安": ["吉州区", "青原区", "井冈山市", "吉安县", "永丰县", "永新县", "新干县", "泰和县", "峡江县", "遂川县", "安福县", "吉水县", "万安县", "其他"],

        "宜春": ["袁州区", "丰城市", "樟树市", "高安市", "铜鼓县", "靖安县", "宜丰县", "奉新县", "万载县", "上高县", "其他"],

        "抚州": ["临川区", "南丰县", "乐安县", "金溪县", "南城县", "东乡县", "资溪县", "宜黄县", "广昌县", "黎川县", "崇仁县", "其他"],

        "上饶": ["信州区", "德兴市", "上饶县", "广丰县", "鄱阳县", "婺源县", "铅山县", "余干县", "横峰县", "弋阳县", "玉山县", "万年县", "其他"],

        "其他": ["其他"],


        // 山东
        "济南": ["市中区", "历下区", "天桥区", "槐荫区", "历城区", "长清区", "章丘市", "平阴县", "济阳县", "商河县", "其他"],

        "青岛": ["市南区", "市北区", "城阳区", "四方区", "李沧区", "黄岛区", "崂山区", "胶南市", "胶州市", "平度市", "莱西市", "即墨市", "其他"],

        "淄博": ["张店区", "临淄区", "淄川区", "博山区", "周村区", "桓台县", "高青县", "沂源县", "其他"],

        "枣庄": ["市中区", "山亭区", "峄城区", "台儿庄区", "薛城区", "滕州市", "其他"],

        "东营": ["东营区", "河口区", "垦利县", "广饶县", "利津县", "其他"],

        "烟台": ["芝罘区", "福山区", "牟平区", "莱山区", "龙口市", "莱阳市", "莱州市", "招远市", "蓬莱市", "栖霞市", "海阳市", "长岛县", "其他"],

        "潍坊": ["潍城区", "寒亭区", "坊子区", "奎文区", "青州市", "诸城市", "寿光市", "安丘市", "高密市", "昌邑市", "昌乐县", "临朐县", "其他"],

        "济宁": ["市中区", "任城区", "曲阜市", "兖州市", "邹城市", "鱼台县", "金乡县", "嘉祥县", "微山县", "汶上县", "泗水县", "梁山县", "其他"],

        "泰安": ["泰山区", "岱岳区", "新泰市", "肥城市", "宁阳县", "东平县", "其他"],

        "威海": ["环翠区", "乳山市", "文登市", "荣成市", "其他"],

        "日照": ["东港区", "岚山区", "五莲县", "莒县", "其他"],

        "莱芜": ["莱城区", "钢城区", "其他"],

        "临沂": ["兰山区", "罗庄区", "河东区", "沂南县", "郯城县", "沂水县", "苍山县", "费县", "平邑县", "莒南县", "蒙阴县", "临沭县", "其他"],

        "德州": ["德城区", "乐陵市", "禹城市", "陵县", "宁津县", "齐河县", "武城县", "庆云县", "平原县", "夏津县", "临邑县", "其他"],

        "聊城": ["东昌府区", "临清市", "高唐县", "阳谷县", "茌平县", "莘县", "东阿县", "冠县", "其他"],

        "滨州": ["滨城区", "邹平县", "沾化县", "惠民县", "博兴县", "阳信县", "无棣县", "其他"],

        "菏泽": ["牡丹区", "鄄城县", "单县", "郓城县", "曹县", "定陶县", "巨野县", "东明县", "成武县", "其他"],

        "其他": ["其他"],
        // 河南
        "郑州": ["中原区", "金水区", "二七区", "管城回族区", "上街区", "惠济区", "巩义市", "新郑市", "新密市", "登封市", "荥阳市", "中牟县", "其他"],

        "开封": ["鼓楼区", "龙亭区", "顺河回族区", "禹王台区", "金明区", "开封县", "尉氏县", "兰考县", "杞县", "通许县", "其他"],

        "洛阳": ["西工区", "老城区", "涧西区", "瀍河回族区", "洛龙区", "吉利区", "偃师市", "孟津县", "汝阳县", "伊川县", "洛宁县", "嵩县", "宜阳县", "新安县", "栾川县", "其他"],

        "平顶山": ["新华区", "卫东区", "湛河区", "石龙区", "汝州市", "舞钢市", "宝丰县", "叶县", "郏县", "鲁山县", "其他"],

        "安阳": ["北关区", "文峰区", "殷都区", "龙安区", "林州市", "安阳县", "滑县", "内黄县", "汤阴县", "其他"],

        "鹤壁": ["淇滨区", "山城区", "鹤山区", "浚县", "淇县", "其他"],

        "新乡": ["卫滨区", "红旗区", "凤泉区", "牧野区", "卫辉市", "辉县市", "新乡县", "获嘉县", "原阳县", "长垣县", "封丘县", "延津县", "其他"],

        "焦作": ["解放区", "中站区", "马村区", "山阳区", "沁阳市", "孟州市", "修武县", "温县", "武陟县", "博爱县", "其他"],

        "濮阳": ["华龙区", "濮阳县", "南乐县", "台前县", "清丰县", "范县", "其他"],

        "许昌": ["魏都区", "禹州市", "长葛市", "许昌县", "鄢陵县", "襄城县", "其他"],

        "漯河": ["源汇区", "郾城区", "召陵区", "临颍县", "舞阳县", "其他"],

        "三门峡": ["湖滨区", "义马市", "灵宝市", "渑池县", "卢氏县", "陕县", "其他"],

        "南阳": ["卧龙区", "宛城区", "邓州市", "桐柏县", "方城县", "淅川县", "镇平县", "唐河县", "南召县", "内乡县", "新野县", "社旗县", "西峡县", "其他"],

        "商丘": ["梁园区", "睢阳区", "永城市", "宁陵县", "虞城县", "民权县", "夏邑县", "柘城县", "睢县", "其他"],

        "信阳": ["浉河区", "平桥区", "潢川县", "淮滨县", "息县", "新县", "商城县", "固始县", "罗山县", "光山县", "其他"],

        "周口": ["川汇区", "项城市", "商水县", "淮阳县", "太康县", "鹿邑县", "西华县", "扶沟县", "沈丘县", "郸城县", "其他"],

        "驻马店": ["驿城区", "确山县", "新蔡县", "上蔡县", "西平县", "泌阳县", "平舆县", "汝南县", "遂平县", "正阳县", "其他"],

        "焦作": ["济源市", "其他"],

        "其他": ["其他"],

        // 湖北
        "武汉": ["江岸区", "武昌区", "江汉区", "硚口区", "汉阳区", "青山区", "洪山区", "东西湖区", "汉南区", "蔡甸区", "江夏区", "黄陂区", "新洲区", "其他"],

        "黄石": ["黄石港区", "西塞山区", "下陆区", "铁山区", "大冶市", "阳新县", "其他"],

        "十堰": ["张湾区", "茅箭区", "丹江口市", "郧县", "竹山县", "房县", "郧西县", "竹溪县", "其他"],

        "荆州": ["沙市区", "荆州区", "洪湖市", "石首市", "松滋市", "监利县", "公安县", "江陵县", "其他"],

        "宜昌": ["西陵区", "伍家岗区", "点军区", "猇亭区", "夷陵区", "宜都市", "当阳市", "枝江市", "秭归县", "远安县", "兴山县", "五峰土家族自治县", "长阳土家族自治县", "其他"],

        "襄樊": ["襄城区", "樊城区", "襄阳区", "老河口市", "枣阳市", "宜城市", "南漳县", "谷城县", "保康县", "其他"],

        "鄂州": ["鄂城区", "华容区", "梁子湖区", "其他"],

        "荆门": ["东宝区", "掇刀区", "钟祥市", "京山县", "沙洋县", "其他"],

        "孝感": ["孝南区", "应城市", "安陆市", "汉川市", "云梦县", "大悟县", "孝昌县", "其他"],

        "黄冈": ["黄州区", "麻城市", "武穴市", "红安县", "罗田县", "浠水县", "蕲春县", "黄梅县", "英山县", "团风县", "其他"],

        "咸宁": ["咸安区", "赤壁市", "嘉鱼县", "通山县", "崇阳县", "通城县", "其他"],

        "随州": ["曾都区", "广水市", "其他"],

        "恩施土家族苗族自治州": ["恩施市", "利川市", "建始县", "来凤县", "巴东县", "鹤峰县", "宣恩县", "咸丰县", "其他"],

        "仙桃": ["仙桃"],

        "天门": ["天门"],

        "潜江": ["潜江"],

        "神农架林区": ["神农架林区"],

        "其他": ["其他"],
        // 湖南

        "长沙": ["岳麓区", "芙蓉区", "天心区", "开福区", "雨花区", "浏阳市", "长沙县", "望城县", "宁乡县", "其他"],

        "株洲": ["天元区", "荷塘区", "芦淞区", "石峰区", "醴陵市", "株洲县", "炎陵县", "茶陵县", "攸县", "其他"],

        "湘潭": ["岳塘区", "雨湖区", "湘乡市", "韶山市", "湘潭县", "其他"],

        "衡阳": ["雁峰区", "珠晖区", "石鼓区", "蒸湘区", "南岳区", "耒阳市", "常宁市", "衡阳县", "衡东县", "衡山县", "衡南县", "祁东县", "其他"],

        "邵阳": ["双清区", "大祥区", "北塔区", "武冈市", "邵东县", "洞口县", "新邵县", "绥宁县", "新宁县", "邵阳县", "隆回县", "城步苗族自治县", "其他"],

        "岳阳": ["岳阳楼区", "云溪区", "君山区", "临湘市", "汨罗市", "岳阳县", "湘阴县", "平江县", "华容县", "其他"],

        "常德": ["武陵区", "鼎城区", "津市市", "澧县", "临澧县", "桃源县", "汉寿县", "安乡县", "石门县", "其他"],

        "张家界": ["永定区", "武陵源区", "慈利县", "桑植县", "其他"],

        "益阳": ["赫山区", "资阳区", "沅江市", "桃江县", "南县", "安化县", "其他"],

        "郴州": ["北湖区", "苏仙区", "资兴市", "宜章县", "汝城县", "安仁县", "嘉禾县", "临武县", "桂东县", "永兴县", "桂阳县", "其他"],

        "永州": ["冷水滩区", "零陵区", "祁阳县", "蓝山县", "宁远县", "新田县", "东安县", "江永县", "道县", "双牌县", "江华瑶族自治县", "其他"],

        "怀化": ["鹤城区", "洪江市", "会同县", "沅陵县", "辰溪县", "溆浦县", "中方县", "新晃侗族自治县", "芷江侗族自治县", "通道侗族自治县", "靖州苗族侗族自治县", "麻阳苗族自治县", "其他"],

        "娄底": ["娄星区", "冷水江市", "涟源市", "新化县", "双峰县", "其他"],

        "湘西土家族苗族自治州": ["吉首市", "古丈县", "龙山县", "永顺县", "凤凰县", "泸溪县", "保靖县", "花垣县", "其他"],

        "其他": ["其他"],

        // 广东
        "广州": ["越秀区", "荔湾区", "海珠区", "天河区", "白云区", "黄埔区", "番禺区", "花都区", "南沙区", "萝岗区", "增城市", "从化市", "其他"],

        "深圳": ["福田区", "罗湖区", "南山区", "宝安区", "龙岗区", "盐田区", "其他"],

        "东莞": ["莞城", "常平", "塘厦", "塘厦", "塘厦", "其他"],

        "中山": ["中山"],

        "潮州": ["湘桥区", "潮安县", "饶平县", "其他"],

        "揭阳": ["榕城区", "揭东县", "揭西县", "惠来县", "普宁市", "其他"],

        "云浮": ["云城区", "新兴县", "郁南县", "云安县", "罗定市", "其他"],

        "珠海": ["香洲区", "斗门区", "金湾区", "其他"],

        "汕头": ["金平区", "濠江区", "龙湖区", "潮阳区", "潮南区", "澄海区", "南澳县", "其他"],

        "韶关": ["浈江区", "武江区", "曲江区", "乐昌市", "南雄市", "始兴县", "仁化县", "翁源县", "新丰县", "乳源瑶族自治县", "其他"],

        "佛山": ["禅城区", "南海区", "顺德区", "三水区", "高明区", "其他"],

        "江门": ["蓬江区", "江海区", "新会区", "恩平市", "台山市", "开平市", "鹤山市", "其他"],

        "湛江": ["赤坎区", "霞山区", "坡头区", "麻章区", "吴川市", "廉江市", "雷州市", "遂溪县", "徐闻县", "其他"],

        "茂名": ["茂南区", "茂港区", "化州市", "信宜市", "高州市", "电白县", "其他"],

        "肇庆": ["端州区", "鼎湖区", "高要市", "四会市", "广宁县", "怀集县", "封开县", "德庆县", "其他"],

        "惠州": ["惠城区", "惠阳区", "博罗县", "惠东县", "龙门县", "其他"],

        "梅州": ["梅江区", "兴宁市", "梅县", "大埔县", "丰顺县", "五华县", "平远县", "蕉岭县", "其他"],

        "汕尾": ["城区", "陆丰市", "海丰县", "陆河县", "其他"],

        "河源": ["源城区", "紫金县", "龙川县", "连平县", "和平县", "东源县", "其他"],

        "阳江": ["江城区", "阳春市", "阳西县", "阳东县", "其他"],

        "清远": ["清城区", "英德市", "连州市", "佛冈县", "阳山县", "清新县", "连山壮族瑶族自治县", "连南瑶族自治县", "其他"],

        // 广西
        "南宁": ["武鸣县", "青秀区", "兴宁区", "西乡塘区", "良庆区", "江南区", "邕宁区", "隆安县", "马山县", "上林县", "宾阳县", "横县", "其他"],

        "柳州": ["城中区", "鱼峰区", "柳北区", "柳南区", "柳江县", "柳城县", "鹿寨县", "融安县", "融水苗族自治县", "三江侗族自治县", "其他"],

        "桂林": ["象山区", "秀峰区", "叠彩区", "七星区", "雁山区", "阳朔县", "临桂县", "灵川县", "全州县", "平乐县", "兴安县", "灌阳县", "荔浦县", "资源县", "永福县", "龙胜各族自治县", "恭城瑶族自治县", "其他"],

        "梧州": ["万秀区", "蝶山区", "长洲区", "岑溪市", "苍梧县", "藤县", "蒙山县", "其他"],

        "北海": ["海城区", "银海区", "铁山港区", "合浦县", "其他"],

        "防城港": ["港口区", "防城区", "东兴市", "上思县", "其他"],

        "钦州": ["钦南区", "钦北区", "灵山县", "浦北县", "其他"],

        "贵港": ["港北区", "港南区", "覃塘区", "桂平市", "平南县", "其他"],

        "玉林": ["玉州区", "北流市", "容县", "陆川县", "博白县", "兴业县", "其他"],

        "百色": ["右江区", "凌云县", "平果县", "西林县", "乐业县", "德保县", "田林县", "田阳县", "靖西县", "田东县", "那坡县", "隆林各族自治县", "其他"],

        "贺州": ["八步区", "钟山县", "昭平县", "富川瑶族自治县", "其他"],

        "河池": ["金城江区", "宜州市", "天峨县", "凤山县", "南丹县", "东兰县", "都安瑶族自治县", "罗城仫佬族自治县", "巴马瑶族自治县", "环江毛南族自治县", "大化瑶族自治县", "其他"],

        "来宾": ["兴宾区", "合山市", "象州县", "武宣县", "忻城县", "金秀瑶族自治县", "其他"],

        "崇左": ["江州区", "凭祥市", "宁明县", "扶绥县", "龙州县", "大新县", "天等县", "其他"],

        "其他": ["其他"],

        // 海南
        "海口": ["龙华区", "秀英区", "琼山区", "美兰区", "其他"],

        "三亚": ["三亚市", "其他"],

        "五指山": ["五指山"],

        "琼海": ["琼海"],

        "儋州": ["儋州"],

        "文昌": ["文昌"],

        "万宁": ["万宁"],

        "东方": ["东方"],

        "澄迈县": ["澄迈县"],

        "定安县": ["定安县"],

        "屯昌县": ["屯昌县"],

        "临高县": ["临高县"],

        "白沙黎族自治县": ["白沙黎族自治县"],

        "昌江黎族自治县": ["昌江黎族自治县"],

        "乐东黎族自治县": ["乐东黎族自治县"],

        "陵水黎族自治县": ["陵水黎族自治县"],

        "保亭黎族苗族自治县": ["保亭黎族苗族自治县"],

        "琼中黎族苗族自治县": ["琼中黎族苗族自治县"],

        "其他": ["其他"],

        // 重庆

        "重庆": ["渝中区", "大渡口区", "江北区", "南岸区", "北碚区", "渝北区", "巴南区", "长寿区", "双桥区", "沙坪坝区", "万盛区", "万州区", "涪陵区", "黔江区", "永川区", "合川区", "江津区", "九龙坡区", "南川区", "綦江县", "潼南县", "荣昌县", "璧山县", "大足县", "铜梁县", "梁平县", "开县", "忠县", "城口县", "垫江县", "武隆县", "丰都县", "奉节县", "云阳县", "巫溪县", "巫山县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县", "其他"],

        // 四川
        "成都": ["青羊区", "锦江区", "金牛区", "武侯区", "成华区", "龙泉驿区", "青白江区", "新都区", "温江区", "都江堰市", "彭州市", "邛崃市", "崇州市", "金堂县", "郫县", "新津县", "双流县", "蒲江县", "大邑县", "其他"],

        "自贡": ["大安区", "自流井区", "贡井区", "沿滩区", "荣县", "富顺县", "其他"],

        "攀枝花": ["仁和区", "米易县", "盐边县", "东区", "西区", "其他"],

        "泸州": ["江阳区", "纳溪区", "龙马潭区", "泸县", "合江县", "叙永县", "古蔺县", "其他"],

        "德阳": ["旌阳区", "广汉市", "什邡市", "绵竹市", "罗江县", "中江县", "其他"],

        "绵阳": ["涪城区", "游仙区", "江油市", "盐亭县", "三台县", "平武县", "安县", "梓潼县", "北川羌族自治县", "其他"],

        "广元": ["元坝区", "朝天区", "青川县", "旺苍县", "剑阁县", "苍溪县", "市中区", "其他"],

        "遂宁": ["船山区", "安居区", "射洪县", "蓬溪县", "大英县", "其他"],

        "内江": ["市中区", "东兴区", "资中县", "隆昌县", "威远县", "其他"],

        "乐山": ["市中区", "五通桥区", "沙湾区", "金口河区", "峨眉山市", "夹江县", "井研县", "犍为县", "沐川县", "马边彝族自治县", "峨边彝族自治县", "其他"],

        "南充": ["顺庆区", "高坪区", "嘉陵区", "阆中市", "营山县", "蓬安县", "仪陇县", "南部县", "西充县", "其他"],

        "眉山": ["东坡区", "仁寿县", "彭山县", "洪雅县", "丹棱县", "青神县", "其他"],

        "宜宾": ["翠屏区", "宜宾县", "兴文县", "南溪县", "珙县", "长宁县", "高县", "江安县", "筠连县", "屏山县", "其他"],

        "广安": ["广安区", "华蓥市", "岳池县", "邻水县", "武胜县", "其他"],

        "达州": ["通川区", "万源市", "达县", "渠县", "宣汉县", "开江县", "大竹县", "其他"],

        "雅安": ["雨城区", "芦山县", "石棉县", "名山县", "天全县", "荥经县", "宝兴县", "汉源县", "其他"],

        "巴中": ["巴州区", "南江县", "平昌县", "通江县", "其他"],

        "资阳": ["雁江区", "简阳市", "安岳县", "乐至县", "其他"],

        "阿坝藏族羌族自治州": ["马尔康县", "九寨沟县", "红原县", "汶川县", "阿坝县", "理县", "若尔盖县", "小金县", "黑水县", "金川县", "松潘县", "壤塘县", "茂县", "其他"],

        "甘孜藏族自治州": ["康定县", "丹巴县", "炉霍县", "九龙县", "甘孜县", "雅江县", "新龙县", "道孚县", "白玉县", "理塘县", "德格县", "乡城县", "石渠县", "稻城县", "色达县", "巴塘县", "泸定县", "得荣县", "其他"],

        "凉山彝族自治州": ["西昌市", "美姑县", "昭觉县", "金阳县", "甘洛县", "布拖县", "雷波县", "普格县", "宁南县", "喜德县", "会东县", "越西县", "会理县", "盐源县", "德昌县", "冕宁县", "木里藏族自治县", "其他"],

        "其他": ["其他"],

        // 贵州
        "贵阳": ["南明区", "云岩区", "花溪区", "乌当区", "白云区", "小河区", "清镇市", "开阳县", "修文县", "息烽县", "其他"],

        "六盘水": ["钟山区", "水城县", "盘县", "六枝特区", "其他"],

        "遵义": ["红花岗区", "汇川区", "赤水市", "仁怀市", "遵义县", "绥阳县", "桐梓县", "习水县", "凤冈县", "正安县", "余庆县", "湄潭县", "道真仡佬族苗族自治县", "务川仡佬族苗族自治县", "其他"],

        "安顺": ["西秀区", "普定县", "平坝县", "镇宁布依族苗族自治县", "紫云苗族布依族自治县", "关岭布依族苗族自治县", "其他"],

        "铜仁地区": ["铜仁市", "德江县", "江口县", "思南县", "石阡县", "玉屏侗族自治县", "松桃苗族自治县", "印江土家族苗族自治县", "沿河土家族自治县", "万山特区", "其他"],

        "毕节地区": ["毕节市", "黔西县", "大方县", "织金县", "金沙县", "赫章县", "纳雍县", "威宁彝族回族苗族自治县", "其他"],

        "黔西南布依族苗族自治州": ["兴义市", "望谟县", "兴仁县", "普安县", "册亨县", "晴隆县", "贞丰县", "安龙县", "其他"],

        "黔东南苗族侗族自治州": ["凯里市", "施秉县", "从江县", "锦屏县", "镇远县", "麻江县", "台江县", "天柱县", "黄平县", "榕江县", "剑河县", "三穗县", "雷山县", "黎平县", "岑巩县", "丹寨县", "其他"],

        "黔南布依族苗族自治州": ["都匀市", "福泉市", "贵定县", "惠水县", "罗甸县", "瓮安县", "荔波县", "龙里县", "平塘县", "长顺县", "独山县", "三都水族自治县", "其他"],


        "其他": ["其他"],

        // 云南
        "昆明": ["盘龙区", "五华区", "官渡区", "西山区", "东川区", "安宁市", "呈贡县", "晋宁县", "富民县", "宜良县", "嵩明县", "石林彝族自治县", "禄劝彝族苗族自治县", "寻甸回族彝族自治县", "其他"],

        "曲靖": ["麒麟区", "宣威市", "马龙县", "沾益县", "富源县", "罗平县", "师宗县", "陆良县", "会泽县", "其他"],

        "玉溪": ["红塔区", "江川县", "澄江县", "通海县", "华宁县", "易门县", "峨山彝族自治县", "新平彝族傣族自治县", "元江哈尼族彝族傣族自治县", "其他"],

        "保山": ["隆阳区", "施甸县", "腾冲县", "龙陵县", "昌宁县", "其他"],

        "昭通": ["昭阳区", "鲁甸县", "巧家县", "盐津县", "大关县", "永善县", "绥江县", "镇雄县", "彝良县", "威信县", "水富县", "其他"],

        "丽江": ["古城区", "永胜县", "华坪县", "玉龙纳西族自治县", "宁蒗彝族自治县", "其他"],

        "普洱": ["思茅区", "普洱哈尼族彝族自治县", "墨江哈尼族自治县", "景东彝族自治县", "景谷傣族彝族自治县", "镇沅彝族哈尼族拉祜族自治县", "江城哈尼族彝族自治县", "孟连傣族拉祜族佤族自治县", "澜沧拉祜族自治县", "西盟佤族自治县", "其他"],

        "临沧": ["临翔区", "凤庆县", "云县", "永德县", "镇康县", "双江拉祜族佤族布朗族傣族自治县", "耿马傣族佤族自治县", "沧源佤族自治县", "其他"],

        "德宏傣族景颇族自治州": ["潞西市", "瑞丽市", "梁河县", "盈江县", "陇川县", "其他"],

        "怒江傈僳族自治州": ["泸水县", "福贡县", "贡山独龙族怒族自治县", "兰坪白族普米族自治县", "其他"],

        "迪庆藏族自治州": ["香格里拉县", "德钦县", "维西傈僳族自治县", "其他"],

        "大理白族自治州": ["大理市", "祥云县", "宾川县", "弥渡县", "永平县", "云龙县", "洱源县", "剑川县", "鹤庆县", "漾濞彝族自治县", "南涧彝族自治县", "巍山彝族回族自治县", "其他"],

        "楚雄彝族自治州": ["楚雄市", "双柏县", "牟定县", "南华县", "姚安县", "大姚县", "永仁县", "元谋县", "武定县", "禄丰县", "其他"],

        "红河哈尼族彝族自治州": ["蒙自县", "个旧市", "开远市", "绿春县", "建水县", "石屏县", "弥勒县", "泸西县", "元阳县", "红河县", "金平苗族瑶族傣族自治县", "河口瑶族自治县", "屏边苗族自治县", "其他"],

        "文山壮族苗族自治州": ["文山县", "砚山县", "西畴县", "麻栗坡县", "马关县", "丘北县", "广南县", "富宁县", "其他"],

        "西双版纳傣族自治州": ["景洪市", "勐海县", "勐腊县", "其他"],

        "其他": ["其他"],

        // 西藏

        "拉萨": ["城关区", "林周县", "当雄县", "尼木县", "曲水县", "堆龙德庆县", "达孜县", "墨竹工卡县", "其他"],

        "那曲地区": ["那曲县", "嘉黎县", "比如县", "聂荣县", "安多县", "申扎县", "索县", "班戈县", "巴青县", "尼玛县", "其他"],

        "昌都地区": ["昌都县", "江达县", "贡觉县", "类乌齐县", "丁青县", "察雅县", "八宿县", "左贡县", "芒康县", "洛隆县", "边坝县", "其他"],

        "林芝地区": ["林芝县", "工布江达县", "米林县", "墨脱县", "波密县", "察隅县", "朗县", "其他"],

        "山南地区": ["乃东县", "扎囊县", "贡嘎县", "桑日县", "琼结县", "曲松县", "措美县", "洛扎县", "加查县", "隆子县", "错那县", "浪卡子县", "其他"],

        "日喀则地区": ["日喀则市", "南木林县", "江孜县", "定日县", "萨迦县", "拉孜县", "昂仁县", "谢通门县", "白朗县", "仁布县", "康马县", "定结县", "仲巴县", "亚东县", "吉隆县", "聂拉木县", "萨嘎县", "岗巴县", "其他"],

        "阿里地区": ["噶尔县", "普兰县", "札达县", "日土县", "革吉县", "改则县", "措勤县", "其他"],

        "其他": ["其他"],

        // 陕西


        "西安": ["莲湖区", "新城区", "碑林区", "雁塔区", "灞桥区", "未央区", "阎良区", "临潼区", "长安区", "高陵县", "蓝田县", "户县", "周至县", "其他"],

        "铜川": ["耀州区", "王益区", "印台区", "宜君县", "其他"],

        "宝鸡": ["渭滨区", "金台区", "陈仓区", "岐山县", "凤翔县", "陇县", "太白县", "麟游县", "扶风县", "千阳县", "眉县", "凤县", "其他"],

        "咸阳": ["秦都区", "渭城区", "杨陵区", "兴平市", "礼泉县", "泾阳县", "永寿县", "三原县", "彬县", "旬邑县", "长武县", "乾县", "武功县", "淳化县", "其他"],

        "渭南": ["临渭区", "韩城市", "华阴市", "蒲城县", "潼关县", "白水县", "澄城县", "华县", "合阳县", "富平县", "大荔县", "其他"],

        "延安": ["宝塔区", "安塞县", "洛川县", "子长县", "黄陵县", "延川县", "富县", "延长县", "甘泉县", "宜川县", "志丹县", "黄龙县", "吴起县", "其他"],

        "汉中": ["汉台区", "留坝县", "镇巴县", "城固县", "南郑县", "洋县", "宁强县", "佛坪县", "勉县", "西乡县", "略阳县", "其他"],

        "榆林": ["榆阳区", "清涧县", "绥德县", "神木县", "佳县", "府谷县", "子洲县", "靖边县", "横山县", "米脂县", "吴堡县", "定边县", "其他"],

        "安康": ["汉滨区", "紫阳县", "岚皋县", "旬阳县", "镇坪县", "平利县", "石泉县", "宁陕县", "白河县", "汉阴县", "其他"],

        "商洛": ["商州区", "镇安县", "山阳县", "洛南县", "商南县", "丹凤县", "柞水县", "其他"],

        "其他": ["其他"],

        // 甘肃

        "兰州": ["城关区", "七里河区", "西固区", "安宁区", "红古区", "永登县", "皋兰县", "榆中县", "其他"],

        "嘉峪关": ["嘉峪关市", "其他"],

        "金昌": ["金川区", "永昌县", "其他"],

        "白银": ["白银区", "平川区", "靖远县", "会宁县", "景泰县", "其他"],

        "天水": ["清水县", "秦安县", "甘谷县", "武山县", "张家川回族自治县", "北道区", "秦城区", "其他"],

        "武威": ["凉州区", "民勤县", "古浪县", "天祝藏族自治县", "其他"],

        "酒泉": ["肃州区", "玉门市", "敦煌市", "金塔县", "肃北蒙古族自治县", "阿克塞哈萨克族自治县", "安西县", "其他"],

        "张掖": ["甘州区", "民乐县", "临泽县", "高台县", "山丹县", "肃南裕固族自治县", "其他"],

        "庆阳": ["西峰区", "庆城县", "环县", "华池县", "合水县", "正宁县", "宁县", "镇原县", "其他"],

        "平凉": ["崆峒区", "泾川县", "灵台县", "崇信县", "华亭县", "庄浪县", "静宁县", "其他"],

        "定西": ["安定区", "通渭县", "临洮县", "漳县", "岷县", "渭源县", "陇西县", "其他"],

        "陇南": ["武都区", "成县", "宕昌县", "康县", "文县", "西和县", "礼县", "两当县", "徽县", "其他"],

        "临夏回族自治州": ["临夏市", "临夏县", "康乐县", "永靖县", "广河县", "和政县", "东乡族自治县", "积石山保安族东乡族撒拉族自治县", "其他"],

        "甘南藏族自治州": ["合作市", "临潭县", "卓尼县", "舟曲县", "迭部县", "玛曲县", "碌曲县", "夏河县", "其他"],

        "其他": ["其他"],


        // 青海
        "西宁": ["城中区", "城东区", "城西区", "城北区", "湟源县", "湟中县", "大通回族土族自治县", "其他"],

        "海东地区": ["平安县", "乐都县", "民和回族土族自治县", "互助土族自治县", "化隆回族自治县", "循化撒拉族自治县", "其他"],

        "海北藏族自治州": ["海晏县", "祁连县", "刚察县", "门源回族自治县", "其他"],

        "海南藏族自治州": ["共和县", "同德县", "贵德县", "兴海县", "贵南县", "其他"],

        "黄南藏族自治州": ["同仁县", "尖扎县", "泽库县", "河南蒙古族自治县", "其他"],

        "果洛藏族自治州": ["玛沁县", "班玛县", "甘德县", "达日县", "久治县", "玛多县", "其他"],

        "玉树藏族自治州": ["玉树县", "杂多县", "称多县", "治多县", "囊谦县", "曲麻莱县", "其他"],

        "海西蒙古族藏族自治州": ["德令哈市", "格尔木市", "乌兰县", "都兰县", "天峻县", "其他"],

        "其他": ["其他"],


        // 宁夏

        "银川": ["兴庆区", "西夏区", "金凤区", "灵武市", "永宁县", "贺兰县", "其他"],

        "石嘴山": ["大武口区", "惠农区", "平罗县", "其他"],

        "吴忠": ["利通区", "青铜峡市", "盐池县", "同心县", "其他"],

        "固原": ["原州区", "西吉县", "隆德县", "泾源县", "彭阳县", "其他"],

        "中卫": ["沙坡头区", "中宁县", "海原县", "其他"],

        "其他": ["其他"],


        // 新疆


        "乌鲁木齐": ["天山区", "沙依巴克区", "新市区", "水磨沟区", "头屯河区", "达坂城区", "东山区", "乌鲁木齐县", "其他"],

        "克拉玛依": ["克拉玛依区", "独山子区", "白碱滩区", "乌尔禾区", "其他"],

        "吐鲁番地区": ["吐鲁番市", "托克逊县", "鄯善县", "其他"],

        "哈密地区": ["哈密市", "伊吾县", "巴里坤哈萨克自治县", "其他"],

        "和田地区": ["和田市", "和田县", "洛浦县", "民丰县", "皮山县", "策勒县", "于田县", "墨玉县", "其他"],

        "阿克苏地区": ["阿克苏市", "温宿县", "沙雅县", "拜城县", "阿瓦提县", "库车县", "柯坪县", "新和县", "乌什县", "其他"],

        "喀什地区": ["喀什市", "巴楚县", "泽普县", "伽师县", "叶城县", "岳普湖县", "疏勒县", "麦盖提县", "英吉沙县", "莎车县", "疏附县", "塔什库尔干塔吉克自治县", "其他"],

        "克孜勒苏柯尔克孜自治州": ["阿图什市", "阿合奇县", "乌恰县", "阿克陶县", "其他"],

        "巴音郭楞蒙古自治州": ["库尔勒市", "和静县", "尉犁县", "和硕县", "且末县", "博湖县", "轮台县", "若羌县", "焉耆回族自治县", "其他"],

        "昌吉回族自治州": ["昌吉市", "阜康市", "奇台县", "玛纳斯县", "吉木萨尔县", "呼图壁县", "木垒哈萨克自治县", "米泉市", "其他"],

        "博尔塔拉蒙古自治州": ["博乐市", "精河县", "温泉县", "其他"],

        "石河子": ["石河子"],

        "阿拉尔": ["阿拉尔"],

        "图木舒克": ["图木舒克"],

        "五家渠": ["五家渠"],

        "伊犁哈萨克自治州": ["伊宁市", "奎屯市", "伊宁县", "特克斯县", "尼勒克县", "昭苏县", "新源县", "霍城县", "巩留县", "察布查尔锡伯自治县", "塔城地区", "阿勒泰地区", "其他"],

        "其他": ["其他"],


        // 台湾


        "台湾": ["台北市", "高雄市", "台北县", "桃园县", "新竹县", "苗栗县", "台中县", "彰化县", "南投县", "云林县", "嘉义县", "台南县", "高雄县", "屏东县", "宜兰县", "花莲县", "台东县", "澎湖县", "基隆市", "新竹市", "台中市", "嘉义市", "台南市", "其他"],

        "其他": ["其他"],

        // 澳门
        "澳门": ["花地玛堂区", "圣安多尼堂区", "大堂区", "望德堂区", "风顺堂区", "嘉模堂区", "圣方济各堂区", "路凼", "其他"],

        // 香港

        "香港": ["中西区", "湾仔区", "东区", "南区", "深水埗区", "油尖旺区", "九龙城区", "黄大仙区", "观塘区", "北区", "大埔区", "沙田区", "西贡区", "元朗区", "屯门区", "荃湾区", "葵青区", "离岛区", "其他"],
        // 钓鱼岛
        "钓鱼岛": ["钓鱼岛"],




    },
    provinceIndex: 0,
    cityIndex: 0,
    districtIndex: 0,

    selectedProvince: '-请选择-',
    selectedCity: '-请选择-',
    selectedDistrct: '-请选择-'
};


function init(that) {

    that.setData({
        'city': city
    });
    var bindProvinceChange = function (e) {
        var city = that.data.city;

        // 储存数据
        wx.setStorageSync('provinceStorage', city.province[e.detail.value]);
        wx.setStorageSync('cityStorage', city.city[city.province[e.detail.value]][0]);
        wx.setStorageSync('districtStorage', city.district[city.city[city.province[e.detail.value]][0]][0]);


        that.setData({
            'city.provinceIndex': e.detail.value,
            'city.selectedProvince':
            city.province[e.detail.value],
            'city.selectedCity':
            city.city[city.province[e.detail.value]][0],
            'city.selectedDistrct':
            city.district[city.city[city.province[e.detail.value]][0]][0],
            'city.cityIndex': 0,
            'city.districtIndex': 0
        });
    };
    var bindCityChange = function (e) {
        var city = that.data.city;

        wx.setStorageSync('cityStorage', city.city[city.selectedProvince][e.detail.value]);
        wx.setStorageSync('districtStorage', city.district[city.city[city.selectedProvince][e.detail.value]][0]);

        that.setData({
            'city.cityIndex': e.detail.value,
            'city.selectedCity': city.city[city.selectedProvince][e.detail.value],
            'city.districtIndex': 0,
            'city.selectedDistrct': city.district[city.city[city.selectedProvince][e.detail.value]][0]
        });
    };
    var bindDistrictChange = function (e) {
        var city = that.data.city;

        wx.setStorageSync('districtStorage', city.district[city.selectedCity][e.detail.value]);
        that.setData({
            'city.districtIndex': e.detail.value,
            'city.selectedDistrct': city.district[city.selectedCity][e.detail.value]
        });
    };

    that['bindProvinceChange'] = bindProvinceChange;
    that['bindCityChange'] = bindCityChange;
    that['bindDistrictChange'] = bindDistrictChange;

};

//自动获取
function  bingAddressTap() {
  var that = this;
  wx.chooseLocation({
    success: function (res) {
      var regex = /^(北京市|天津市|重庆市|上海市|香港特别行政区|澳门特别行政区)/;
      var REGION_PROVINCE = [];
      var addressBean = {
        REGION_PROVINCE: null,
        REGION_COUNTRY: null,
        REGION_CITY: null,
        ADDRESS: null
      };

      function regexAddressBean(address, addressBean) {
        regex = /^(.*?[市州]|.*?地区|.*?特别行政区)(.*?[市区县])(.*?)$/g;
        var addxress = regex.exec(address);
        console.log(addxress,'获取地址')
        addressBean.REGION_CITY = addxress[1];
        addressBean.REGION_COUNTRY = addxress[2];
        addressBean.ADDRESS = addxress[3] + "(" + res.name + ")";
        var province = addxress[1];
        var city = addxress[2];
        var citytitle = addxress[3];
        // 市区
        var provinceSemicolon = addxress[1];
        var citySemicolon = addxress[2];
        var citytitleSemicolon = addxress[3];
        // 市区
        // 单单省区
        var minprovince = addressBean.REGION_PROVINCE;
        var addressSemicolon = minprovince + ',' + provinceSemicolon + citySemicolon + ',' + citytitleSemicolon;

        wx.setStorageSync('addressSemicolon', addressSemicolon);

      }
      if (!(REGION_PROVINCE = regex.exec(res.address))) {
        regex = /^(.*?(省|自治区))(.*?)$/;
        REGION_PROVINCE = regex.exec(res.address);
        addressBean.REGION_PROVINCE = REGION_PROVINCE[1];
        regexAddressBean(REGION_PROVINCE[3], addressBean);
      } else {
        addressBean.REGION_PROVINCE = REGION_PROVINCE[1];
        regexAddressBean(res.address, addressBean);

      }

      var automaticAddress = addressBean.REGION_PROVINCE + addressBean.REGION_CITY;
      wx.setStorageSync('city', addressBean.REGION_CITY);
      wx.setStorageSync('automaticAddress', automaticAddress);
      // that.setData({
      //   ADDRESS_1_STR: addressBean.REGION_PROVINCE + " " + addressBean.REGION_CITY + "" + addressBean.REGION_COUNTRY

      // });
      // that.setData(addressBean);

    }

  })


};


module.exports = {
  init: init,
  getAddress :bingAddressTap
}