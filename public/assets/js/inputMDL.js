/**
 * --------------------------
 * ANIMACION INPUT
 * --------------------------
 * @private
 * @author Material Design Lite
 * @returns {}
*/
const inputs = document.querySelectorAll(".input-js");

function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});