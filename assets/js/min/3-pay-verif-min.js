function click_pay_suiv(){reg_nom.test($("input[name=nom-carte]").val())&&reg_card1.test($("input[name=cb-1]").val())&&reg_card2.test($("input[name=cb-2]").val())&&reg_card2.test($("input[name=cb-3]").val())&&reg_card2.test($("input[name=cb-4]").val())&&reg_mm.test($("input[name=mm]").val())&&reg_aa.test($("input[name=aa]").val())&&reg_ccv.test($(".inputs-ccv").val())&&$("#input-checkbox").is(":checked")?($("html, body").animate({scrollTop:$("#contact-main-wrap").offset().top},300),$("#confirmation-form").attr("display","true"),$("#confirmation-form").css("display","block"),$("#paiement-form").attr("display","false"),$("#paiement-form").css("display","none"),$(".progress-bar").css("width","100%"),$(".confirm-icon").css("filter","grayscale(0)"),$(".confirm-icon").next().css("color","#32c5d2"),$(".error-calendar").toggleClass("animated shake"),$(".error-calendar").css("display","none")):($("html, body").animate({scrollTop:$("#contact-main-wrap").offset().top},300),$(".error-calendar").toggleClass("animated shake"),$(".error-calendar").css("display","flex"))}function click_pay_prec(){$("html, body").animate({scrollTop:$("#contact-main-wrap").offset().top},300),$("#commande-form").attr("display","true"),$("#commande-form").css("display","block"),$("#paiement-form").attr("display","false"),$("#paiement-form").css("display","none"),$(".progress-bar").css("width","50%"),$(".form-icon").next().css("color","#32c5d2"),$(".form-icon").css("filter","grayscale(0)"),$(".paiement-icon").next().css("color","#8e8e8e"),$(".paiement-icon").css("filter","grayscale(100%)")}var reg_nom=new RegExp("^[a-zàâçéèêëîïôûùüÿñæœ .-]*$"),reg_card1=new RegExp("^4[0-9]{3}"),reg_card2=new RegExp("[0-9]{4}"),reg_mm=new RegExp("0[1-9]|1[012]"),reg_aa=new RegExp("^(1[89]|[2-9][0-9])$"),reg_ccv=new RegExp("[0-9]{3}");$("input[name=nom-carte]").keyup(function(){reg_nom.test($(this).val().toLowerCase())&&""!==$(this).val()?($(this).addClass("input-valid"),$(this).removeClass("input-invalid")):($(this).addClass("input-invalid"),$(this).removeClass("input-valid"))}),$(".inputs").keyup(function(){reg_card1.test($("input[name=cb-1]").val())&&reg_card2.test($("input[name=cb-2]").val())&&reg_card2.test($("input[name=cb-3]").val())&&reg_card2.test($("input[name=cb-4]").val())?($(".cb-form-wrap").addClass("input-valid"),$(".cb-form-wrap").removeClass("input-invalid")):($(".cb-form-wrap").addClass("input-invalid"),$(".cb-form-wrap").removeClass("input-valid"))}),$(".inputs-date").keyup(function(){reg_mm.test($("input[name=mm]").val())&&reg_aa.test($("input[name=aa]").val())?($(".date-form-wrap").addClass("input-valid"),$(".date-form-wrap").removeClass("input-invalid")):($(".date-form-wrap").addClass("input-invalid"),$(".date-form-wrap").removeClass("input-valid"))}),$(".inputs-ccv").keyup(function(){reg_ccv.test($(this).val())?($(this).addClass("input-valid"),$(this).removeClass("input-invalid")):($(this).addClass("input-invalid"),$(this).removeClass("input-valid"))}),$(".inputs-date-slash").mousedown(function(){return!1}),$(".inputs").keyup(function(){this.value.length===this.maxLength&&$(this).next(".inputs").focus()}),$(".inputs-date").keyup(function(){this.value.length===this.maxLength&&$(this).next().next(".inputs-date").focus()});