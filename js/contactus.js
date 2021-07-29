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
            statusElm.append('<div>Email valid.</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid: Must be 5 characters long with an @ and a period.</div>')
        }

        if(name.length >= 3){
            statusElm.append('<div>Name valid.</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Name not valid: Must be atleast 3 characters long.</div>')
        }

        if(message.length >= 10){
            statusElm.append('<div>Message valid.</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message not valid: Must be atleast 10 characters long.</div>')
        }
        
    })
})