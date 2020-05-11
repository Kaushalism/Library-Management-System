$(function () {
    let Id = $('#Id')
    let Name = $('#Name')
    let Floor= $('#Floor')
    let AlmirahNo= $('#AlmirahNo')
    let Shelf =$('#Shelf')
    
    $('#buttonid').click(function () {

        addDataNav(
            Id.val(),
            Name.val(),
            Floor.val(),
            AlmirahNo.val(),
            Shelf.val(),
            function (addData) {
                window.alert("Added to Database")
                
            }
        )


    })

})