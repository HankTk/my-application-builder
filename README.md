# My Application Builder

A modern desktop application template built with Angular 19 and Electron, providing a foundation for creating cross-platform desktop applications.

## Features

- Modern and responsive user interface using Angular Material
- Cross-platform support (Windows, macOS, Linux)
- Secure file system access through Electron's IPC
- Multi-language support (English/Japanese)
- Development tools integration (ESLint, Prettier)
- TypeScript support
- Hot reloading in development
- Production build optimization
- Icon generation support
- Code formatting and linting

## Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)
- Angular CLI (v19 or later)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-application-builder
```

2. Install dependencies:
```bash
npm install
```

## Development

To run the application in development mode:

```bash
npm run electron:serve
```

This will:
1. Start the Angular development server
2. Launch the Electron application
3. Enable hot reloading for development

## Building for Production

To create a production build:

```bash
npm run electron:build
```

This will:
1. Build the Angular application in production mode
2. Package the application with Electron
3. Generate distributable files in the `release` directory

### Build Output

The build process generates the following files:
- `release/mac-arm64/My Application.app` - macOS application bundle
- `release/My Application-0.0.0-arm64.dmg` - macOS DMG installer
- `release/My Application-0.0.0-arm64-mac.zip` - macOS ZIP archive

## Project Structure

```
my-application-builder/
├── src/                    # Angular application source
│   ├── app/               # Application components and services
│   ├── assets/            # Static assets
│   └── styles.css         # Global styles
├── electron/              # Electron main process files
│   ├── main/             # Main process entry point
│   ├── services/         # Electron services
│   ├── handler/          # IPC handlers
│   ├── preload/          # Preload scripts
│   └── constant/         # Constants and configurations
├── scripts/              # Build and utility scripts
├── documents/            # Project documentation
├── .angular/            # Angular build cache
├── .vscode/             # VS Code configuration
├── .idea/               # IntelliJ IDEA configuration
├── dist/                # Angular build output
└── release/             # Electron build output
```

## Development Tools

The project includes several development tools and configurations:

### Code Quality
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking

### Available Scripts
- `npm run electron:serve` - Start development server
- `npm run electron:build` - Build for production
- `npm run generate-icons` - Generate application icons
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Configuration Files

- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier configuration
- `.editorconfig` - Editor configuration
- `tsconfig.json` - TypeScript configuration
- `angular.json` - Angular configuration
- `package.json` - Project dependencies and scripts

## Dependencies

### Core Dependencies
- Angular 19.2.0
- Electron 28.3.3
- Angular Material 19.2.0
- @ngx-translate/core 16.0.4
- @ngx-translate/http-loader 16.0.1
- RxJS 7.8.1
- Sharp 0.33.5

### Development Dependencies
- TypeScript 5.5.0
- ESLint 9.24.0
- Prettier 3.5.3
- Electron Builder 24.13.3
- Angular CLI 19.2.0

## Security

The application implements several security measures:
- Context isolation enabled
- Node integration disabled
- Web security enabled
- Secure IPC communication between main and renderer processes

## License

This project is licensed under the MIT License - see the LICENSE file for details.


## Key Components

1. **FileExplorerComponent**
   - Main UI component handling user interactions
   - Manages file navigation and display
   - Handles language switching and settings

2. **FileExplorerService**
   - Core service for file system operations
   - Communicates with Electron backend
   - Handles file filtering and formatting

3. **FileItem**
   - Data model for file and directory items
   - Contains metadata like name, path, size, etc.

4. **ElectronAPI**
   - Interface for Electron backend communication
   - Handles native file system operations

5. **TranslationService**
   - Manages application translations
   - Supports multiple languages

## Dependencies

- Angular
- Electron
- Angular Material
- @ngx-translate/core
- @ngx-translate/http-loader

## Development

1. Install dependencies:
```bash
npm install
```

2. Run in development mode:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Electron and Angular Application Architecture

```mermaid
graph TB
    subgraph Angular["Angular Application (Renderer Process)"]
        FE[FileExplorerComponent]
        FES[FileExplorerService]
        FTS[FileThemeService]
        VAS[ViewActionService]
        CMS[ContextMenuService]
        DOS[DragOperationService]
        VTC[ViewTileComponent]
        VLC[ViewListComponent]
        VCC[ViewCarouselComponent]
        API[ElectronAPI Interface]
    end

    subgraph Electron["Electron (Main Process)"]
        Main[main.js]
        Preload[preload.js]
        IPC[ipcHandlers.js]
        FS[fileExplorerService.js]
        WS[windowService.js]
        NS[navigationService.js]
        SS[fileSearchService.js]
    end

    subgraph Native["Native System"]
        FileSystem[File System]
        Dialog[System Dialog]
        Shell[System Shell]
    end

    %% Angular Component Relationships
    FE --> FES
    FE --> FTS
    FE --> VAS
    VAS --> CMS
    VAS --> DOS
    VTC --> FES
    VTC --> VAS
    VLC --> FES
    VLC --> VAS
    VCC --> FES
    VCC --> VAS
    FES --> API

    %% Electron Bridge
    API --> Preload
    Preload --> IPC
    IPC --> Main

    %% Electron Service Relationships
    Main --> WS
    Main --> IPC
    IPC --> FS
    IPC --> NS
    IPC --> SS

    %% Native System Interactions
    FS --> FileSystem
    WS --> Dialog
    FS --> Shell

    classDef angular fill:#dd0031,stroke:#333,stroke-width:2px,color:white
    classDef electron fill:#47848f,stroke:#333,stroke-width:2px,color:white
    classDef native fill:#666,stroke:#333,stroke-width:2px,color:white

    class FE,FES,FTS,VAS,CMS,DOS,VTC,VLC,VCC,API angular
    class Main,Preload,IPC,FS,WS,NS,SS electron
    class FileSystem,Dialog,Shell native
