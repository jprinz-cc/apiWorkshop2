"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  const btnGetPosts = document.querySelector("#btnGetPosts");

  const getPosts = () => {
    const settings = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    fetch("/api/posts", settings)
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        const posts = JSON.parse(data);
        const resultTable = document.querySelector("#resultTable");

        if (posts[0].noData) {
          resultTable.innerHTML = "";
          resultTable.style.display = "block";
          let row = resultTable.insertRow(0);
          let cell = row.insertCell(0);
          cell.innerHTML = "No Posts";
        } else {
          resultTable.innerHTML = "";
          resultTable.style.display = "block";
          for (let i = 0; i < posts.length; i++) {
            let row = resultTable.insertRow(i);
            let cellTitle = row.insertCell(0);
            let cellBody = row.insertCell(1);
            cellTitle.innerHTML = posts[i].title;
            cellBody.innerHTML = posts[i].body;
          }
        }
      });
  };

  btnGetPosts.addEventListener("click", getPosts);
});
