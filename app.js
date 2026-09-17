function sendMessage() {

    const prompt = document.getElementById("prompt").value;

    document.getElementById("response").innerHTML =
        "You asked: " + prompt;

}
