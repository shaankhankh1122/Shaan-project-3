module.exports.config = {
    name: "admin",
    version: "1.0.1", 
    hasPermssion: 0,
    credits: "Abdulla Rahaman",
    description: "Abdulla Tech 49",
    commandCategory: "...",
    cooldowns: 1,
    dependencies: 
    {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/IyBD3wS.jpeg", 

            "https://i.imgur.com/IyBD3wS.jpeg", 

"https://i.imgur.com/IyBD3wS.jpeg",

            "https://i.imgur.com/IyBD3wS.jpeg"];

var callback = () => api.sendMessage({body:`𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥\n
------------------------------------------------\n𝗡𝗮𝗺𝗲       : 𝗛𝗢𝗡𝗘𝗬 𝗞𝗜𝗡𝗚\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 𝗛𝗔𝗠𝗭𝗔 𝗔𝗟𝗜 \n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝗜𝘀𝗹𝗮𝗺)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (𝗕𝗮𝗻𝗻𝘂)\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 :𝗟𝗮𝗵𝗼𝗿𝗲, 𝗣𝗮𝗸𝗶𝘀𝘁𝗮𝗻\n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)\n𝗔𝗴𝗲            :  (22)\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝗦𝗶𝗻𝗴𝗹𝗲)\n𝗪𝗼𝗿𝗸         : 𝙎𝙩𝙪𝙙𝙮\n𝗚𝗺𝗮𝗶𝗹        :  shankhank345@gmail.com\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/😏😏😏𝗡𝗛𝗜 𝗗𝗛𝗨𝗡𝗚𝗔\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : yaad nahi hai\n𝗙𝗯 𝗹𝗶𝗻𝗸   : Honey King: 100088462262598
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
