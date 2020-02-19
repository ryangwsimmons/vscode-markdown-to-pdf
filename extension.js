// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

//Import fs module and reference it with the alias fs
const fs = require('fs');

//Import puppeteer module and reference it with the alias puppeteer
const puppeteer = require('puppeteer');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let createPDF = vscode.commands.registerCommand('markdown-to-pdf.createpdf', function () {
		//Execute the command from Markdown All-In-One to convert Markdown to HTML
		vscode.commands.executeCommand('markdown.extension.printToHtml');

		//Get the path of the HTML document
		let mdPath = vscode.window.activeTextEditor.document.fileName;
		let htmlPath = mdPath.substring(0, mdPath.lastIndexOf(".")) + ".html";

		//Get the path of the PDF document
		let pdfPath = htmlPath.substring(0, htmlPath.lastIndexOf(".")) + ".pdf";

		//Define function for converting HTML document to PDF
		let toPDF = async function() {
			const browser = await puppeteer.launch();
			const document = await browser.newPage();
			await document.goto("file://" + htmlPath);
			await document.pdf({
				path: pdfPath,
				format: 'Letter'
			});
			await browser.close();
		};

		//Convert the HTML document to a PDF
		try{
			toPDF();
			
			//Delete the HTML document
			fs.unlinkSync(htmlPath);
		}
		catch (err) {
			vscode.window.showErrorMessage("Could not convert Markdown to PDF.");
			console.log(err);
		}
	});

	context.subscriptions.push(createPDF);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
