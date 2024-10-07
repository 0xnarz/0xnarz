// Check if posts exist in localStorage, if not, create an empty array
let posts = JSON.parse(localStorage.getItem('posts')) || [];

// Function to display posts
function displayPosts() {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postTime = document.createElement('div');
        postTime.classList.add('post-time');
        postTime.innerText = post.time;

        const postContent = document.createElement('div');
        postContent.innerText = post.content;

        postDiv.appendChild(postTime);
        postDiv.appendChild(postContent);

        postContainer.appendChild(postDiv);
    });
}

// Display posts on homepage
if (document.getElementById('post-container')) {
    displayPosts();
}

// Admin Post Functionality
if (document.getElementById('post-button')) {
    document.getElementById('post-button').addEventListener('click', function () {
        const postContent = document.getElementById('post-content').value;
        const time = new Date().toLocaleString();

        if (postContent) {
            posts.push({ content: postContent, time: time });
            localStorage.setItem('posts', JSON.stringify(posts));
            alert('Post published!');
            document.getElementById('post-content').value = '';
        } else {
            alert('Please write something to post.');
        }
    });
}
