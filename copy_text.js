function copyPasswordClipboard() {
    // Get the text field
    var copyPassword = document.getElementById("pass-display");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyPassword.value);

    // Alert the copied text
    alert("Your password was copied to your clipboard:!");
}