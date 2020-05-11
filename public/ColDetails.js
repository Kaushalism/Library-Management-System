$(function () {

    let book_classList = $('#bookclasslist')

    fetchbooks(function (book_classs) {
        book_classList.empty()
        for (book_class of book_classs) {
            book_classList.append(createTable(book_class))
        }
    })

})
