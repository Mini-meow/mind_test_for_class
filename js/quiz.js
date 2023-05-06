let quiz = [
    {
        "q": "1<br>你漂到了一座陌生小島，小島的模樣是？",
        "a":{
            "text": "夢幻的不可思議",
            "pt": 0
        },
        "b": {
            "text": "有種許多動物的大草原",
            "pt": 1000
        },
        "c": {
            "text": "原始且神祕的森林",
            "pt": 2000
        },
        "d": {
            "text": "海盜曾經的據點，有許多寶藏",
            "pt": 3000
        },
        "next": true
    },
    {
        "q": "2<br>此時島上的人向你走來，說著你聽不懂的語言，你會？",
        "a":{
            "text": "利用肢體語言，熱情招呼",
            "pt" : 4
        },
        "b": {
            "text" :"緊張的說不出話，只能安靜的看著島民",
            "pt" : 2
        },
        "c":{
            "text": "充滿警戒，將找的利器藏在身後",
            "pt" : 1
        },
        "d": {
            "text" :"裝睡，閉著眼睛就沒事了",
            "pt" : 3
        },
        "next": true
    },
    {
        "q": "3<br>島民將你帶回部落、給妳吃好睡好，不但過的滋潤島上還全是帥哥美女，你會怎麼做呢？",
        "a":{
            "text": "用各種方式表達自己想回家的念頭，心裡掛念著遠方的家人和朋友",
            "pt" : 3
        },
        "b": {
            "text" :"回到現實有比較好嗎？工作不順、朋友越來越少，被錢和壓力追著跑，想完決定住在島上",
            "pt" : 4
        },
        "c":{
            "text": "順其自然，既然來了就好好珍惜這緣分，靜靜等待被船隻發現的那天",
            "pt" : 1
        },
        "d": {
            "text" :"非常緊張，覺得這一切都是假的，他們的目的是把自己煮來吃",
            "pt" : 2
        },
        "next": true
    },
    {
        "q": "4<br>恭喜你被遠洋船隻發現，成功回到台灣！你期望會遇到什麼事？",
        "a":{
            "text": "被記者包圍、新聞網路全部充斥著有關你的消息，好好利用這股名氣賺錢",
            "pt" : 4
        },
        "b": {
            "text" :"將經歷寫成書，被邀約去好萊塢拍電影，從此飛黃騰達",
            "pt" : 3
        },
        "c":{
            "text": "翻閱一切書籍、了解島嶼的文化和特性，與相關部門合作再次重回島上進行研究",
            "pt" : 2
        },
        "d": {
            "text" :"只希望一切都跟原本一樣，不想有任何改變",
            "pt" : 1
        },
        "next": true
    },
    {
        "q": "5<br>回到現實還是得上課！<br>報告開天窗！！你該怎麼跟教授解釋？",
        "a":{
            "text": "假裝檔案壞掉，無法讀取",
            "pt" : 4
        },
        "b": {
            "text" :"直接請假，病假請好請滿",
            "pt" : 3
        },
        "c":{
            "text": "不可能發生那種事，我是優良學生",
            "pt" : 1
        },
        "d": {
            "text" :"坦白從寬，誠實跟教授講",
            "pt" : 2
        },
        "next": true
    },
    {
        "q": "6<br>學校/公司 突然讓你放一天假，你最想做什麼？",
        "a":{
            "text": "瘋狂睡覺追劇看漫畫玩遊戲足不出戶",
            "pt" : 2
        },
        "b": {
            "text" :"喝著咖啡逛展覽、聽音樂，有種被治癒的感覺",
            "pt" : 3
        },
        "c":{
            "text": "迫不及待出門玩！順便吃珍藏已久的美食名單",
            "pt" : 4
        },
        "d": {
            "text" :"不工作渾身不對勁，工作即生活",
            "pt" : 1
        },
        "next": true
    },
    {
        "q": "7<br>月底人，快要吃土了！你該怎麼極限生存？",
        "a":{
            "text": "友善時光！i珍食！便利商店即期品是我的超人",
            "pt" : 0
        },
        "b": {
            "text" :"每天吃泡麵、水餃、白麵維生",
            "pt" : 0
        },
        "c":{
            "text": "利用各種網站、講座，領取免費餐盒",
            "pt" : 0
        },
        "d": {
            "text" :"媽～可以提早匯下個月的生活費嗎？",
            "pt" : 0
        },
        "next": true
    },
    {
        "q": "8<br>遇到繁重的期末作業，你的處理方式是？",
        "a":{
            "text": "不撞南牆不回頭，拖到最後一刻",
            "pt" : 0
        },
        "b": {
            "text" :"按照計畫準時完成，絕不拖延",
            "pt" : 0
        },
        "c":{
            "text": "靠系上學霸和自己的朋友凱瑞",
            "pt" : 0
        },
        "d": {
            "text" :"完全忘記這回事！？",
            "pt" : 0
        },
        "next": false
    }
];

