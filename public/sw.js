if ('serviceWorker' in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
        .register("cached.js")
        .then(reg => console.log("sw succesfully registered.")) 
        .catch(err => console.log(`sw error: ${err}`))
    })
}