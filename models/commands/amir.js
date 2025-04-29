const fs = require("fs");
module.exports.config = {
	name: "react",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Shaan Khan", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("hamza") || react.includes("Ali") || react.includes("honey") ||
react.includes("honey king") ||
react.includes("admin")) {
		var msg = {
				body: `★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★
               ✦𝐇𝐎𝐍𝐄𝐘 𝐊𝐈𝐍𝐆✦

☞𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞:
https://www.facebook.com/𝚜𝚑𝚊𝚊𝚗 uid👉✨Honey King: 100088462262598✨



★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 :  ✦𝐇𝐀𝐌𝐙𝐀 𝐀𝐋𝐈 𝐊✦`,attachment: fs.createReadStream(__dirname + `/noprefix/1711811285337.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
