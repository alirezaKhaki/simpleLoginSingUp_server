$(document).ready(function() {
    $('body').on('click', '.login', function() {
        let username = $('.username').val()
        let pass = $('.pass').val()


        $.post('/loggin', { 'username': username, 'password': pass }, function(response) {
            console.log(response);
            if (response.username !== "wrong email or password") {
                window.location = `/loggin/found/${response.username}`;

            } else {
                alert(response.username)

            }
        })


    })
    $('body').on('click', '.signUp', function() {
        window.location = `/signUp`;
    })
});