"use strict";

/**
 * Conjunto de funções que são executadas quando o evento onload da janela é despoletado.
 */
window.onload = function () {
    const populate = require("../www/scripts/populate.js");
    populate.loadLanguageJSON();

	//addEvents();
}

/**
 * Função para adicionar eventos onclick aos elementos da lista de navegação.
 */
function addEvents() {
    /*document.getElementsByTagName("body").addEventListener("click", function (event) { displayMenuItem("menuHome", "#b53b12", event) }, false);

	document.getElementById("competitionType").addEventListener("change", setAddToCompetitionForm, false);*/
}