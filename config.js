// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "靈魂小畫家兔寶",  // 同上...
        "今天是你的生日",
        "祝你生日快樂啦",
        "過五天是平安夜",
        "請銘記在心",
        
        "祝妳的肝不會爆炸",
        "祝妳不要意外受傷",
        "也不要準備受傷",
        "祝妳的排位能順利一點",
        "祝妳房間能乾一點",
        
        "就醬",
        "掰餔",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "靈魂小畫家兔寶": "./imgs/S__12706096_0.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Start",
        play: "music",
        bannar_coming: "next",
        balloons_flying: "next",
        cake_fadein: "cake",
        light_candle: "next",
        wish_message: "Happt birthday",
        story: "A MESSAGE FOR YOU",
    }
};
