$(document).ready(function() {

    $('body').on('click', '.submit', () => {
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let email = $('.email').val()
        let pass = $('.pass').val()
        let user = $('.user').val()
        let gender = $('.gender').val()
        let sigUpData = {
            "username": user,
            "password": pass,
            "email": email,
            "gender": gender,
            "isLoggedIn": false
        }
        if (email.match(mailformat) && email !== "" && pass !== "" && user !== "" && gender !== "") {
            $.post('/signUp', sigUpData, function(response) {
                if (response.msg === "succesful") {
                    window.location = `/signUp/succesful`;
                } else {
                    alert(response.msg)
                }
            })
        } else {
            alert('wrong email format or fields are empty')
        }
    })
})