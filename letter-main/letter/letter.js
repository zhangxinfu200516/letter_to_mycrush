let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
//点击事件触发
heart.addEventListener('click', function () {
    //隐藏卡片
    card.setAttribute("style", "opacity:0");
    //播放音频
    let x = document.createElement("audio");
    x.setAttribute("src", "qlx.mp3");
    x.setAttribute("autoplay", "autoplay");

    // 打字效果
    let i = 0;
    // let str =
    //  '写信真是一件温柔的事，细腻的小心思就藏在横竖撇捺之中，像是一只温顺的小兽<躲在情意绵绵的字里行间，被火燎封印起来，等着解封的那一刻窜出来，跳进启信人眼底的柔波里。<你一眨眼，<温驯的小鹿有跳动一下，<柔软的暖风有轻拂一下，<遥远的星星有闪烁一下，<我也有心动<却不止一下';
    
     //过去我们经历了好多，回想起那些点滴心里总会感到很美妙，实验课上的AI派搭档、那晚起初对未来职业的探讨而后转向出乎意料的dirty talk、那个鼓起勇气给你送德福巧克力的自己、西餐厅中西服男孩与漂亮女孩的共进晚餐、一起做摩天轮的开心时光......
     //你知道吗？你改变了我对未来的规划以及认知。刚上大三我面对未来总是很焦虑，没有清晰的职业规划，开始时选择一味的顺遂大流考研，那段时光有点难熬，实验室的任务+复习数学英语+上课的压力让我几乎喘不过气来。
     //认识你后，不断的交流给予我的思考，你可以为了做好互联网而努力奋斗、对自己未来有着较为清晰的规划，那我呢？just do myself！我意识到自己很难脱离委培生这个身份，读研也可能改变不了，甚至会加固这个枷锁。最终我选择更为适合自己的道路：先就业+学习技术（嵌入式软件+硬件），未来变数挺多的，我相信985的学历+足够硬核的技术可以带给我底气去面对不断内卷的市场。
     //一起加油吧，大学可以相识，我很开心！
     let str = '过去我们经历了好多，回想起那些点点点滴滴心里总会感到很美妙，<实验课上的AI派搭档、那晚起初对未来职业的探讨而后转向出乎意料的dirty talk、<那个鼓起勇气给你送德福巧克力的自己、西餐厅中西服男孩与漂亮女孩的共进晚餐、<一起做摩天轮的开心时光......<你知道吗？你改变了我对未来的规划以及认知。<刚上大三我面对未来总是很焦虑，没有清晰的职业规划，开始时选择一味的顺遂大流考研，那段时光有点难熬，实验室的任务+复习数学英语+上课的压力让我几乎喘不过气<认识你后，不断的交流给予我的思考，你可以为了做好互联网而努力奋斗、对自己未来有着较为清晰的规划，那我呢？just do myself！<我意识到自己很难脱离委培生这个身份，读研也可能改变不了，甚至会加固这个枷锁。<最终我选择更为适合自己的道路：先就业+学习技术（嵌入式软件+硬件），未来变数挺多的，我相信985的学历+足够硬核的技术可以带给我底气去面对不断内卷的市场。<一起加油吧，大学可以相识，我很开心！';

     let htmlContent = ''; // 存储已输出的HTML内容（文本 + <br>）

    function print() {
        if (str[i] === '<') {
            // 遇到 < 标记，插入两个换行（表示段落间隔）
            htmlContent += '<br><br>';
        } else {
            // 普通字符直接追加
            htmlContent += str[i];
        }
        // 更新显示：当前累积内容 + 光标
        box.innerHTML = htmlContent + '|';
        i++;
    }

    // 延迟5500ms后开始打字
    setTimeout(() => {
        //启用一个间隔定时器，每隔190ms打印一次print()函数
        let printid = setInterval(() => {
            print();
            if (i >= str.length) {
                clearInterval(printid);
                // 可选：打字结束后移除光标
                // box.innerHTML = htmlContent;
            }
        }, 190);
    }, 5500);
    
    // 背景显现（1500 毫秒后独立发生）
    function appearBackground() {
        setTimeout(() => {
            box.style.opacity = 1
        }, 1500)
    }
    appearBackground()

})
