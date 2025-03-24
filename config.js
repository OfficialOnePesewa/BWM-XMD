const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7zqOXIVsKqrBlDxjojtbeo8RBIgyiWGgGKX/z6ldlf3w5wzPTylErL2ylpr7zeQ5aTAY1yDzhugjFSQ4/uS1xSDDrDKMMQMNAGCHIIOiAan1Ta3aMUuq/55maWrNluEKDb8gGI/6y96szg1AiFLohdwawJa7hMS/AFQCP2rySRJf23hAXOvQ96NNhNh2y+msb9Y0rYRDEb76a4l5i/gdkeEhJEs6tEYp5jBZIzrOSTse/QdSzhY3qsiVcsAJtKkIVX5ihMVZpj2rLa4N852Yp2Rk52/R98j/bk7CyyIPNVMWijuLqHbE18vEoskf6dNET9PqOOZUfCkX5Aow2iIcMYJr7+t+3o+CRvbrr9bbtwCxraljkhFQ1Vz53MzLbJcue4amj++ytPvEXfdaO1Lxqa1ci7bUyrgk3axoloTE7faMWJfGtUxWBZ6bR6/Ep+zj6wc/4/uhVWUM0NwPLOdct8fqcyTjNnY8JDRvc69/RTvJDI/irVQfI9+QgduWzzqCq391LLtnIiTtdXo6eIeNgJtJnePjTwXmeMMP+lDXrI/sUzk0TEtUZd1r8qEZBbdOMONGOxbvV1G9xcizhM41SjCtlOuW6kuL/wJTU9R2F9H3WAPzzYabS+Ougv2Xqxuu/We4YP58njREddDBDrirQkYjkjBGeQkzx57ehNAVPk4YJg/1AUnwZN22E2q1cg14/ZhMLbQ6tyzidpzJ3W4EEPPMM+eS3TzBTQBZXmAiwKjASl4zuopLgoY4QJ0/v7VBBm+8Kdv92qy2AQhYQV/zUqa5BB9mPpxCIMgLzPu11lg3xeYgY7wuY05J1lU3GUsM8iCmFTYjiEvQCeESYFvTYBwRQJ8xwMzL7+wvSN7w1PPz/qZUyzQ6/lOOc6z5y97LGiSIcs/FENXfyi6Bn8YUJB+aBgpbSS0tVDWQBOQ95a53/mtg/veCJVmMiJHRBuqrfWHJ7bsYdrQlYcLT+kxwwh0OCtxE+xhcCzpMj/i7A+4g4Zgjb1rz5lHrfU1iEYR56SvDfrdr7hPS0Hn7XNM2Tm64w2U8a4n6jZogvSRQHJ/uSTLqqIouqQYSqet/1X8PN+FhJT+zDC/476Lfr+BMIckKUAH2OOQndmw15vDQ6zpjmP2ItOOTPBp0kfYn2my5km0mhmj1Wowho3F8jSK2oZrUi8oXXaYDatFNF03ZDWW85d/AQEdsGrlOz60k1rercVr3M/lK3MG2ohR1dG67Y2Ur9TtsaokSjGkyB1C0RgawlidDcrDNlj3d7Jlq+XaLjcrHC8ozTd9+/xyr/YMy9di6yiVpZmPrkckR11dIHN4ULa+LrcEq15GUPF3l8AQ9gN73y6KSA7zsRYHp3imSF7fmVVqNNtsvOO4zyUsZNF1hKvDIXq24WMMJO/jlzw65O09WiHBj2mWwbtF/2XO15QLt+YXjPf5+JskWd5S3faXob9aLeq0Or62ydatltH4dTA5nJSrPxG23X7FG1vUBrfbryagCeRhzlLQATBDLCcINEECC25+NuqSpLjgMKWgI2qKpKtSW5SaIK1NSn0O+Ud/A/P+TU8I3P4B9qo5cfoHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "OfficialOnePesewa",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " OfficialOnePesewa",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'OP_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

