"use strict";

const fs = require("fs").promises;
const fileName = "data.txt";

const getData = async () => {
    let response;
    await fs.readFile(fileName, "utf-8")
        .then( data => {
            console.log("getData: ", data);
            console.log("**getData completed successfully");
            if(data == ""){
                data = JSON.stringify([{noData: true}]);
            } 
           response = data;
        })
        .catch(err => {
            console.log("**getData encountered an error: ", err.message);
        });

    return response;
};


module.exports = {
    getData
}