let result = {
    "a1": {
        "name": "得劭",
        "desc": "致沈穩的冒險者<br>\
歡迎來到《熊貓大帝國》，這是一座適合陶冶性情、氣溫宜人的板塊，這裡是熊貓的天堂、甚至出現了熊貓比人多的狀況。（據說功夫熊貓有來這裡取景）<br>\
你是個理性正直、做事有條理追求完美的人，時常為了達到標準給自己太多的壓力。認真、自律是你的代名詞。<br>\
        ",
        "desc2": "友好的夥伴：辣呼呼<br>建議挑戰：露營、看海<br>適合的課程：陶藝<br>晚餐推薦：皮蛋瘦肉粥",
        "img": "assets/a_Teshao.png",
        "radar": "assets/n_Teshao.png"
    },
    "a2": {
        "name": "秀聰",
        "desc": "致友善的冒險者<br>\
歡迎你來到《森之心》，這是一座山林水秀、生機蓬勃的板塊，吸引了無數登山者前來挑戰！這裡的人們步調悠閒、作息正常，吃喝睡好健康沒煩惱。（但其實你是超級夜貓子）<br>\
你是一個非常猜不透、外表高冷的人，有種獨特且吸引人的氣質。神秘、難以捉摸是你的代名詞。",
        "desc2": "友好的夥伴：臥虎藏龍<br>建議挑戰：拍Vlog、夜衝<br>適合的課程：草木染<br>晚餐推薦：麥當勞",
        "img": "assets/a_Siutsong.png",
        "radar": "assets/n_Siutsong.png"
    },
    "a3": {
        "name": "柏熹",
        "desc": "致溫暖的冒險者<br>\
歡迎來到《喀擦喀擦》，這是一座充滿文藝氣息、電影、音樂、文學都非常蓬勃發展的板塊。島上的底片價格低廉，人手一台相機。<br>\
你是個善解人意、樂於付出的人。但過於善良所以不懂的拒絕，時常委屈自己。大方溫柔、笑容可掬是你的代名詞。",
        "desc2":"友好的夥伴： 金銀財寶<br>建議挑戰：路跑、夜唱<br>適合的課程：基礎攝影<br>晚餐推薦：美式大漢堡",
        "img": "assets/a_Posi.png",
        "radar": "assets/n_Posi.png"
    },
    "b1": {
        "name": "明峰",
        "desc": "致可愛的冒險者<br>\
歡迎來到《毛線樂園》，這是一座堆滿毛線、偶像文化興盛的小島，島上的貓咪都非常喜歡你！時常躺在你的腿上呼嚕討摸摸（說不定連狗派都會動搖呢！）<br>\
你是個有毅力且認真負責的人、喜歡有保障的事情。心靈手巧是你的代名詞。",
        "desc2": "友好的夥伴：金銀財寶<br>建議挑戰：密室逃脫、釣魚<br>適合的課程：編織<br>晚餐推薦：壽喜燒豬肉",
        "img": "assets/a_Mingfeng.png",
        "radar": "assets/n_Mingfeng.png"
    },
    "b2": {
        "name": "文昌",
        "desc": "致可愛的冒險者<br>\
歡迎來到《樂陶陶》，這是一座歷史久遠、人文薈萃的好地方。每到假日觀光者便蜂擁而至，有著許多老字號名店。（但內行人都知道哪間才是最好吃的店）<br>\
你是個隨和且友好的人，人緣極佳大家都喜歡跟你做朋友，也是朋友間的協調者。和平、溫柔是你的代名詞。",
        "desc2": "友好的夥伴： 喀擦喀擦<br>建議挑戰：溜冰、單獨看電影<br>適合的課程： 文化工藝設計<br>晚餐推薦：牛肉湯+肉燥飯",
        "img": "assets/a_WenchangTsun.png",
        "radar": "assets/n_WenchangTsun.png"
    },
    "c1": {
        "name": "臥龍",
        "desc": "致敏銳的冒險者<br>\
歡迎你來到《臥虎藏龍》，這是一座地靈人傑、孕育出許多優秀人才的板塊，想必你是潛藏在其中的佼佼者吧！（也是擁有最多諾貝爾獎項的地方）<br>\
你是個敏銳、富有同情心的人，善於表現自我、追求獨特的藝術家。浪漫、瀟灑是你的代名詞。",
        "desc2": "友好的夥伴：森之心<br>建議挑戰：環島、酒精路跑<br>適合的課程：素描<br>晚餐推薦：咖哩豬排飯",
        "img": "assets/a_wolung.png",
        "radar": "assets/n_wolung.png"
    },
    "c2": {
        "name": "令權",
        "desc": "致勇敢的冒險者<br>\
歡迎來到《辣呼呼》，這是一座了無數挑戰、未知數的板塊，這裡的生活很自由，最有名的特產是特級魔鬼辣椒。（但太多人吃辣吃到送醫院了）<br>\
你喜歡新鮮好玩、自由自在、開心快樂的生活，討厭重複煩悶的事務。不按理出牌、天馬行空是你的代名詞。",
        "desc2":"友好的夥伴：樂陶陶<br>建議挑戰：泛舟、拼樂高<br>適合的課程：流行時尚<br>晚餐推薦：泰式椒麻雞+月亮蝦餅",
        "img": "assets/a_Lingchuan.png",
        "radar": "assets/n_Lingchuan.png"
    },
    "d1": {
        "name": "淑雅",
        "desc": "致富有的冒險者<br>\
歡迎來到《金銀財寶》，這是一座富的流油、人人住豪宅開名車、休閒娛樂是買飛機的超有錢板塊。你實在是太幸運啦！只有0.05%的人才能來到這！最稀有的板塊！<br>\
你是個積極正向、很有自信的人，渴望被認可、注重個人形象。認真、機靈是你的代名詞。",
        "desc2": "友好的夥伴： 樂陶陶<br>建議挑戰：跳水、打保齡球<br>適合的課程：首飾設計<br>晚餐推薦：鐵板燒",
        "img": "assets/a_Shuya.png",
        "radar": "assets/n_Shuya.png"
    },
    "d2": {
        "name": "浴珊",
        "desc": "致美好的冒險者<br>\
歡迎來到《銅玫瑰》，這是一座美麗夢幻、充滿著許多咖啡廳、甜點店的板塊。島上的人步調悠閒，喜歡在夕陽餘暉下聽著音樂散步，人人都浪漫的不得了。（盛產暖男）<br>\
你是個喜歡思考、追求知識的人，喜歡獨處、渴望比別人了解的更多。冷靜、機智是你的代名詞。",
        "desc2": "友好的夥伴：熊貓大帝國<br>建議挑戰：劇本殺、遊樂園<br>適合的課程： 金工<br>晚餐推薦：明太子鮭魚義大利麵",
        "img": "assets/a_Yushan.png",
        "radar": "assets/n_Yushan.png"
    }
};

