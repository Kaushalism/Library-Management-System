$(function () {

    let book_classList = $('#bookclasslist')

    fetchbooksnav(function (book_navs) {
        book_classList.empty()
        for (book_nav of book_navs) {
            book_classList.append(createTablenav(book_nav))
        }
    })

})