```

The diagram above illustrates the architecture and communication flow between the Angular application and Electron:

1. **Angular Application (Renderer Process)**
   - `FileExplorerComponent`: Main UI component
   - `FileExplorerService`: Core service for file operations
   - `FileThemeService`: Theme management
   - `ViewActionService`: Service for handling view actions
   - `ContextMenuService`: Service for handling context menu actions
   - `DragOperationService`: Service for handling drag operations
   - `ViewTileComponent`: Component for displaying file tiles
   - `ViewListComponent`: Component for displaying file list
   - `ViewCarouselComponent`: Component for displaying file carousel
   - `ElectronAPI`: Interface for Electron communication

2. **Electron Bridge**
   - `preload.js`: Exposes safe IPC methods to renderer
   - `ipcHandlers.js`: Handles IPC communication
   - `main.js`: Main process initialization

3. **Electron Services**
   - `fileExplorerService.js`: File system operations
   - `windowService.js`: Window management
   - `navigationService.js`: Navigation handling
   - `fileSearchService.js`: File search functionality

4. **Native System**
   - File System: Direct file operations
   - System Dialog: Native dialogs
   - System Shell: External application launching

The communication flow:
1. Angular components call methods through the `ElectronAPI` interface
2. Calls are bridged through `preload.js` to the main process
3. `ipcHandlers.js` routes calls to appropriate services
4. Services interact with native system features
5. Results flow back through the same path to the Angular application

## Data Access Sequence

The application follows a well-defined data access sequence for the tile view:

1. Initialization:
   - Component initialization with event listeners
   - Scroll event setup for lazy loading
   - Service subscriptions for actions

2. User Interactions:
   - Item click handling with file type detection
   - Drag and drop operations
   - Context menu display
   - Scroll-based image loading

3. Image Loading:
   - Lazy loading of images based on viewport visibility
   - Image data retrieval through FileExplorerService
   - URL generation and caching
   - Error handling for failed image loads

4. Service Integration:
   - FileExplorerService for file operations
   - ViewActionService for user actions
   - ContextMenuService for menu management
   - DragOperationService for drag and drop



## Screenshots
