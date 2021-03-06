/*jshint devel:true */

// DECLARATE Regex variables
var reg_nom = new RegExp("^[a-zàâçéèêëîïôûùüÿñæœ .-]*$");
var reg_card1 = new RegExp ("^4[0-9]{3}");
var reg_card2 = new RegExp("[0-9]{4}");
var reg_mm = new RegExp("0[1-9]|1[012]");
var reg_aa = new RegExp("^(1[89]|[2-9][0-9])$");
var reg_ccv = new RegExp("[0-9]{3}");

// INPUT "Titulaire carte bancaire" regex check & add input style (valid or not)
$("input[name=nom-carte]").keyup(function() {
  if
  (
    (reg_nom.test($(this).val().toLowerCase())) &&
    ($(this).val() !== "")
  )
  {
    $(this).addClass("input-valid");
    $(this).removeClass("input-invalid");
  }
  else {
    $(this).addClass("input-invalid");
    $(this).removeClass("input-valid");
  }
});

// INPUT "Numéro de la carte" regex check & add input style (valid or not)
$(".inputs").keyup(function() {
  if
  (
    (reg_card1.test($("input[name=cb-1]").val())) &&
    (reg_card2.test($("input[name=cb-2]").val())) &&
    (reg_card2.test($("input[name=cb-3]").val())) &&
    (reg_card2.test($("input[name=cb-4]").val()))
  )
  {
    $(".cb-form-wrap").addClass("input-valid");
    $(".cb-form-wrap").removeClass("input-invalid");
  }
  else {
    $(".cb-form-wrap").addClass("input-invalid");
    $(".cb-form-wrap").removeClass("input-valid");
  }
});

// INPUT "Date d’expiration" regex check & add input style (valid or not)
$(".inputs-date").keyup(function() {
  if
  (
    (reg_mm.test($("input[name=mm]").val())) &&
    (reg_aa.test($("input[name=aa]").val()))
  )
  {
    $(".date-form-wrap").addClass("input-valid");
    $(".date-form-wrap").removeClass("input-invalid");
  }
  else {
    $(".date-form-wrap").addClass("input-invalid");
    $(".date-form-wrap").removeClass("input-valid");
  }
});

// INPUT "CCV" regex check & add input style (valid or not)
$(".inputs-ccv").keyup(function() {
  if (reg_ccv.test($(this).val())) {
    $(this).addClass("input-valid");
    $(this).removeClass("input-invalid");
  }
  else {
    $(this).addClass("input-invalid");
    $(this).removeClass("input-valid");
  }
});

// DISABLE selction on slash "MM / AA"
$(".inputs-date-slash").mousedown( function () {
    return false;
});

// VERIFICATIONS on click between different command pages process
// --- ON CLICK "suivant" :
function click_pay_suiv () {

  // 3- on Paiement-form page
  if
  (
    // if "Titulaire carte bancaire" respects REGEX
    (reg_nom.test($("input[name=nom-carte]").val())) &&
    // if "Numéro de la carte" respects REGEX
    (reg_card1.test($("input[name=cb-1]").val())) &&
    (reg_card2.test($("input[name=cb-2]").val())) &&
    (reg_card2.test($("input[name=cb-3]").val())) &&
    (reg_card2.test($("input[name=cb-4]").val())) &&
    // if "Date d’expiration" respects REGEX
    (reg_mm.test($("input[name=mm]").val())) &&
    (reg_aa.test($("input[name=aa]").val())) &&
    // if "CCV" respects REGEX
    (reg_ccv.test($(".inputs-ccv").val())) &&
    // if CHECKBOX is checked
    ($('#input-checkbox').is(':checked'))
  )
  {
    // SCROLL TO TOP
    $('html, body').animate({
        scrollTop: $("#contact-main-wrap").offset().top
    }, 300);

    // DISABLE 3-Paiement-form and ENABLE 4-Confirmation-form
    $("#confirmation-form").attr("display", "true");
    $("#confirmation-form").css("display", "block");
    $("#paiement-form").attr("display", "false");
    $("#paiement-form").css("display", "none");

    // INCREASE Progress bar width 100% (4/4)
    $(".progress-bar").css("width", "100%");

    // CHANGE Progress bar icon & text COLOR
    $(".confirm-icon").css("filter", "grayscale(0)");
    $(".confirm-icon").next().css("color", "#32c5d2");

    // REMOVE Error message
    $(".error-calendar").toggleClass("animated shake");
    $(".error-calendar").css("display","none");

  }
  else
  {
    // SCROLL TO TOP
    $('html, body').animate({
        scrollTop: $("#contact-main-wrap").offset().top
    }, 300);

    // DISPLAY Error message
    $(".error-calendar").toggleClass("animated shake");
    $(".error-calendar").css("display","flex");
  }

}

// --- ON CLICK "précedent" :
function click_pay_prec () {

    // SCROLL TO TOP
    $('html, body').animate({
        scrollTop: $("#contact-main-wrap").offset().top
    }, 300);

    // HIDE 3-Paiement-form & SHOW 2-Commande-form
    $("#commande-form").attr("display", "true");
    $("#commande-form").css("display", "block");
    $("#paiement-form").attr("display", "false");
    $("#paiement-form").css("display", "none");

    // DECREASE Progress bar width to 50% (2/4)
    $(".progress-bar").css("width", "50%");

    // CHANGE Progress bar icon & text COLOR
    $(".form-icon").next().css("color", "#32c5d2");
    $(".form-icon").css("filter", "grayscale(0)");

    $(".paiement-icon").next().css("color", "#8e8e8e");
    $(".paiement-icon").css("filter", "grayscale(100%)");

}

// PASS to next input when input's maxlength is attended
// > Titulaire carte bancaire
$(".inputs").keyup(function () {
  if (this.value.length === this.maxLength) {
    $(this).next('.inputs').focus();
  }
});

// > Date d’expiration
$(".inputs-date").keyup(function () {
  if (this.value.length === this.maxLength) {
    $(this).next().next('.inputs-date').focus();
  }
});
