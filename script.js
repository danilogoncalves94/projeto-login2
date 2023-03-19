function load() {
    $('div').animate({ height: '380px' }, 1300)
}


function funcMail() {
    $('#email').keyup(function (e) {
        let nome = $(this).val()
        if (nome.length > 0) {
            $('#email').css({fontFamily: 'sans-serif'})
        } else {
            $('#email').css({fontFamily: 'Glitch'})
        }
    })
}

function funcSenha() {
    $('#senha').keyup(function (e) {
        let nome = $(this).val()
        if (nome.length > 0) {
            $('#senha').css({fontFamily: 'sans-serif'})
        } else {
            $('#senha').css({fontFamily: 'Glitch'})
        }
    })
}