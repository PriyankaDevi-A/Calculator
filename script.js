

// document.addEventListener("DOMContentLoaded", function() {
//     let outputScreen = document.getElementById("output");

//     function display(num) {
//         outputScreen.value += num;
//     }

//     function calculate() {
//         try {
//             outputScreen.value = eval(outputScreen.value);
//         } catch (err) {
//             alert("Invalid");
//         }
//     }

//     function clearScreen() {
//         outputScreen.value = "";
//     }

//     function del() {
//         outputScreen.value = outputScreen.value.slice(0, -1);
//     }

//     document.getElementById("clear").addEventListener("click", clearScreen);
//     document.getElementById("del").addEventListener("click", del);

//     document.querySelectorAll(".display").forEach(function(button) {
//         button.addEventListener("click", function() {
//             display(button.getAttribute("data-num"));
//         });
//     });

//     document.querySelector(".equal").addEventListener("click", calculate);
// });


document.addEventListener("DOMContentLoaded", function() {
    let outputScreen = document.getElementById("output");

    function display(num) {
        outputScreen.value += num;
    }

    function calculate() {
        try {
            outputScreen.value = eval(outputScreen.value);
        } catch (err) {
            alert("Invalid");
        }
    }

    function clearScreen() {
        outputScreen.value = "";
    }

    function del() {
        outputScreen.value = outputScreen.value.slice(0, -1);
    }

    document.getElementById("clear").addEventListener("click", clearScreen);
    document.getElementById("del").addEventListener("click", del);

    document.querySelectorAll(".display").forEach(function(button) {
        button.addEventListener("click", function() {
            display(button.getAttribute("data-num"));
        });
    });

    document.querySelector(".equal").addEventListener("click", calculate);
});
