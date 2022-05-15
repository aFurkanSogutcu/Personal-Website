function dogrula() {
    
    $("input.form-control").removeClass("is-invalid");
    $(".uyari").remove();

    var ad = $("input[name='ad']").val();
    var soyad = $("input[name='soyad']").val();
    var eposta = $("input[name='eposta']").val();
    var telefon = $("input[name='telefon']").val();
    var konu = $("select[name='konu']").val();
    var mesaj = $("textarea[name='mesaj']").val();

    if (ad != "" && soyad != "" && eposta != "" && telefon != "" && konu != "" && mesaj != "") {
        return true;
    } else {
        if (ad == "") {
            $("input[name='ad']").addClass("is-invalid").after("<span class='uyari'>*Bu alanın doldurulması zorunludur.</span>");
        }
        if (soyad == "") {
            $("input[name='soyad']").addClass("is-invalid").after("<span class='uyari'>*Bu alanın doldurulması zorunludur.</span>");
        }
        if (eposta == "") {
            $("input[name='eposta']").addClass("is-invalid").after("<span class='uyari'>*Bu alanın doldurulması zorunludur.</span>");
        }
        if (telefon == "") {
            $("input[name='telefon']").addClass("is-invalid").after("<span class='uyari'>*Bu alanın doldurulması zorunludur.</span>");
        }
        if (konu == "") {
            $("select[name='konu']").addClass("is-invalid").after("<span class='uyari'>*Bu alanın doldurulması zorunludur.</span>");
        }
        if (mesaj == "") {
            $("textarea[name='mesaj']").addClass("is-invalid").after("<span class='uyari'>*Bu alanın doldurulması zorunludur.</span>");
        }
        return false;
    }

}