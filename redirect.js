var redirectDB = [
    {
        id: "g",
        redirectURL: "https://www.google.com"
    }, 
    {
        id: "i",
        redirectURL: "https://www.instagram.com"
    }
]

let params = new URLSearchParams(document.location.search);
let target = params.get("t");

redirectDB.forEach(elem => {
    if (target == elem.id) {
        window.location.replace(elem.redirectURL)
    }
})