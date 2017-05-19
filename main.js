// ────────────────────────────────────────────────────────────────────────────────
// MODULES

const path = require('path');
const {app, BrowserWindow} = require('electron');
const installExt = require('electron-devtools-installer');

// Install `electron-debug` with `devtron`
require('electron-debug')({ showDevTools: true });

// Install `vue-devtools`
app.on('ready', () => {
  if (process.env.NODE_ENV === 'development') {
    installExt.default(installExt.VUEJS_DEVTOOLS)
    .then(name => console.log(`Added Extensions: ${name}`))
    .catch(err => console.log('Unable to install devtools: ', err));
  }
});

// ────────────────────────────────────────────────────────────────────────────────

let mainWindow;

const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${process.env.PORT}`
  : `file://${__dirname}/index.html`

function createWindow() {
  mainWindow = new BrowserWindow({width: 1500, height: 1000});
  mainWindow.loadURL(winURL);
  mainWindow.on('closed', () => { mainWindow = null; });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) { createWindow(); }
});