let point = 0;
let cur_question = 0;
let result_id = "a1";

const START_PAGE = 0;
const QUIZ_PAGE = 1;
const WAITING_PAGE = 2;
const RESULT_PAGE = 3;
const INFO_PAGE = 4;

function hidden_page_except(pagename) {
    let page = ["starting-page", "quiz-page", "waiting-page", "result-page", "info-page"];

    let showPage = page.splice(pagename, 1)[0];

    for (let i = 0; i < page.length; i++) {
        $("#" + page[i]).css("display", "none");
    }
    $("#" + showPage).css("display", "flex");
}

// 以下題目頁
function load_question_text(i) {
    $("#question-box").html(quiz[i]["q"]);
    $("#opt-a").html(quiz[i]["a"]["text"]);
    $("#opt-b").html(quiz[i]["b"]["text"]);
    $("#opt-c").html(quiz[i]["c"]["text"]);
    $("#opt-d").html(quiz[i]["d"]["text"]);
}

async function handle_option(option) {
    point += quiz[cur_question][option]["pt"];
    if (!quiz[cur_question]["next"]) {
        load_loading_page();
        result_id = get_result();
        await preload([result[result_id]["img"], result[result_id]["radar"]]);
        window.setTimeout(( async () => load_result_page() ), 3000);
        initalize_button_style();
    }else {
        load_question_text(++cur_question);
    }
}

