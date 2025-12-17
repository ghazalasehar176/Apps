let btn = document.querySelector("button");
let input = document.getElementById("date");
let text = document.querySelector(".text");

btn.addEventListener("click", function () {
    let dob = new Date(input.value);
    let today = new Date();

    let y = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();
    let d = today.getDate() - dob.getDate();

    if (d < 0) {
        m--;
        d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (m < 0) {
        y--;
        m += 12;
    }

    text.innerHTML = `<h3>Your are <span class ="year">${y} </span>year , <span class ="year">${m}</span> months and <span class = "year"> ${d} </span> days old</h3>`;
});