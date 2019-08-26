const Loli = require("discord.js");
const loli = new Loli.Client();
const config = require("./config.json");
loli.on("guildMemberAdd", function(member) {
  let role = member.guild.roles.find("name", "🎧 Membro");
  member.addRole(role).catch(console.error);
});

let status = [
  {name: '🎶 música', type: 'LISTENING'},
  {name: `🎬 videos`, type: 'WATCHING'},
  {name: `Fortnite`, type: 'PLAYING'},
  {name: `Animes`, type: 'WATCHING'},
  {name: `FIFA 19`, type: 'PLAYING'},
 {name: `Criado por ${loli.users.get('234417232149479426').tag}`, type: 'STREAMING', url: 'https://www.twitch.tv/yooooyuu'},

];

//STREAMING = TRANSMITINDO
//LISTENING = OUVINDO
//PLAYING = JOGANDO
//WATCHING = ASSISTINDO


loli.on('ready', () => {
  console.log( `Carregado...! Olá mundo! Estou em ${loli.guilds.size} servers com ${loli.users.size} users` );
  console.log(`Thonk... ${loli.user.id} HSHSHJFKJKAKDJKFKKLk Diogo was here`)

  function setStatus() {
      let randomStatus = status[Math.floor(Math.random() * status.length)];
      client.user.setPresence({game: randomStatus});
  }

  setStatus();
  setInterval(() => setStatus(), 10000); //{1000/1s}\{10000/10s}\{100000/1m}
});
loli.on("message", async message => {

    if (message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
  
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
    }

  });
  
loli.login(process.env.TOKEN);
