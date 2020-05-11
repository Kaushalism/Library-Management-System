$(function () {
    let Id = $('#Id')
    let Name = $('#Name')
    let Genre= $('#Genre')
    let LoanStatus= $('#LoanStatus')
    let Copies =$('#Copies')
    
    $('#buttonid').click(function () {

        addData(
            Id.val(),
            Name.val(),
            Genre.val(),
            LoanStatus.val(),
            Copies.val(),
            function (addData) {
                window.alert("Added to Database")
                
            }
        )


    })

})