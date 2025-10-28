// rpc.js
const RPC = require('discord-rpc-electron');
const DISCORD_CLIENT_ID = '1432830546031149146';
const rpc = new RPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log('RPC prêt (process séparé)');
  rpc.request('SET_ACTIVITY', {
    pid: process.pid,
    activity: {
      details: 'Joue à Lumerya',
      state: 'Dans le jeu',
      startTimestamp: Date.now(),
      largeImageKey: 'lunar_logo',
      largeImageText: 'Lumerya',
      smallImageKey: 'launcher_icon',
      smallImageText: 'Launcher',
      instance: false,
      buttons: [{ label: 'Visiter le site', url: 'https://test.exemple' }]
    }
  });
});

rpc.login({ clientId: DISCORD_CLIENT_ID }).catch(console.error);
