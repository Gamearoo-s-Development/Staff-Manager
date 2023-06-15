const { Client, GatewayIntentBits, Partials } = require("discord.js");
let helper = require("discord-helper.js");
const { token } = require("../../config");

class BotClient extends Client {
    constructor() {
        super({
            intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
            partials: [Partials.User],
        })

       
    }
    start() {
        this.once("ready", async () => {
            await new helper.Client("Auto Systems", this).executeconsole("info", "Bot Online");
            this.user.setPresence({activities: [{name: "On Gamearoo's Servers"}], status: "dnd"});
        });

        this.login(token);
    }
}


module.exports = {
    BotClient
}