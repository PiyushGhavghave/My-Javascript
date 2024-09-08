let posts = [
    {
        title : "Post 1",
        description : " This is post 1"
    },
    {
        title : "Post 2",
        description : " This is post 2"
    }
]

// ******** Task: Add new post and after that display post *********

function getpost(){
    document.body.innerHTML = `Loading posts...`;
    setTimeout(() => {
        let content = '';
        posts.forEach((post, index) => {
            content += `<li> ${post.title} </li>`;
            document.body.innerHTML = content;
        })
    }, 1000)
}



function addPost(post, callbackFunc){
    document.body.innerHTML = `Adding new posts...`;
    setTimeout(() => {
        posts.push(post);
        callbackFunc();
    }, 2000);
    
}

addPost({
    title : "Post 3",
    description : " This is post 3"
},getpost)      //No brackets.... only pass reference
