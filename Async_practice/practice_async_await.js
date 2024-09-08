function getData(response){
    document.body.innerHTML = `Loading Profile...`;
    setTimeout(() => {
        let content = '';
        response.forEach((profile, index) => {
            content += `<li> ${profile.name} </li>`;
            document.body.innerHTML = content;
        })
    }, 2000)
}




async function init() {
    document.body.innerHTML = "Fetching Data..."
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');     //fetch() returns promise
        const output = await response.json();
        getData(output);
    }
    catch(error){
        document.body.innerHTML = `ERROR!!! -> ${error}`
    }
}
init()