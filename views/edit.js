$(document).ready(function() {
    let url = $(location).attr('pathname');
    url = url.substr(14)
    $('body').on('click', '.logOut', function() {
        $.get(`/home/${url}`, url, function(response) {

            window.location = `/home`
        })
    })
    $('body').on('click', '.save', function() {
        const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let email = $('.email').val()
        let pass = $('.pass').val()
        let user = $('.user').val()
        let gender = $('.gender').val()
        let editData = {
            "username": user,
            "password": pass,
            "email": email,
            "gender": gender,
            "isLoggedIn": false
        }
        if (email.match(mailformat) && email !== "" && pass !== "" && user !== "" && gender !== "") {

            $.post(`/edit/${url}`, editData, function(response) {
                if (response.msg === "done") {
                    window.location = "/loggin/succesful"
                } else {
                    window.location = "/loggin/unsuccesful"
                }
            })
        } else {
            alert("wrong email format or fields are empty")
        }
    })

})