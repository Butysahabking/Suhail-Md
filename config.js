const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_23_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDY0LFxuICAgICAgICAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODksXG4gICAgICAgIDc0LFxuICAgICAgICA4MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAxODksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaMDdFZWFnaEFuY0VkeTFLMi92UEc0VFo1cG1NdlB1UGMrYWU4OExHUFVrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWcGdGQ2VMcVREQzNFYU1WSkxqa0tBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU0YWQ0ODMzLTAxNDUtNDA4My1hNjExLTU3OTE5NWZhZWI2ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjUsXG4gICAgICAyMyxcbiAgICAgIDI0NCxcbiAgICAgIDIxNCxcbiAgICAgIDIxNCxcbiAgICAgIDgsXG4gICAgICAzMSxcbiAgICAgIDE3MCxcbiAgICAgIDI0MSxcbiAgICAgIDU5LFxuICAgICAgODMsXG4gICAgICAxLFxuICAgICAgNzIsXG4gICAgICAzMyxcbiAgICAgIDk0LFxuICAgICAgMyxcbiAgICAgIDIwNCxcbiAgICAgIDU2LFxuICAgICAgMjI1LFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNCxcbiAgICAgIDI4LFxuICAgICAgMjA3LFxuICAgICAgNjksXG4gICAgICAxNTEsXG4gICAgICA1NixcbiAgICAgIDE2NyxcbiAgICAgIDU1LFxuICAgICAgODcsXG4gICAgICAyNDUsXG4gICAgICAxMTUsXG4gICAgICAyMzksXG4gICAgICA3MSxcbiAgICAgIDQzLFxuICAgICAgMTYyLFxuICAgICAgMTk5LFxuICAgICAgMTEsXG4gICAgICAzNSxcbiAgICAgIDkxLFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZLNDVNRFRHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMTc3MTg1NzU6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYudi02YLZkCDYstin2K/bgVwiLFxuICAgIFwibGlkXCI6IFwiMjQ4MjQwNTE5ODE1MjA2OjczQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B2T3BjVURFTGVndmJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3MwMFM5bEVpRE51enZ1TWlvZ3VoNDEzdDVibjF2ZFR1WTQyN3RSM1pDTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSRzZlZkgvVU1MSngra1l4WnpzclhxSFhOS2EzK3lvTXFOaGJSdlptWkhDRFNsQzROYmk0SFliTmtFcW5zR1hkR05yTXhhWEtCaWcwbC9YNHNVSEpBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMcnEyb3Y5R3g1bEdhODdDOTZwRGZ0NFNlWG1CUjNjNTlCMWU1bzZ1c21qT2o3SG1OQ2N4d2xaYnJSZnFNTDIzc1IzZjV1WHBnMExxT21oV0RLT2JEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMTc3MTg1NzU6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjY4MjE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWJJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJYkkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpbkhqSmtacnNEeDVGVmpTOE1mOTdFQ3JQOVJqUmtDV3o3cDFUMFozaUtZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk1MDYyNjE3MCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
