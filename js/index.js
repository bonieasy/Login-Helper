function showPassword() {
    const eye = document.getElementById ('eye');
    const eyeSlash = document.getElementById ('eye-slash');
    const fieldPassword = document.getElementById ('field-password');

    if (eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';
    }    else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'password';
    }
};

function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)
    console.log(data)
  }
  window.onload = function () {

    google.accounts.id.initialize({
      client_id: "421333481114-iptv0fm5p8kcns3m4ug2lg1ubo5dlvs0.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"), {
            theme: "filled_blue",
            size: "large",
            type: "standard",
            shape: "pill",
            text: "$ {button.text}",
            size: "large",
            logo_alignment: "left"
        }
        );

    google.accounts.id.prompt(); // also display the One Tap dialog
  }