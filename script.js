document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn form reload trang

        var user = document.getElementById("username").value;
        var pass = document.getElementById("password").value;

        // Tên đăng nhập và mật khẩu cố định
        const fixedUsername = "anh_iu_Pé_Ong";
        const fixedPassword = "1512";

        if (user === fixedUsername && pass === fixedPassword) {
            window.location.href = "home/index.html"; // Chuyển hướng sau khi đăng nhập thành công
        } else {
            alert("Sai tên đăng nhập hoặc mật khẩu!");
        }
    });
});

// Hiển thị / Ẩn mật khẩu khi nhấn checkbox
function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
