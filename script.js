

$(function(){ 
			var ergebnis = 2;
			$("#reflesh").on("click", function() {
				location.reload();
			});


			$("#start").show();
			$("#img1").hide();
			$("#img2").hide();
			$("#img3").hide();
			$("#img4").hide();

			$("#liste").hide();

			
			$("#start").on("click", function() {
				$("#startbildschirm").hide();
    				sound.play();

				
				$("#img1").on("click", function() {
    					$("#bild1").html("richtig");
					ergebnis = ergebnis + 1;
				});
				$("#img2").on("click", function() {
    					$("#bild2").html("falsch");
					ergebnis = ergebnis - 1;
				});
				$("#img3").on("click", function() {
    					$("#bild3").html("falsch");
					ergebnis = ergebnis - 1;
				});
				$("#img4").on("click", function() {
    					$("#bild4").html("richtig");
					ergebnis = ergebnis + 1;
				});
				
				
				
				$("#img1").show().delay(400).fadeOut("slow", function() {
					$("#img2").show().delay(400).fadeOut("slow", function() {
						$("#img3").show().delay(400).fadeOut("slow", function() {
							$("#img4").show().delay(400).fadeOut("slow", function() {
								$("#liste").show();
								ergebnis = (ergebnis / 4) * 100;
								$("#prozent").html(ergebnis); 
							});	
						});

					});

				});
			});
				
				



			
			
			
    
}); 
	
