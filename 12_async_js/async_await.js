// ******** Task: Add new post and after that display post *********

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



//----> Promise : A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation

function addPost(post){
    document.body.innerHTML = `Adding new posts...`;
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            let err = false;   //Error while adding posts
            if(!err){
                resolve();  // Notify that the operation is complete
            }
            else{
                reject();
            }
        }, 2000);
    })
}

async function init() {
    await addPost({                   //addpost() returns promise
        title : "Post 3",
        description : " This is post 3"
    });
    getpost();
}
init()