function initalize_button_style() {
    $("#opt-a-btn").on("touchend", function(e) {
        $("#opt-a-btn").css("background-color", "");
        $("#opt-a-btn").css("background-blend-mode", "");
    });

    $("#opt-b-btn").on("touchend", function(e) {
        $("#opt-b-btn").css("background-color", "");
        $("#opt-b-btn").css("background-blend-mode", "");
    });

    $("#opt-c-btn").on("touchend", function(e) {
        $("#opt-c-btn").css("background-color", "");
        $("#opt-c-btn").css("background-blend-mode", "");
    });

    $("#opt-d-btn").on("touchend", function(e) {
        $("#opt-d-btn").css("background-color", "");
        $("#opt-d-btn").css("background-blend-mode", "");
    });
}

function handle_quiz() {
    hidden_page_except(QUIZ_PAGE);
    load_question_text(0);
}

function retest() {
    point = 0;
    cur_question = 0;
    hidden_page_except(START_PAGE);
}

// waiting page
function load_loading_page() {
    hidden_page_except(WAITING_PAGE);
}

// 以下結果頁
function get_result() {
    if (point < 6) {
        return "a1";
    }else if (point >= 7 && point <= 13) {
        return "a2";
    }else if (point >= 14 && point < 1000) {
        return "a3";
    }else if (point >= 1000 && point <= 1010) {
        return "b1";
    }else if (point >= 1011 && point < 2000) {
        return "b2";
    }else if (point >= 2000 && point <= 2010) {
        return "c1";
    }else if (point >= 2021 && point < 3000) {
        return "c2";
    }else if (point >= 3000 && point <= 3010) {
        return "d1";
    }else {
        return "d2";
    }
}

function load_result_page() {
    hidden_page_except(RESULT_PAGE);

    $("#info-text").html(result[result_id]["desc"] + "<hr>" + result[result_id]["desc2"]);
    $("#result-avatar").attr("src", result[result_id]["img"]);
    $("#result-radar").attr("src", result[result_id]["radar"]);
}


// 雜
function make_button(id) {
    $("#" + id).on("touchstart", function(e) {
        $("#" + id).css("background-color", "#aaaaaa66");
        $("#" + id).css("background-blend-mode", "multiply");
    });
    $("#" + id).on("touchend", function(e) {
        $("#" + id).css("background-color", "");
        $("#" + id).css("background-blend-mode", "");
    });
}

async function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

$(window).ready(async function () {
    await preload(["assets/title.png", "assets/bg_2.png", "assets/bg_result.png", "assets/button_start.png", "assets/loading.gif", "assets/bg_title.png", "assets/seismic_wave.gif"])
    $('#preloading-page').fadeOut("slow");
});

function prepare_title() {
    $("#button-start-q").on("click", function() {
        handle_quiz();
    });
}

async function prepare_quiz() {
    $("#opt-a-btn").on("click", function() {
        handle_option("a");
    });

    $("#opt-b-btn").on("click", function() {
        handle_option("b");
    });

    $("#opt-c-btn").on("click", function() {
        handle_option("c");
    });

    $("#opt-d-btn").on("click", function () {
        handle_option("d");
    });
}

function prepare_result_page() {
    $("#button_restart").on("click", function () {
        retest();
    });
}

async function prepare_whole_page() {
    prepare_title();
    prepare_quiz();
    prepare_result_page();
}

$(document).ready(async function() { 
    make_button("opt-a-btn");
    make_button("opt-b-btn");
    make_button("opt-c-btn");
    make_button("opt-d-btn");
    
    await prepare_whole_page();

    hidden_page_except(START_PAGE);
});