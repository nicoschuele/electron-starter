# Electron-Starter

A basic app to get you started with [Electron](http://electron.atom.io) development, a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. 

## Install

First, make sure that both [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com) are installed on your machine (npm comes with the default installation of Node.js).

Then, you need to clone the repository:

`git clone https://github.com/nicoschuele/electron-starter.git`

Once the repository is on your machine, install the dependencies from within the directory with:

`npm install`

To start the app, run it with `npm start`.

To build a Mac `.app` executable, you can simply run `npm run build`. It will use [electron-packager](https://github.com/electron-userland/electron-packager) to compile your app and place it within `Electron-Starter-darwin-x64\`.

If you use Electron-Starter to start a new project, don't forget to `rm -rf .git` before adding your project to Git again with `git init`.

## License

MIT © 2016 Nico Schuele
