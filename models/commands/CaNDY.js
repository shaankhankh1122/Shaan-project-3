module.exports.config = {
    name: "owner",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "... - Shaan",
    description: "War In Chatbox",
    commandCategory: "Noprefix",
    usages: "noprefix",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("🔰𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🔰\n\n 𝐇𝐀𝐌𝐙𝐀\ (𝙇𝙊𝙑𝙀𝙇𝙔 𝘽𝙊𝙔 𝙃𝙊𝙉𝙀𝙔 𝙆𝙄𝙉𝙂 )(•◡•)\n\n𝐀𝐠𝐞 : 23\n\n𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 𝐖𝐢𝐭𝐡 : ESE BATE NAHI BATAI JATE\n\n𝐅𝐫𝐨𝐦 :𝕃𝔸ℍ𝕆ℝ𝔼\n\n𝐒𝐭𝐮𝐝𝐲 : 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com\n\n𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : 𝐁𝐇𝐔𝐋 𝐆𝐀𝐘𝐀 𝐇𝐎𝐎𝐍😏 \n\n میں نے خاموش رہ کے دیکھا ہے لوگ واقعی بھول جاتے ہیں...🙂!❤🙂♣️");


}
