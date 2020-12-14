# Dad5Bot 
A discord bot made for and by Dat5 to have fun and experiment with.

Created with [Discord.js](https://discord.js.org/#/).
To get understanding of the project, please follow [this guide](https://discordjs.guide/).

# Getting started
These are the pre-requisites for running the bot. There are installation instructions below, however, you should have setup an application & bot in the discord developer controls.

Furthermore, setting up a separate server on Discord just for testing the bot is a good idea.

## 1. Creating A Bot For Testing
These are the steps you should complete before installing any software.
1. Set up a discord testing server (simply create a new server with only you in it)
2. Create a discord app
3. Create a bot
4. Add your bot to your test server (there are multiple steps to this)
    1. Obtain your application client ID in discord's developer overview
    2. Replace `YOUR_CLIENT_ID` with your actual discord application client ID you just obtained in the following string:
    `https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot`
    and paste that into your browser. This will prompt you to log in so you can choose which server to add your bot to.

Please check out the [discord.js guide](https://discordjs.guide) if you're unsure on how to get started or if you're stuck (see subsections of Installations and Preparations).

## 2. Installation
- Install node.js
- Run `npm install` in the root of the project directory
- Set up a `.env`-file. Refer to [.env_sample](.env_sample). Please note, that only `PREFIX` and `BOT_TOKEN` are required at this stage.
- Run `npm run watch`. This will watch the project files for changes and run the bot with those changes. *Note: This will take up your terminal, so you may want to open a new one.*

Note: `npm run build` will compile the project and throw any errors explicitly.

----

## Dependencies
- [Node.js](https://nodejs.org/)
- [Mongodb](https://www.mongodb.com)
