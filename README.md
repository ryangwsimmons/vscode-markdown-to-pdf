# Markdown to PDF

A Visual Studio Code extension that converts markdown files to PDFs. Supports math notation.

## Dependencies

- ["Markdown All-In-One" VS Code extension by Yu Zhang](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- ["puppeteer" Node.js module](https://www.npmjs.com/package/puppeteer)

## Usage
When working in a Markdown document, open the command palette (Ctrl + Shift + P), and run the "Create PDF from Markdown" command. The Markdown will be converted, and a PDF will be placed in the same directory.

## Installation
First, download a `.VSIX` file from the [releases](https://github.com/ryangwsimmons/vscode-markdown-to-pdf/releases) page. Then follow the steps below:

In VS Code:
- Go to the extensions menu (Ctrl + Shift + X)
- Click '...' in the top-right hand corner of the menu
- Click 'Install from VSIX...'
- Browse to where you downloaded the VSIX extension
- Wait for installation to complete (may take a while (5 - 6 minutes), due to the nature of this project and its dependencies it's difficult to bundle the VSIX to save space)

In some cases, if the extension doesn't work you may need to build the extension yourself in order to download the correct native modules:
- Ensure you have npm installed
- Clone/Download the repo
- In the repo folder, run `npm install`
- Install the vsce Node.js module: `npm install -g vsce`
- Run the command to package the extension: `vsce package`
- Follow the steps above to install the resulting VSIX in VS Code
