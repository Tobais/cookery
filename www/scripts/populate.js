/**
	Script to populate html with chosen language
*/
"use strict";

//const {session} = require('electron');
const { remote } = require("electron");
/*const session = remote.session;
session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
	callback({ responseHeaders: `default-src 'none'` })
})*/

function loadLanguageJSON() {
	const app = remote.app;
	const fs = require("fs");
	const logger = require("../scripts/logger.js");

	//testes
	let l1 = new logger.Logger();
	logger.Logger.prototype.enabled = false;

	let l2 = new logger.Logger();

	//alert(typeof logger.logger);

	/* 1º ler settings, e só depois verificar locale */
	const settingsPath = "./www/settings/settings.json";
	const settings = JSON.parse(fs.readFileSync(settingsPath, "utf8"));

	let language;
	if(settings.settings.default){		// First time the program is run
		language = app.getLocale();
		settings.settings.language = language;
		settings.settings.default = false;
		fs.writeFile(settingsPath, JSON.stringify(settings, null, 4), (err) => {
			if (err) throw err;
		});
	} else {
		language = settings.settings.language;
	}
	const languagePath = "./www/languages/" + language + ".json";
	const siteContent = JSON.parse(fs.readFileSync(languagePath, "utf8"));

	// Main Menu
	document.getElementById("mainMenuItem01").childNodes[0].innerText = siteContent.menu.recipes;
	document.getElementById("mainMenuItem02").childNodes[0].innerText = siteContent.menu.ingredients;
	document.getElementById("mainMenuItem03").childNodes[0].innerText = siteContent.menu.settings;
}



module.exports.loadLanguageJSON = loadLanguageJSON;