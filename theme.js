let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");
let themeUserInput = document.getElementById("themeUserInput");

let lightImg = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkImg = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";


function printKeydown(event) {
    if (event.key === "Enter") {
        let themeUserInputVal = themeUserInput.value;

        if (themeUserInputVal === "Light") {
            bgContainer.style.backgroundImage = lightImg;
            heading.style.color = "#014d40";
        } else if (themeUserInputVal === "Dark") {
            bgContainer.style.backgroundImage = darkImg;
            heading.style.color = "#ffffff";
        } else {
            alert("Enter the valid theme");
        }
    }
}
themeUserInput.addEventListener("keydown", printKeydown);