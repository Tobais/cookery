'use strict';

const {app} = require('electron');

app.on('ready', () => {
    const {BrowserWindow, screen} = require('electron');
    const {width, height} = screen.getPrimaryDisplay().workAreaSize;




    const mainWindow = new BrowserWindow({
      show: false,
      width,
      height,
      title: 'Cookery',
    });
    mainWindow.once('ready-to-show', () => {
      mainWindow.show();
    })
    mainWindow.loadFile('./www/index.html');
    
})