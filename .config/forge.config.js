module.exports = {
    "hooks": {
        generateAssets: async function () {
            console.log("\nGENERATING ASSETS\n");  
        },
        prePackage: async function () {
            console.log("\nPRE PACKAGING\n");
        },
        postPackage: async function () {
            console.log("\nPOST PACKAGING\n");  
        },
        preMake: async function () {
            console.log("\nPRE MAKING\n");
        },
        postMake: async function () {
            console.log("\nPOST MAKING\n");
        }
    },
    mac: {
        target: {
            target: 'default',
            arch: [
                'x64',
                'arm64',
                'universal'
            ]
        },
    },
    "make_targets": {
        "win32": [ "squirrel" ],
        "darwin": [ "zip", "dmg" ],
        "linux": [ "deb", "rpm" ]
    },
    "github_repository": {
        "owner": "robjporter",
        "name": "electron-app-2"
    },
    "packagerConfig": {
        "name": "ElectronApp2",
        "executableName": "electron-app",
        "icon": "assets/icon",
        "extraResource": [
            "assets"
        ]
    },
    "publishers": [
        {
            "name": "@electron-forge/publisher-github",
            "config": {
                "repository": {
                    "owner": "robjporter",
                    "name": "electron-app-2",
                    "draft": false
                },
                prerelease: true
            }
        }
    ],
    "electronPackagerConfig": {
        "packageManager": "yarn"
    },
    "plugins": [
        [
            "@electron-forge/plugin-webpack",
            {
                "mainConfig": "./webpack/main.webpack.js",
                "renderer": {
                    "config": "./webpack/renderer.webpack.js",
                    "entryPoints": [
                        {
                            "html": "./public/index.html",
                            "js": "./src/index.tsx",
                            "name": "main_window",
                            "preload": {
                                "js": "./electron/bridge.ts"
                            }
                        }
                    ]
                }
            }
        ]
    ],
    "makers": [
        {
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "name": "Electron Starter"
            }
        },
        {
            "name": "@electron-forge/maker-zip",
            "platforms": [
                "darwin",
                "linux"
            ]
        },
        {
            "name": "@electron-forge/maker-deb",
            "config": {}
        },
        {
            "name": "@electron-forge/maker-rpm",
            "config": {}
        },
        {
            "name": "@electron-forge/maker-dmg",
            "config": {
                format: 'ULFO',
            }
        }
    ]
};