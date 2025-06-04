const { app, BrowserWindow, Menu } = require('electron');
const windowService = require('../services/windowService');
const { setupIpcHandlers } = require('../handler/ipcHandlers');
const { createMenu } = require('./menu');

// Initialize Application
app.whenReady().then(() => {
  windowService.createWindow();
  setupIpcHandlers();

  // Set the application menu
  Menu.setApplicationMenu(createMenu());
});

// Activated
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    windowService.createWindow();
  }
});

// Window All Closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
