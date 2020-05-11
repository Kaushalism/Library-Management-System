function addData (Idu, Nameu, Genreu, LoanStatusu,Copiesu,done) {
    $.post('/api/book_class', {
        Id : Idu,
        Name: Nameu,
        Genre: Genreu,
        LoanStatus: LoanStatusu,
        Copies: Copiesu
    }, function (data) {
        done(data)
    })
}
function addDataNav (Idu, Nameu, Flooru, AlmirahNou,Shelfu,done) {
    $.post('/api/book_nav', {
        Id : Idu,
        Name: Nameu,
        Floor: Flooru,
        AlmirahNo: AlmirahNou,
        Shelf: Shelfu
    }, function (data) {
        done(data)
    })
}
//data fectch krte samay yeh do functions necessary hain
function fetchbooks (done) {
    $.get('/api/book_class', function (data) {
        done(data)
    })
}
function createTable (book_class) {
    return $(`

    <tr>
                    <td>${book_class.Id}</td>
                    <td>${book_class.Name}</td>
                    <td>${book_class.Genre}</td>
                    <td>${book_class.LoanStatus}</td>
                    <td>${book_class.Copies}</td>
    </tr>
            
    `
        )
}

function fetchbooksnav (done) {
    $.get('/api/book_nav', function (data) {
        done(data)
    })
}
function createTablenav (book_nav) {
    return $(`

    <tr>
                    <td>${book_nav.Id}</td>
                    <td>${book_nav.Name}</td>
                    <td>${book_nav.Floor}</td>
                    <td>${book_nav.AlmirahNo}</td>
                    <td>${book_nav.Shelf}</td>
    </tr>
            
    `
        )
}