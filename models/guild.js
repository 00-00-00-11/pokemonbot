const mongoose = require("mongoose");

const GuildSchema = new mongoose.Schema({
    id: { type: String, required: true },
    prefix: { type: String, default: "." },
    spawnchannel: { type: String, default: null },
    disabledChannels: { type: Array, default: [] },
    spawnbtn: { type: Boolean, default: true },
    levelupchannel: { type: String, default: null },
    levelupbtn: { type: Boolean, default: true },
    blacklist: {type: Boolean, default: false},
    time : {type: Boolean}
});

module.exports = mongoose.model("Guild", GuildSchema);