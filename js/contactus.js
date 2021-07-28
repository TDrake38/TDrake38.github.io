//This is for the contact us page.

$(document).ready(function () {
    $('.button').click(function (event) {
        console.log('click works')

        var name = $('.name').val()
        var email = $('.email').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        if(name.length >= 3){
            statusElm.append('<div>Name valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Name not valid</div>')
        }

        if(message.length >= 10){
            statusElm.append('<div>Message valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message not valid</div>')
        }
        
    })
})