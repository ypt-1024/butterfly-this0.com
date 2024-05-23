var now1 = new Date();

function createtime1() {
    var ascll = [
        `欢迎访问this0.com!`,
        `源码已分享到我的github`,
        `

                                                                                  
         ,,          ,,                                                           
  mm   \`7MM          db                                                           
  MM     MM                                                                       
mmMMmm   MMpMMMb.  \`7MM  ,pP"Ybd  ,pP""Yq.      ,p6"bo   ,pW"Wq.\`7MMpMMMb.pMMMb.  
  MM     MM    MM    MM  8I   \`" 6W'    \`Wb    6M'  OO  6W'   \`Wb MM    MM    MM  
  MM     MM    MM    MM  \`YMMMa. 8M      M8    8M       8M     M8 MM    MM    MM  
  MM     MM    MM    MM  L.   I8 YA.    ,A9 ,, YM.    , YA.   ,A9 MM    MM    MM  
  \`Mbmo.JMML  JMML..JMML.M9mmmP'  \`Ybmmd9'  db  YMbmd'   \`Ybmd9'.JMML  JMML  JMML.
                                                                                  
                                                                                                                  
`,

        "©2023 By Yupengtao",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            ""
        )
    );
}

createtime1();



// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };