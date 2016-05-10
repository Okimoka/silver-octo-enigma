const http = require('http');

http.get('http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=440&key=F083BE198D2AE464FCC8510C9717D149&steamid=76561198080110235', (res) => {
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});