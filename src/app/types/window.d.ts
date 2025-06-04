declare global {
    interface Window {
        api: {
            /** Electron ipcRenderer wrapper of send method */
            electronIpcSend: (channel: string, ...arg: any) => void;
            /** Electron ipcRenderer wrapper of sendSync method */
            electronIpcSendSync: (channel: string, ...arg: any) => any;
            /** Electron ipcRenderer wrapper of on method */
            electronIpcOn: (channel: string, listener: (event: any, ...arg: any) => void) => void;
            /** Electron ipcRenderer wrapper of onOnce method */
            electronIpcOnce: (channel: string, listener: (event: any, ...arg: any) => void) => void;
            /** Electron ipcRenderer wrapper of removeListener method */
            electronIpcRemoveListener: (channel: string, listener: (event: any, arg: any) => void) => void;
            /** Electron ipcRenderer wrapper of removeAllListeners method */
            electronIpcRemoveAllListeners: (channel: string) => void;
        };
        electron: {
            requestSystemInfo: () => void;
            onSystemInfo: (callback: (data: string) => void) => void;
            toggleDevTools: () => void;
        };
        electronAPI: {
            readDirectory: (path: string) => Promise<any>;
            selectDirectory: () => Promise<string>;
            openFile: (path: string) => Promise<void>;
            readFileContent: (path: string) => Promise<string>;
            getCurrentDirectory: () => Promise<string>;
            getHomeDirectory: () => Promise<string>;
            searchFiles: (directory: string, query: string) => Promise<any[]>;
            canGoBack: () => Promise<boolean>;
            goBack: () => Promise<string>;
            canGoUp: (path: string) => Promise<boolean>;
            getParentDirectory: (path: string) => Promise<string>;
            checkPathExists: (path: string) => Promise<boolean>;
            isDirectory: (path: string) => Promise<boolean>;
            openFileWithApp: (path: string) => Promise<void>;
            getPlatform: () => string;
            copyItem: (sourcePath: string) => Promise<Buffer>;
            pasteItem: (sourcePath: string, destinationPath: string) => Promise<void>;
            renameItem: (oldPath: string, newPath: string) => Promise<void>;
            deleteItem: (path: string) => Promise<void>;
            readImageFile: (path: string, highQuality: boolean) => Promise<Buffer>;
            readRawFile: (path: string) => Promise<Buffer>;
            showAboutDialog: () => Promise<void>;
        };
    }
}

export {}; 