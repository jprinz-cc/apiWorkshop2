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

const postData = async (data) => {
    let post = data;
    await fs.readFile(fileName, "utf-8")
        .then( data => {
            console.log("postedData: ", post);
            console.log("postData: ", data);
            let posts = [];
            if(data == ""){
                posts[0] = post;
                console.log("post1: ", posts);
            } else {
                posts = JSON.parse(data);
                posts[posts.length] = post;
                console.log("post2: ", posts);
            }
            fs.writeFile(fileName, JSON.stringify(posts))           

        })
        .then(() => {
            post.success = true;
            console.log("**Post Data Saved Successfully** ", post);
            post = JSON.stringify(post);
        })
        .catch(err => {
            console.log("**getData encountered an error: ", err.message);
        });
    return post;
}


module.exports = {
    getData,
    postData
}
