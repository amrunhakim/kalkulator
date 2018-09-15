$("#btn_hasil").click(function(){
        var angka1 = parseInt($('#angka1').val());
        var operator = $('#operator').val();
        var angka2 = parseInt($('#angka2').val());
        //var hasil = angka1 + angka2;
        // alert(hasil);
        if (operator ==  "+"){
            var hasil = angka1 + angka2;
        } else if (operator == "-") {
            var hasil = angka1 - angka2;
        } else if (operator == "*") {
            var hasil = angka1 * angka2;    
        } else if (operator == "/") {
            var hasil = angka1 / angka2;
        }        

        $("#hasil").val(hasil);S
});