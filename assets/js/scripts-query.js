/**
 * Created with JetBrains PhpStorm.
 * User: xianwang
 * Date: 4/7/14
 * Time: 9:58 PM
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function(){

    // Handle input validation, error popup, and success message
    // Hide Ajax elements
    $("#error_banner").hide();
    //$("#id_num").hide();
/*
    $("#start_message").hide();
    $("#cabinet").hide();
    $("#gaus").hide();
    $("#eu").hide();
    $("#end_message").hide();
*/
    $("#id_num").submit(function(ev){

        ev.preventDefault();

        // Validate input
        var error = check();
        //console.log("error msg: %s", error);
        if (error != "") {
            var error_banner = $("#error_banner");

            error_banner.hide();
            error_banner.html(error);
            error_banner.fadeIn();
        }
        else {
            $("#error_banner").hide();

            var post_data = $("#id_num").serialize();
            $.ajax({
                type:       'POST',
                url:        'query.php',
                data:       post_data,
                dataType:   'json',
                success:    function(json) {
                    var content =
                    // Insert alloc
                    $("#table_content").html(

                    )
                    // Display message
                    $("#start_message").fadeIn();
                    if (json.system == "cc") {
                        $("#cc").fadeIn();
                    }
                    else if (json.system == "gcsc")
                    {
                        $("#gcsc").fadeIn();
                    }
                    else if (json.system == "mpc")
                    {
                        $("#mpc").fadeIn();
                    }
                    else if (json.system == "eu")
                    {
                        $("#eu").fadeIn();
                    }
                    else if (json.system == "gaus")
                    {
                        $("#gaus").fadeIn();
                    }
                },
                error:      function(json) {
                    console.log("Ajax error:");
                    console.log(json);
                }
            });
        }
    });
});


function check() {

    var error_message = "";

    if ($("[name=id_number]").val() == "") {
        error_message += '<div class="alert alert-danger fade in"><strong>Oh snap! </strong>你没有输入你的身份证号码</div>';
    }

    //console.log("msgin: %s", error_message);
    return error_message;
}