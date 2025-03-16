const backgroundColorBtn = document.querySelector(".change-background-color");
const resetBtn = document.querySelector(".reset");
const bodyTag = document.querySelector("body");
const headingTag = document.querySelector("h1");


if (localStorage.getItem("background-color")) {
    try {
        bodyTag.style.backgroundColor = localStorage.getItem("background-color");
    } catch (err) {
        console.warn("Warning: ", err.message);
    }
}
if (localStorage.getItem("heading-color")) {
    try {
        headingTag.style.color = localStorage.getItem("heading-color");
    } catch (err) {
        console.warn("Warning: ", err.message);
    }
}

function changeBackgroundColor() {
    try {
        const colors = ["beige", "black", "navy", "pink", "red", "purple"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        if (!localStorage.getItem("background-color")) {
            localStorage.setItem("background-color", randomColor);
            bodyTag.style.backgroundColor = localStorage.getItem("background-color");
        }
        if (!localStorage.getItem("heading-color")) {
            localStorage.setItem("heading-color", "white");
            headingTag.style.color = localStorage.getItem("heading-color");
        }

        //update heading and background element colors
        if (bodyTag.style.backgroundColor === "beige") {
            localStorage.removeItem("heading-color");
            localStorage.removeItem("background-color")

            localStorage.setItem("heading-color", "navy")
            headingTag.style.color = localStorage.getItem("heading-color");
            localStorage.setItem("background-color", randomColor);
            bodyTag.style.backgroundColor = localStorage.getItem("background-color");

        }
        else if (bodyTag.style.backgroundColor === "black") {
            localStorage.removeItem("heading-color");
            localStorage.removeItem("background-color")

            localStorage.setItem("heading-color", "white");
            headingTag.style.color = localStorage.getItem("heading-color");
            localStorage.setItem("background-color", randomColor);
            bodyTag.style.backgroundColor = localStorage.getItem("background-color");

        }
        else if (bodyTag.style.backgroundColor === "navy") {
            localStorage.removeItem("heading-color");
            localStorage.removeItem("background-color")

            localStorage.setItem("heading-color", "white");
            headingTag.style.color = localStorage.getItem("heading-color");
            localStorage.setItem("background-color", randomColor);
            bodyTag.style.backgroundColor = localStorage.getItem("background-color");


        }
        else if (bodyTag.style.backgroundColor === "pink") {
            localStorage.removeItem("heading-color");
            localStorage.removeItem("background-color")

            localStorage.setItem("heading-color", "white")
            headingTag.style.color = localStorage.getItem("heading-color");
            localStorage.setItem("background-color", randomColor);
            bodyTag.style.backgroundColor = localStorage.getItem("background-color");

        }
        else if (bodyTag.style.backgroundColor === "red") {
            localStorage.removeItem("heading-color");
            localStorage.removeItem("background-color")

            localStorage.setItem("heading-color", "white");
            headingTag.style.color = localStorage.getItem("heading-color");
            localStorage.setItem("background-color", randomColor);
            bodyTag.style.backgroundColor = localStorage.getItem("background-color");

        }
        else if (bodyTag.style.backgroundColor === "purple") {
            localStorage.removeItem("heading-color");
            localStorage.removeItem("background-color")

            localStorage.setItem("heading-color", "white")
            headingTag.style.color = localStorage.getItem("heading-color");
            localStorage.setItem("background-color", randomColor);
            bodyTag.style.backgroundColor = localStorage.getItem("background-color");
        }
    } catch (err) {
        console.warn("Warning: ", err.message);
    }
}

function reset() {
    try {
        //clear localstorage
        localStorage.removeItem("background-color")
        localStorage.removeItem("heading-color");

        bodyTag.style.backgroundColor = "white";
        headingTag.style.color = "black";
    } catch (err) {
        console.warn("Warning: ", err.message);
    }
}

backgroundColorBtn.addEventListener("click", changeBackgroundColor);
resetBtn.addEventListener("click", reset);