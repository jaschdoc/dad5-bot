# Dad5Bot 
A discord bot for Klandringer   
Created with [Discord.js](https://discord.js.org/#/).
To get understanding of the project, please follow [this guide](https://discordjs.guide/)

# Getting started
These are the pre-requisites for running the bot. There are installation instructions below, however, you should have setup an application & bot in the discord developer controls.

Furthermore, setting up a separate server on Discord just for testing the bot is a good idea.

These are the steps you should complete before installing any software.
1. Set up a discord testing server (simply create a new one with only you in it)
2. Create a discord app
3. Create a bot
4. Add your bot to your test server (there are multiple steps to this)
    1. Obtain your application client ID in discord's developer overview
    2. Replace `YOUR_CLIENT_ID` with your actual discord application client ID you just obtained in the following string:
    `https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot`

Please check out the [discord.js guide](https://discordjs.guide) if you're unsure on how to get started or if you're stuck (see subsections of Installtions and Preparations).

# Dependencies
- [Node.js](https://nodejs.org/)
- [Mongodb](https://www.mongodb.com)

# Usage
To run this bot do either of the follwing:

### Without docker and docker-compose
- Install node.js
- Install mongodb
- OPTIONAL: `npm install nodemon --global` If you want nodemon to rerun bot on file changes
- `npm install`
- Setup `config.json_template` and rename to `config.json` 
- Run instance of `mongod`
- Run `mongo < dbsetup.js`
- Run `node bot.js` or `nodemon bot.js`

### With docker and docker-compose
This is experimental
- Setup `config.json_template` and rename to `config.json`
    - Note: The token is found in discord's developer controls under your application's bot
- Run `docker-compose up`
- Run `docker-compose exec mongodb mongo < dbsetup.js` (Only on first run)
- Run `docker-compose down` to stop the bot

### Nodemon configuration
If using nodemon (The docker setup does so), you can setup [nodemon.json](./nodemon.json) to watch files and automatically reload them on save.
To do so, delete the line `"ignore":"[*]"` and add files/paths to watch to `watch`.
