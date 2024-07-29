"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  const btnGetPosts = document.querySelector("#btnGetPosts");
  const btnCreatePost = document.querySelector("#btnCreatePost");

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

  const createPost = () => {
	const inputTitle = document.querySelector("#title");
	const inputBody = document.querySelector("#body");
	const msgCreatePost = document.querySelector('#msgCreatePost');

	const settings = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({title: inputTitle.value, body: inputBody.value})
	};

	fetch('/api/post', settings)
		.then(response => response.json())
		.then(data => {
			const post = JSON.parse(data);
			console.log("post: ", post);
			if(post.success){
				msgCreatePost.innerHTML = `PostTitle: ${post.title} -- PostBody: ${post.body}`;
			} else {
				msgCreatePost.innerHTML = "There was an error with the post data, please try again";
			}
			
		});
}

  btnGetPosts.addEventListener("click", getPosts);
  btnCreatePost.addEventListener("click", createPost);
});
