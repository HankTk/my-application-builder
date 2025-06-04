const { app, dialog, shell, Menu, screen, BrowserWindow } = require('electron');
const windowService = require('../services/windowService');
const path = require('path');
const os = require('os');

// Function to show about dialog
function showAboutDialog() {
  const systemInfo = {
    platform: process.platform,
    arch: process.arch,
    version: process.getSystemVersion(),
    totalMemory: (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2),
    freeMemory: (os.freemem() / (1024 * 1024 * 1024)).toFixed(2),
    hostname: os.hostname()
  };

  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const aboutWindow = new BrowserWindow({
    width: 600,
    height: 350,
    x: Math.floor((width - 600) / 2),
    y: Math.floor((height - 350) / 2),
    resizable: false,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: true,
    center: true,
    title: 'About',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  const aboutPath = path.join(__dirname, '../about.html');
  aboutWindow.loadFile(aboutPath).catch(err => {
    console.error('Error loading about.html:', err);
  });

  aboutWindow.webContents.on('did-finish-load', () => {
    aboutWindow.webContents.send('about-info', {
      title: 'About',
      ...systemInfo
    });
  });
}

function createMenu() {
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New Window',
          accelerator: process.platform === 'darwin' ? 'Cmd+N' : 'Ctrl+N',
          click: () => {
            windowService.createWindow();
          }
        },
        { type: 'separator' },
        {
          label: 'Open...',
          accelerator: process.platform === 'darwin' ? 'Cmd+O' : 'Ctrl+O',
          click: async () => {
            const result = await dialog.showOpenDialog({
              properties: ['openDirectory']
            });
            if (!result.canceled && result.filePaths.length > 0) {
              windowService.getMainWindow().webContents.send('open-directory', result.filePaths[0]);
            }
          }
        },
        { type: 'separator' },
        { role: 'quit', label: process.platform === 'darwin' ? 'Quit' : 'Exit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'close' }
      ]
    },
    {
      label: 'Help',
      submenu: [
        ...(process.platform !== 'darwin' ? [{
          label: 'About',
          click: showAboutDialog
        }] : []),
        {
          label: 'Documentation',
          click: async () => {
            await shell.openExternal('https://github.com/yourusername/my-application-builder');
          }
        },
        {
          label: 'Report Issue',
          click: async () => {
            await shell.openExternal('https://github.com/yourusername/my-application-builder/issues');
          }
        }
      ]
    }
  ];

  // Add macOS-specific menu items
  if (process.platform === 'darwin') {
    template.unshift({
      label: app.name,
      submenu: [
        {
          label: 'About',
          click: showAboutDialog
        },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    });
  }

  return Menu.buildFromTemplate(template);
}

module.exports = {
  createMenu
}; 