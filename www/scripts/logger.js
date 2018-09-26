"use strict";

//function teste(){ return true}
//module.exports.teste = teste;

const fs = require('fs');
//let obj = JSON.parse(fs.readFileSync(path, "utf8"));

function Logger() {

    //this.teste = "asd";


    if (Logger.__initialized__ === undefined) {

        Logger.prototype.isEnabled = function () {
            return Logger.prototype.enabled;
        }
        Logger.prototype.setEnabled = function (bool) {
            if (typeof bool === "boolean"){
                Logger.prototype.enabled = bool;
            }
        }
        Logger.prototype.writeToLogger = function (message) {
            if(Logger.prototype.enabled){

                
                //fs.write


            }
        }

        Logger.__initialized__ = true;
    }
}
Logger.prototype.enabled = true;


module.exports.Logger = Logger;