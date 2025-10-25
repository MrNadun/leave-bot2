const fs = require("fs");
//~~~~~~~~~SETTING BOT~~~~~~~~~~//
global.owner = ["94760405102", "94717668904"];
global.nama = "Kyami Silence";
global.ownerName = "MrNadun";
global.namaowner = "MrNadun";
global.namaBot = "Leave Manager";
global.ch = "https://whatsapp.com/channel/0029Vb1KZGfD38COhcA6M3u";
global.status = true;
global.owneroff = false;
global.nobot = "94760405102";
global.title = "LEAVE MORE BOT";
global.foother = "© created by buymore tecnical team";
global.namach = "LeaveMore";
global.idch = "120363366790950043@newsletter";
global.namafile = "Leave Managar";
global.yt = "https://youtube.com";
global.website = "https://youtube.com/";
global.themeemoji = "🌸";
global.packname = "𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘉𝘺";
global.author = "\n\n\n\n\n𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 𝘚𝘪𝘭𝘦𝘯𝘤𝘦 \n𝘠𝘵 : 𝘒𝘺𝘢𝘮𝘪 𝘚𝘪𝘭𝘦𝘯𝘤𝘦";
global.creator = "94760405102@s.whatsapp.net";
//====== [ THEME URL & URL ] ========//
global.thumb = fs.readFileSync("./lib/media/thumb.jpg"); // Buffer Image
global.thumbnail = "https://img1.pixhost.to/images/9411/651097117_kyami.jpg";
global.thumbnel = "https://img1.pixhost.to/images/9411/651097117_kyami.jpg";
global.Url = "-";
//~~~~~~~~~ Settings reply ~~~~~~~~~//
global.mess = {
  owner: "𝙏𝙝𝙞𝙨 𝙄𝙨 𝙁𝙤𝙧 𝙊𝙬𝙣𝙚𝙧, 𝙉𝙤𝙩 𝙁𝙤𝙧 𝙔𝙤𝙪 ´◡`",
  prem: "𝙏𝙝𝙞𝙨 𝙄𝙨 𝙁𝙤𝙧 𝙋𝙧𝙚𝙢𝙞𝙪𝙢, 𝙉𝙤𝙩 𝙁𝙤𝙧 𝙔𝙤𝙪 ´◡`",
  group: "𝙏𝙝𝙞𝙨 𝙄𝙨 𝙁𝙤𝙧 𝙂𝙧𝙤𝙪𝙥 𝙊𝙣𝙡𝙮 ´◡`",
  private: "𝙊𝙣𝙡𝙮 𝙋𝙧𝙞𝙫𝙖𝙩𝙚 𝘾𝙝𝙖𝙩 𝙎𝙞𝙧 ´◡`",
};

global.packname = "Kyami Silence";
global.author = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n𝘒𝘠𝘈𝘔𝘐 𝘚𝘐𝘓𝘌𝘕𝘊𝘌";

//~~~~~~~~~~~ DIEMIN ~~~~~~~~~~//
global.pairing = ""; //jangan di isi

let file = require.resolve(__filename);
require("fs").watchFile(file, () => {
  require("fs").unwatchFile(file);
  console.log("\x1b[0;32m" + __filename + " \x1b[1;32mupdated!\x1b[0m");
  delete require.cache[file];
  require(file);
});
