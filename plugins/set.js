////////////////////////////////////////////////////////////////////////////////////////////////////////////
const os = require('os')
let menus = false
const moment = require("moment-timezone")
const fs = require("fs")

let { fancytext, tlang, tiny, runtime, formatp, botpic, getBuffer ,prefix, sck1,name } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const sɪɢᴍᴀ_ᴍᴅ = require('../lib/plugins')




  
  
      //---------------------------------------------------------------------------
      sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
        kingcmd: "setcmd",
        infocmd: "To check ping",
        kingclass: "general",
        kingpath: __filename
      }, async (Void, citel, text, {
        isCreator
      }) => {
        if (!isCreator) {
          return await citel.reply(tlang().owner);
        }
        if (!text) {
          return await citel.send("*_Please provide cmd name by replying a Sticker_*");
        }
        let a = text.split(',');
        var cmdName;
        var newAlias;
        let isSticker = false;
        if (citel.quoted) {
          let mime = citel.quoted.mtype;
          if (mime == "stickerMessage" && text) {
            isSticker = true;
            cmdName = text.split(" ")[0x0];
            newAlias = "sticker-" + citel.quoted.fileSha256;
          }
        }
        if (!isSticker && a.length > 0x1) {
          newAlias = a[0x0].trim().toLowerCase();
          cmdName = a[0x1].trim().toLowerCase();
        } else {
          if (!isSticker) {
            return await citel.send("*_Uhh Dear, Give Cmd With New Name_*\n*Eg: _.setcmd New_Name, Cmd_Name_*");
          }
        }
        if (newAlias.length < 0x1) {
          return await citel.reply("*_Uhh Please, Provide New_Cmd Name First_*");
        }
        if (global.setCmdAlias[newAlias]) {
          return await citel.send("*_\"" + (isSticker ? "Given Sticker" : newAlias) + "\" Already set for \"" + global.setCmdAlias[newAlias] + "\" Cmd, Please try another " + (isSticker ? 'Sticker' : "Name") + '_*');
        }
        const Module_Exports = sɪɢᴍᴀ_ᴍᴅ.commands.find(_0x258c2d => _0x258c2d.kingcmd === cmdName) || sɪɢᴍᴀ_ᴍᴅ.commands.find(_0x23f1c1 => _0x23f1c1.shortcut && _0x23f1c1.shortcut.includes(cmdName));
        if (Module_Exports) {
          global.setCmdAlias[newAlias] = Module_Exports.kingcmd;
          return await citel.send("*_Cmd \"" + global.setCmdAlias[newAlias] + "\" Succesfully set to \"" + (isSticker ? 'Sticker' : newAlias) + "\"._*\n*_These all names are reset, If bot restart_*");
        } else {
          return await citel.send("*_Provided Cmd( " + cmdName + ") not found in bot cmds. Please Provide Valid cmd Name_*");
        }
      });
      //---------------------------------------------------------------------------
      sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
        kingcmd: "delcmd",
        infocmd: "To check ping",
        kingclass: "general",
        kingpath: __filename
      }, async (Void, citel, text, {
        isCreator
      }) => {
        if (!isCreator) {
          return await citel.reply(tlang().owner);
        }
        let Alias = text ? text.split(" ").trim().toLowerCase() : '';
        let isSticker = false;
        if (citel.quoted) {
          if (citel.quoted.mtype == "stickerMessage") {
            isSticker = true;
            Alias = "sticker-" + citel.quoted.fileSha256;
          } else {
            if (!text) {
              return await citel.send("*_Please reply to a Sticker that set for a Cmd_*");
            }
          }
        } else {
          if (!text) {
            return await citel.send("*_Uhh Dear, provide Name that set to a cmd_*\n*Eg: _.delcmd Cmd_Name_*");
          }
        }
        if (global.setCmdAlias[Alias]) {
          await citel.send("*_\"" + (isSticker ? "Given Sticker" : Alias) + "\" deleted Succesfully at \"" + global.setCmdAlias[Alias] + "\" cmd_*");
          delete global.setCmdAlias[Alias];
          return;
        } else {
          return await citel.send("*_\"" + (isSticker ? "Given Sticker" : Alias) + "\" not Set for any cmd._*\n *_Please Provide Valid " + (isSticker ? "Sticker" : "Module_Exports Name") + " to delete_*");
        }
      });
