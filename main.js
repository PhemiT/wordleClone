const lettersGuide = /[a-z]/

document.addEventListener("keydown", (k) => {
    console.log("keypress" + k.key)


    let keypress = k.key
    if (keypress.length == 1) {
        let isLetter = lettersGuide.test(k.key)
        console.log(isLetter)
    }
    
})