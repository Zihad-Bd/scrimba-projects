const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const containerElement = document.getElementById("container");
let contentOfContainer = "";
for (let i = 0; i < posts.length; ++i) {
    contentOfContainer += `<section>
                                <header>
                                    <img src="${posts[i].avatar}" alt="${posts[i].name} avatar"
                                        class="avatar">
                                    <div class="identity">
                                        <h1>${posts[i].name}</h1>
                                        <h2>${posts[i].location}</h2>
                                    </div>
                                </header>
                                <img src="${posts[i].post}" alt="${posts[i].name} oldagram" id="person-${i + 1}-img">
                                <div class="icons">
                                    <img src="images/icon-heart.png" alt="heart icon" class="icon heart" id="person-${i + 1}-heart">
                                    <img src="images/icon-comment.png" alt="comment icon" class="icon">
                                    <img src="images/icon-dm.png" alt="dm icon" class="icon">
                                </div>
                                <h1 class="like" id="person-${i + 1}-like">
                                    ${posts[i].likes} likes
                                </h1>
                                <footer>
                                    <h1>${posts[i].username} <span>${posts[i].comment}</span></h1>
                                </footer>
                                </section>`;
}
containerElement.innerHTML = contentOfContainer;

const person1HeartElement = document.getElementById("person-1-heart");
person1HeartElement.addEventListener("dblclick", function() {
    const person1LikeElement = document.getElementById("person-1-like");
    const presentLike = parseInt(person1LikeElement.textContent);
    person1LikeElement.textContent = `${presentLike + 1} likes`;
})

const person2HeartElement = document.getElementById("person-2-heart");
person2HeartElement.addEventListener("dblclick", function() {
    const person2LikeElement = document.getElementById("person-2-like");
    const presentLike = parseInt(person2LikeElement.textContent);
    person2LikeElement.textContent = `${presentLike + 1} likes`;
})

const person3HeartElement = document.getElementById("person-3-heart");
person3HeartElement.addEventListener("dblclick", function() {
    const person3LikeElement = document.getElementById("person-3-like");
    const presentLike = parseInt(person3LikeElement.textContent);
    person3LikeElement.textContent = `${presentLike + 1} likes`;
})

const person1imgElement = document.getElementById("person-1-img");
person1imgElement.addEventListener("dblclick", function() {
    const person1LikeElement = document.getElementById("person-1-like");
    const presentLike = parseInt(person1LikeElement.textContent);
    person1LikeElement.textContent = `${presentLike + 1} likes`;
})

const person2imgElement = document.getElementById("person-2-img");
person2imgElement.addEventListener("dblclick", function() {
    const person2LikeElement = document.getElementById("person-2-like");
    const presentLike = parseInt(person2LikeElement.textContent);
    person2LikeElement.textContent = `${presentLike + 1} likes`;
})

const person3imgElement = document.getElementById("person-3-img");
person3imgElement.addEventListener("dblclick", function() {
    const person3LikeElement = document.getElementById("person-3-like");
    const presentLike = parseInt(person3LikeElement.textContent);
    person3LikeElement.textContent = `${presentLike + 1} likes`;
})

