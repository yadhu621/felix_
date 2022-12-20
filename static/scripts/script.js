$(document).ready(function(){
    $('#submit-btn').on('click',function(){
        console.log("Hello, you clicked submit button")

        var firstName = $('#firstName').val()
        console.log(firstName)
    })
})