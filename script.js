const container = document.querySelector(".container");
let page = 1;
let limit = 10;

async function getPosts() {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );

  const data = await res.json();

  return data;
}

async function showPosts() {
  const posts = await getPosts();
  console.log(posts);

  posts.forEach((post) => {
    console.log(post);

    const newDiv = document.createElement("div");
    const number = document.createElement("div");
    const heading = document.createElement("h2");
    const text = document.createElement("p");

    newDiv.classList.add("tab");
    number.classList.add("number");
    heading.classList.add("title");
    text.classList.add("body");

    number.textContent += post.id;
    heading.textContent += post.title;
    text.textContent += post.body;

    newDiv.appendChild(number);
    newDiv.appendChild(heading);
    newDiv.appendChild(text);
    container.appendChild(newDiv);
  });
}

showPosts();
