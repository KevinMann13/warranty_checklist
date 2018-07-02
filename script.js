$(function () {
    $("#validation_success").hide()

    $("#btn_submit").click(e => {
        e.preventDefault();
        var form_data = $("#checklist_form").serialize();
        console.log(form_data);

        $("#validation_success").show();
    })
})