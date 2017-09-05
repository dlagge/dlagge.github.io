$(function() {








/* .............................................................................................................................................................................................. */


				if ( $.cookie("scroll") !== null ) {
    					$(document).scrollTop( $.cookie("scroll") );
				}
				
/* .............................................................................................................................................................................................. */


/* pizzagestalten ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
			$("#feertig").hide();
			$("#box100").hide();
			$("#feertig").on("click", function() {
				$("#box100").show();
			});
			$("#lös").on("click", function() {
				$("#box100").hide();
			});

			$("#boxes1").hide();
			$("#boxes2").hide();
			$("#boxes3").hide();
			$("#boxes4").hide();
			$("#boxes5").hide();
			$("#boxes6").hide();
			$("#boxes7").hide();
			$("#boxes8").hide();
			$("#boxes9").hide();
			$("#boxes10").hide();
			$("#boxes11").hide();
			$("#boxes12").hide();
			$("#boxes13").hide();
			$("#boxes14").hide();
			$("#boxes15").hide();
			$("#boxes16").hide();
			$("#boxes17").hide();
			$("#boxes18").hide();
			$("#boxes19").hide();
			$("#boxes20").hide();
			$("#boxes21").hide();
			$("#boxes22").hide();
			$("#boxes23").hide();
			$("#boxes24").hide();
			$("#boxes25").hide();


			$("#bild1").hide();
			$("#bild2").hide();
			$("#bild3").hide();
			$("#bild4").hide();
			$("#bild5").hide();
			$("#bild6").hide();
			$("#bild7").hide();
			$("#bild8").hide();
			$("#bild9").hide();
			$("#bild10").hide();
			$("#bild11").hide();
			$("#bild12").hide();
			$("#bild13").hide();
			$("#bild14").hide();
			$("#bild15").hide();
			$("#bild16").hide();
			$("#bild17").hide();
			$("#bild18").hide();
			$("#bild19").hide();
			$("#bild20").hide();
			$("#bild21").hide();
			$("#bild22").hide();
			$("#bild23").hide();
			$("#bild24").hide();
			$("#bild25").hide();

			$(".saucen").hide();
			$(".käsesorten").hide();
			$(".fleischsorten").hide();
			$(".gewürzsorten").hide();
			$(".gemüsesorten").hide();
			$(".pilzsorten").hide();
			$(".meeresfruchtsorten").hide();
			


			$("#loe11").hide();
			$("#loe22").hide();
			$("#loe33").hide();
			$("#loe44").hide();
			$("#loe55").hide();
			$("#loe66").hide();
			$("#loe77").hide();
			$("#loe88").hide();
			$("#loe99").hide();
			$("#loe1010").hide();
			$("#loe1111").hide();
			$("#loe1212").hide();
			$("#loe1313").hide();
			$("#loe1414").hide();
			$("#loe1515").hide();
			$("#loe1616").hide();
			$("#loe1717").hide();
			$("#loe1818").hide();
			$("#loe1919").hide();
			$("#loe2020").hide();
			$("#loe2121").hide();
			$("#loe2222").hide();
			$("#loe2323").hide();
			$("#loe2424").hide();
			$("#loe2525").hide();



			





			$(".zut").hide();
			var zuta = true;
			$("#zutatenverwaltung").on("click", function() {
				if (zuta == true) {
					$(".zut").slideToggle();
					zuta = false;
				} else {
					$(".zut").slideToggle();
					zuta = true;
				}
			});



			var st1 = true;
			$("#sauce").on("click", function() {
				if (st1 == true) {
					$("#sauce").css("background", "#00546a");

					$("#käse").css("background", "green");
					$("#fleisch").css("background", "green");
					$("#gewürze").css("background", "green");
					$("#obst").css("background", "green");
					$("#pilze").css("background", "green");
					$("#meeresfrüchte").css("background", "green");
				
					$(".saucen").show();

					$(".käsesorten").hide();
					$(".fleischsorten").hide();
					$(".gewürzsorten").hide();
					$(".gemüsesorten").hide();
					$(".pilzsorten").hide();
					$(".meeresfruchtsorten").hide();

					st1 = false;
				} else { 
					$("#sauce").css("background", "green");
					$(".saucen").hide();
					st1 = true;
				}
			});
			

			var st2 = true;
			$("#käse").on("click", function() {
				if (st2 == true) {
					$("#käse").css("background", "#00546a");

					$("#sauce").css("background", "green");
					$("#fleisch").css("background", "green");
					$("#gewürze").css("background", "green");
					$("#obst").css("background", "green");
					$("#pilze").css("background", "green");
					$("#meeresfrüchte").css("background", "green");	

					$(".käsesorten").show();

					$(".saucen").hide();
					$(".fleischsorten").hide();
					$(".gewürzsorten").hide();
					$(".gemüsesorten").hide();
					$(".pilzsorten").hide();
					$(".meeresfruchtsorten").hide();

					st2 = false;
				} else { 
					$("#käse").css("background", "green");
					$(".käsesorten").hide();
					st2 = true;
				}
			});


			var st3 = true;
			$("#fleisch").on("click", function() {
				if (st3 == true) {
					$("#fleisch").css("background", "#00546a");

					$("#käse").css("background", "green");
					$("#sauce").css("background", "green");
					$("#gewürze").css("background", "green");
					$("#obst").css("background", "green");
					$("#pilze").css("background", "green");
					$("#meeresfrüchte").css("background", "green");
					

					$(".fleischsorten").show();

					$(".saucen").hide();
					$(".käsesorten").hide();
					$(".gewürzsorten").hide();
					$(".gemüsesorten").hide();
					$(".pilzsorten").hide();
					$(".meeresfruchtsorten").hide();

					st3 = false;
				} else { 
					$("#fleisch").css("background", "green");
					$(".fleischsorten").hide();
					st3 = true;
				}
			});
			

			var st4 = true;
			$("#gewürze").on("click", function() {
				if (st4 == true) {
					$("#gewürze").css("background", "#00546a");

					$("#käse").css("background", "green");
					$("#sauce").css("background", "green");
					$("#fleisch").css("background", "green");
					$("#obst").css("background", "green");
					$("#pilze").css("background", "green");
					$("#meeresfrüchte").css("background", "green");

					$(".gewürzsorten").show();

					$(".saucen").hide();
					$(".käsesorten").hide();
					$(".fleischsorten").hide();
					$(".gemüsesorten").hide();
					$(".pilzsorten").hide();
					$(".meeresfruchtsorten").hide();

					st4 = false;
				} else { 
					$("#gewürze").css("background", "green");
					$(".gewürzsorten").hide();
					st4 = true;
				}
			});
			


			var st5 = true;
			$("#obst").on("click", function() {
				if (st5 == true) {
					$("#obst").css("background", "#00546a");

					$("#käse").css("background", "green");
					$("#sauce").css("background", "green");
					$("#fleisch").css("background", "green");
					$("#gewürze").css("background", "green");
					$("#pilze").css("background", "green");
					$("#meeresfrüchte").css("background", "green");

					$(".gemüsesorten").show();

					$(".saucen").hide();
					$(".käsesorten").hide();
					$(".fleischsorten").hide();
					$(".gewürzsorten").hide();
					$(".pilzsorten").hide();
					$(".meeresfruchtsorten").hide();

					st5 = false;
				} else { 
					$("#obst").css("background", "green");
					$(".gemüsesorten").hide();
					st5 = true;
				}
			});


			var st6 = true;
			$("#pilze").on("click", function() {
				if (st6 == true) {
					$("#pilze").css("background", "#00546a");

					$("#käse").css("background", "green");
					$("#sauce").css("background", "green");
					$("#fleisch").css("background", "green");
					$("#gewürze").css("background", "green");
					$("#obst").css("background", "green");
					$("#meeresfrüchte").css("background", "green");

					$(".pilzsorten").show();

					$(".saucen").hide();
					$(".käsesorten").hide();
					$(".fleischsorten").hide();
					$(".gewürzsorten").hide();
					$(".gemüsesorten").hide();
					$(".meeresfruchtsorten").hide();

					st6 = false;
				} else { 
					$("#pilze").css("background", "green");
					$(".pilzsorten").hide();
					st6 = true;
				}
			});
			


			var st7 = true;
			$("#meeresfrüchte").on("click", function() {
				if (st7 == true) {
					$("#meeresfrüchte").css("background", "#00546a");

					$("#käse").css("background", "green");
					$("#sauce").css("background", "green");
					$("#fleisch").css("background", "green");
					$("#gewürze").css("background", "green");
					$("#obst").css("background", "green");
					$("#pilze").css("background", "green");

					$(".meeresfruchtsorten").show();

					$(".saucen").hide();
					$(".käsesorten").hide();
					$(".fleischsorten").hide();
					$(".gewürzsorten").hide();
					$(".gemüsesorten").hide();
					$(".pilzsorten").hide();

					st7 = false;
				} else { 
					$("#meeresfrüchte").css("background", "green");
					$(".meeresfruchtsorten").hide();
					st7 = true;
				}
			});





			
			var alle = $.cookie('all');
			if(alle == null) {
				$.cookie('all', '0', { expires: 14, path: '/' });
				alle = 0;
					
			}

			$.cookie('all', alle, { expires: 14, path: '/' });
			$("#eigenePizzaKosten").html(alle);



	





			if ($.cookie('st11') === "visible") {
					tp11($("#bild1"), $("#mozarella"));

				}
				

				$("#tomatenpüree").on("click", function() {
					tp11($("#bild1"), $("#mozarella"));
					alle = parseFloat(1) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe11").on("click", function() {
					tp11($("#bild1"), $("#loe11"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(1);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen1").on("click", function() {
					tp11($("#bild1"), $("#kreuzchen1"));
					alle = parseFloat(alle) - parseFloat(1);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
				
				});				


			function tp11(pan11, bu11) {
					var pprev11 = pan11.is(":visible"); 
					pan11.toggle();
					if (!pprev11) {
						$("#boxes1").show();
						$("#loe11").show();
						$("#tomatenpüree").hide();
						$.cookie('st11', 'visible', { path: '/' });
						

					}  else {
						$("#boxes1").hide();
						$("#loe11").hide();
						$("#tomatenpüree").show();
						$.cookie('st11', 'hidden', { path: '/' });
						
						
					}
					
			}








			if ($.cookie('st22') === "visible") {
					tp22($("#bild2"), $("#bärlauchpesto"));

				}
				

				$("#bärlauchpesto").on("click", function() {
					tp22($("#bild2"), $("#bärlauchpesto"));
					alle = parseFloat(1) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe22").on("click", function() {
					tp22($("#bild2"), $("#loe22"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(1);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen2").on("click", function() {
					tp22($("#bild2"), $("#kreuzchen2"));
					alle = parseFloat(alle) - parseFloat(1);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
				
				});				


			function tp22(pan22, bu22) {
					var pprev22 = pan22.is(":visible"); 
					pan22.toggle();
					if (!pprev22) {
						$("#boxes2").show();
						$("#loe22").show();
						$("#bärlauchpesto").hide();
						$.cookie('st22', 'visible', { path: '/' });
						

					}  else {
						$("#boxes2").hide();
						$("#loe22").hide();
						$("#bärlauchpesto").show();
						$.cookie('st22', 'hidden', { path: '/' });
						
						
					}
					
			}














			



				if ($.cookie('st33') === "visible") {
					tp33($("#bild3"), $("#mozarella"));

				}
				

				$("#mozarella").on("click", function() {
					tp33($("#bild3"), $("#mozarella"));
					alle = parseFloat(0.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe33").on("click", function() {
					tp33($("#bild3"), $("#loe33"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(0.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen3").on("click", function() {
					tp33($("#bild3"), $("#kreuzchen3"));
					alle = parseFloat(alle) - parseFloat(0.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp33(pan33, bu33) {
					var pprev33 = pan33.is(":visible"); 
					pan33.toggle();
					if (!pprev33) {
						$("#boxes3").show();
						$("#loe33").show();
						$("#mozarella").hide();
						$.cookie('st33', 'visible', { path: '/' });
						

					}  else {
						$("#boxes3").hide();
						$("#loe33").hide();
						$("#mozarella").show();
						$.cookie('st33', 'hidden', { path: '/' });
						
						
					}
					
			}









			if ($.cookie('st44') === "visible") {
					tp44($("#bild4"), $("#emmentaler"));

				}
				

				$("#emmentaler").on("click", function() {
					tp44($("#bild4"), $("#emmentaler"));
					alle = parseFloat(0.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe44").on("click", function() {
					tp44($("#bild4"), $("#loe44"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(0.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen4").on("click", function() {
					tp44($("#bild4"), $("#kreuzchen4"));
					alle = parseFloat(alle) - parseFloat(0.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp44(pan44, bu44) {
					var pprev44 = pan44.is(":visible"); 
					pan44.toggle();
					if (!pprev44) {
						$("#boxes4").show();
						$("#loe44").show();
						$("#emmentaler").hide();
						$.cookie('st44', 'visible', { path: '/' });
						

					}  else {
						$("#boxes4").hide();
						$("#loe44").hide();
						$("#emmentaler").show();
						$.cookie('st44', 'hidden', { path: '/' });
						
						
					}
					
			}


			

			


			
			
				if ($.cookie('st55') === "visible") {
					tp55($("#bild5"), $("#edamer"));

				}
				

				$("#edamer").on("click", function() {
					tp55($("#bild5"), $("#edamer"));
					alle = parseFloat(0.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe55").on("click", function() {
					tp55($("#bild5"), $("#loe55"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(0.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen5").on("click", function() {
					tp55($("#bild5"), $("#kreuzchen5"));
					alle = parseFloat(alle) - parseFloat(0.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp55(pan55, bu55) {
					var pprev55 = pan55.is(":visible"); 
					pan55.toggle();
					if (!pprev55) {
						$("#boxes5").show();
						$("#loe55").show();
						$("#edamer").hide();
						$.cookie('st55', 'visible', { path: '/' });
						

					}  else {
						$("#boxes5").hide();
						$("#loe55").hide();
						$("#edamer").show();
						$.cookie('st55', 'hidden', { path: '/' });
						
						
					}
					
			}










			
				if ($.cookie('st66') === "visible") {
					tp66($("#bild6"), $("#parmesan"));

				}
				

				$("#parmesan").on("click", function() {
					tp66($("#bild6"), $("#parmesan"));
					alle = parseFloat(0.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe66").on("click", function() {
					tp66($("#bild6"), $("#loe66"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(0.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen6").on("click", function() {
					tp66($("#bild6"), $("#kreuzchen6"));
					alle = parseFloat(alle) - parseFloat(0.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp66(pan66, bu66) {
					var pprev66 = pan66.is(":visible"); 
					pan66.toggle();
					if (!pprev66) {
						$("#boxes6").show();
						$("#loe66").show();
						$("#parmesan").hide();
						$.cookie('st66', 'visible', { path: '/' });
						

					}  else {
						$("#boxes6").hide();
						$("#loe66").hide();
						$("#parmesan").show();
						$.cookie('st66', 'hidden', { path: '/' });
						
						
					}
					
			}











				if ($.cookie('st77') === "visible") {
					tp77($("#bild7"), $("#schinken"));

				}
				

				$("#schinken").on("click", function() {
					tp77($("#bild7"), $("#schinken"));
					alle = parseFloat(2.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe77").on("click", function() {
					tp77($("#bild7"), $("#loe77"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(2.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen7").on("click", function() {
					tp77($("#bild7"), $("#kreuzchen7"));
					alle = parseFloat(alle) - parseFloat(2.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp77(pan77, bu77) {
					var pprev77 = pan77.is(":visible"); 
					pan77.toggle();
					if (!pprev77) {
						$("#boxes7").show();
						$("#loe77").show();
						$("#schinken").hide();
						$.cookie('st77', 'visible', { path: '/' });
						

					}  else {
						$("#boxes7").hide();
						$("#loe77").hide();
						$("#schinken").show();
						$.cookie('st77', 'hidden', { path: '/' });
						
						
					}
					
			}










			
				if ($.cookie('st88') === "visible") {
					tp88($("#bild8"), $("#salami"));

				}
				

				$("#salami").on("click", function() {
					tp88($("#bild8"), $("#salami"));
					alle = parseFloat(2.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe88").on("click", function() {
					tp88($("#bild8"), $("#loe88"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(2.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen8").on("click", function() {
					tp88($("#bild8"), $("#kreuzchen8"));
					alle = parseFloat(alle) - parseFloat(2.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp88(pan88, bu88) {
					var pprev88 = pan88.is(":visible"); 
					pan88.toggle();
					if (!pprev88) {
						$("#boxes8").show();
						$("#loe88").show();
						$("#salami").hide();
						$.cookie('st88', 'visible', { path: '/' });
						

					}  else {
						$("#boxes8").hide();
						$("#loe88").hide();
						$("#salami").show();
						$.cookie('st88', 'hidden', { path: '/' });
						
						
					}
					
			}








			
				if ($.cookie('st99') === "visible") {
					tp99($("#bild9"), $("#wienerwürstchen"));

				}
				

				$("#wienerwürstchen").on("click", function() {
					tp99($("#bild9"), $("#wienerwürstchen"));
					alle = parseFloat(2) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe99").on("click", function() {
					tp99($("#bild9"), $("#loe99"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(2);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen9").on("click", function() {
					tp99($("#bild9"), $("#kreuzchen9"));
					alle = parseFloat(alle) - parseFloat(2);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp99(pan99, bu99) {
					var pprev99 = pan99.is(":visible"); 
					pan99.toggle();
					if (!pprev99) {
						$("#boxes9").show();
						$("#loe99").show();
						$("#wienerwürstchen").hide();
						$.cookie('st99', 'visible', { path: '/' });
						

					}  else {
						$("#boxes9").hide();
						$("#loe99").hide();
						$("#wienerwürstchen").show();
						$.cookie('st99', 'hidden', { path: '/' });
						
						
					}
					
			}







				if ($.cookie('st1010') === "visible") {
					tp1010($("#bild10"), $("#hackfleisch"));

				}
				

				$("#hackfleisch").on("click", function() {
					tp1010($("#bild10"), $("#hackfleisch"));
					alle = parseFloat(2.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe1010").on("click", function() {
					tp1010($("#bild10"), $("#loe1010"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(2.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen10").on("click", function() {
					tp1010($("#bild10"), $("#kreuzchen10"));
					alle = parseFloat(alle) - parseFloat(2.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp1010(pan1010, bu1010) {
					var pprev1010 = pan1010.is(":visible"); 
					pan1010.toggle();
					if (!pprev1010) {
						$("#boxes10").show();
						$("#loe1010").show();
						$("#hackfleisch").hide();
						$.cookie('st1010', 'visible', { path: '/' });
						

					}  else {
						$("#boxes10").hide();
						$("#loe1010").hide();
						$("#hackfleisch").show();
						$.cookie('st1010', 'hidden', { path: '/' });
						
						
					}
					
			}










				if ($.cookie('st1111') === "visible") {
					tp1111($("#bild11"), $("#pfeffer"));

				}
				

				$("#pfeffer").on("click", function() {
					tp1111($("#bild11"), $("#pfeffer"));
					alle = parseFloat(0.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe1111").on("click", function() {
					tp1111($("#bild11"), $("#loe1111"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(0.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen11").on("click", function() {
					tp1111($("#bild11"), $("#kreuzchen11"));
					alle = parseFloat(alle) - parseFloat(0.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp1111(pan1111, bu1111) {
					var pprev1111 = pan1111.is(":visible"); 
					pan1111.toggle();
					if (!pprev1111) {
						$("#boxes11").show();
						$("#loe1111").show();
						$("#pfeffer").hide();
						$.cookie('st1111', 'visible', { path: '/' });
						

					}  else {
						$("#boxes11").hide();
						$("#loe1111").hide();
						$("#pfeffer").show();
						$.cookie('st1111', 'hidden', { path: '/' });
						
						
					}
					
			}











				if ($.cookie('st1212') === "visible") {
					tp1212($("#bild12"), $("#oregano"));

				}
				

				$("#oregano").on("click", function() {
					tp1212($("#bild12"), $("#oregano"));
					alle = parseFloat(0.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe1212").on("click", function() {
					tp1212($("#bild12"), $("#loe1212"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(0.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
			
					
				});
			

				$("#kreuzchen12").on("click", function() {
					tp1212($("#bild12"), $("#kreuzchen12"));
					alle = parseFloat(alle) - parseFloat(0.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp1212(pan1212, bu1212) {
					var pprev1212 = pan1212.is(":visible"); 
					pan1212.toggle();
					if (!pprev1212) {
						$("#boxes12").show();
						$("#loe1212").show();
						$("#oregano").hide();
						$.cookie('st1212', 'visible', { path: '/' });
						

					}  else {
						$("#boxes12").hide();
						$("#loe1212").hide();
						$("#oregano").show();
						$.cookie('st1212', 'hidden', { path: '/' });
						
						
					}
					
			}










				if ($.cookie('st1313') === "visible") {
					tp1313($("#bild13"), $("#basilikum"));

				}
				

				$("#basilikum").on("click", function() {
					tp1313($("#bild13"), $("#basilikum"));
					alle = parseFloat(0.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe1313").on("click", function() {
					tp1313($("#bild13"), $("#loe1313"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(0.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen13").on("click", function() {
					tp1313($("#bild13"), $("#kreuzchen13"));
					alle = parseFloat(alle) - parseFloat(0.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp1313(pan1313, bu1313) {
					var pprev1313 = pan1313.is(":visible"); 
					pan1313.toggle();
					if (!pprev1313) {
						$("#boxes13").show();
						$("#loe1313").show();
						$("#basilikum").hide();
						$.cookie('st1313', 'visible', { path: '/' });
						

					}  else {
						$("#boxes13").hide();
						$("#loe1313").hide();
						$("#basilikum").show();
						$.cookie('st1313', 'hidden', { path: '/' });
						
						
					}
					
			}








				if ($.cookie('st1414') === "visible") {
					tp1414($("#bild14"), $("#salz"));

				}
				

				$("#salz").on("click", function() {
					tp1414($("#bild14"), $("#salz"));
					alle = parseFloat(0.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe1414").on("click", function() {
					tp1414($("#bild14"), $("#loe1414"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(0.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen14").on("click", function() {
					tp1414($("#bild14"), $("#kreuzchen14"));
					alle = parseFloat(alle) - parseFloat(0.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp1414(pan1414, bu1414) {
					var pprev1414 = pan1414.is(":visible"); 
					pan1414.toggle();
					if (!pprev1414) {
						$("#boxes14").show();
						$("#loe1414").show();
						$("#salz").hide();
						$.cookie('st1414', 'visible', { path: '/' });
						

					}  else {
						$("#boxes14").hide();
						$("#loe1414").hide();
						$("#salz").show();
						$.cookie('st1414', 'hidden', { path: '/' });
						
						
					}
					
			}












						
				if ($.cookie('st1515') === "visible") {
					tp1515($("#bild15"), $("#paprika"));

				}
				

				$("#paprika").on("click", function() {
					tp1515($("#bild15"), $("#paprika"));
					alle = parseFloat(0.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe1515").on("click", function() {
					tp1515($("#bild15"), $("#loe1515"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(0.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen15").on("click", function() {
					tp1515($("#bild15"), $("#kreuzchen15"));
					alle = parseFloat(alle) - parseFloat(0.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp1515(pan1515, bu1515) {
					var pprev1515 = pan1515.is(":visible"); 
					pan1515.toggle();
					if (!pprev1515) {
						$("#boxes15").show();
						$("#loe1515").show();
						$("#paprika").hide();
						$.cookie('st1515', 'visible', { path: '/' });
						

					}  else {
						$("#boxes15").hide();
						$("#loe1515").hide();
						$("#paprika").show();
						$.cookie('st1515', 'hidden', { path: '/' });
						
						
					}
					
			}









				if ($.cookie('st1616') === "visible") {
					tp1616($("#bild16"), $("#ananas"));

				}
				

				$("#ananas").on("click", function() {
					tp1616($("#bild16"), $("#ananas"));
					alle = parseFloat(3) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe1616").on("click", function() {
					tp1616($("#bild16"), $("#loe1616"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(3);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen16").on("click", function() {
					tp1616($("#bild16"), $("#kreuzchen16"));
					alle = parseFloat(alle) - parseFloat(3);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
				
					
				});				


			function tp1616(pan1616, bu1616) {
					var pprev1616 = pan1616.is(":visible"); 
					pan1616.toggle();
					if (!pprev1616) {
						$("#boxes16").show();
						$("#loe1616").show();
						$("#ananas").hide();
						$.cookie('st1616', 'visible', { path: '/' });
						

					}  else {
						$("#boxes16").hide();
						$("#loe1616").hide();
						$("#ananas").show();
						$.cookie('st1616', 'hidden', { path: '/' });
						
						
					}
					
			}













				if ($.cookie('st1717') === "visible") {
					tp1717($("#bild17"), $("#tomaten"));

				}
				

				$("#tomaten").on("click", function() {
					tp1717($("#bild17"), $("#tomaten"));
					alle = parseFloat(2) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe1717").on("click", function() {
					tp1717($("#bild17"), $("#loe1717"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(2);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen17").on("click", function() {
					tp1717($("#bild17"), $("#kreuzchen17"));
					alle = parseFloat(alle) - parseFloat(2);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp1717(pan1717, bu1717) {
					var pprev1717 = pan1717.is(":visible"); 
					pan1717.toggle();
					if (!pprev1717) {
						$("#boxes17").show();
						$("#loe1717").show();
						$("#tomaten").hide();
						$.cookie('st1717', 'visible', { path: '/' });
						

					}  else {
						$("#boxes17").hide();
						$("#loe1717").hide();
						$("#tomaten").show();
						$.cookie('st1717', 'hidden', { path: '/' });
						
						
					}
					
			}









				if ($.cookie('st1818') === "visible") {
					tp1818($("#bild18"), $("#zwiebeln"));

				}
				

				$("#zwiebeln").on("click", function() {
					tp1818($("#bild18"), $("#zwiebeln"));
					alle = parseFloat(1.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe1818").on("click", function() {
					tp1818($("#bild18"), $("#loe1818"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(1.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen18").on("click", function() {
					tp1818($("#bild18"), $("#kreuzchen18"));
					alle = parseFloat(alle) - parseFloat(1.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp1818(pan1818, bu1818) {
					var pprev1818 = pan1818.is(":visible"); 
					pan1818.toggle();
					if (!pprev1818) {
						$("#boxes18").show();
						$("#loe1818").show();
						$("#zwiebeln").hide();
						$.cookie('st1818', 'visible', { path: '/' });
						

					}  else {
						$("#boxes18").hide();
						$("#loe1818").hide();
						$("#zwiebeln").show();
						$.cookie('st1818', 'hidden', { path: '/' });
						
						
					}
					
			}











			if ($.cookie('st1919') === "visible") {
					tp1919($("#bild19"), $("#brokkoli"));

				}
				

				$("#brokkoli").on("click", function() {
					tp1919($("#bild19"), $("#brokkoli"));
					alle = parseFloat(1) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe1919").on("click", function() {
					tp1919($("#bild19"), $("#loe1919"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(1);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen19").on("click", function() {
					tp1919($("#bild19"), $("#kreuzchen19"));
					alle = parseFloat(alle) - parseFloat(1);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp1919(pan1919, bu1919) {
					var pprev1919 = pan1919.is(":visible"); 
					pan1919.toggle();
					if (!pprev1919) {
						$("#boxes19").show();
						$("#loe1919").show();
						$("#brokkoli").hide();
						$.cookie('st1919', 'visible', { path: '/' });
						

					}  else {
						$("#boxes19").hide();
						$("#loe1919").hide();
						$("#brokkoli").show();
						$.cookie('st1919', 'hidden', { path: '/' });
						
						
					}
					
			}












				if ($.cookie('st2020') === "visible") {
					tp2020($("#bild20"), $("#oliven"));

				}
				

				$("#oliven").on("click", function() {
					tp2020($("#bild20"), $("#oliven"));
					alle = parseFloat(1) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe2020").on("click", function() {
					tp2020($("#bild20"), $("#loe2020"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(1);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
				
					
				});
			

				$("#kreuzchen20").on("click", function() {
					tp2020($("#bild20"), $("#kreuzchen20"));
					alle = parseFloat(alle) - parseFloat(1);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp2020(pan2020, bu2020) {
					var pprev2020 = pan2020.is(":visible"); 
					pan2020.toggle();
					if (!pprev2020) {
						$("#boxes20").show();
						$("#loe2020").show();
						$("#oliven").hide();
						$.cookie('st2020', 'visible', { path: '/' });
						

					}  else {
						$("#boxes20").hide();
						$("#loe2020").hide();
						$("#oliven").show();
						$.cookie('st2020', 'hidden', { path: '/' });
						
						
					}
					
			}

















				if ($.cookie('st2121') === "visible") {
					tp2121($("#bild21"), $("#champignons"));

				}
				

				$("#champignons").on("click", function() {
					tp2121($("#bild21"), $("#champignons"));
					alle = parseFloat(3.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe2121").on("click", function() {
					tp2121($("#bild21"), $("#loe2121"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(3.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen21").on("click", function() {
					tp2121($("#bild21"), $("#kreuzchen21"));
					alle = parseFloat(alle) - parseFloat(3.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
				
					
				});				


			function tp2121(pan2121, bu2121) {
					var pprev2121 = pan2121.is(":visible"); 
					pan2121.toggle();
					if (!pprev2121) {
						$("#boxes21").show();
						$("#loe2121").show();
						$("#champignons").hide();
						$.cookie('st2121', 'visible', { path: '/' });
						

					}  else {
						$("#boxes21").hide();
						$("#loe2121").hide();
						$("#champignons").show();
						$.cookie('st2121', 'hidden', { path: '/' });
						
						
					}
					
			}










				if ($.cookie('st2222') === "visible") {
					tp2222($("#bild22"), $("#steinpilze"));

				}
				

				$("#steinpilze").on("click", function() {
					tp2222($("#bild22"), $("#steinpilze"));
					alle = parseFloat(4) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe2222").on("click", function() {
					tp2222($("#bild22"), $("#loe2222"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(4);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen22").on("click", function() {
					tp2222($("#bild22"), $("#kreuzchen22"));
					alle = parseFloat(alle) - parseFloat(4);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp2222(pan2222, bu2222) {
					var pprev2222 = pan2222.is(":visible"); 
					pan2222.toggle();
					if (!pprev2222) {
						$("#boxes22").show();
						$("#loe2222").show();
						$("#steinpilze").hide();
						$.cookie('st2222', 'visible', { path: '/' });
						

					}  else {
						$("#boxes22").hide();
						$("#loe2222").hide();
						$("#steinpilze").show();
						$.cookie('st2222', 'hidden', { path: '/' });
						
						
					}
					
			}








			if ($.cookie('st2323') === "visible") {
					tp2323($("#bild23"), $("#thunfisch"));

				}
				

				$("#thunfisch").on("click", function() {
					tp2323($("#bild23"), $("#thunfisch"));
					alle = parseFloat(4.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe2323").on("click", function() {
					tp2323($("#bild23"), $("#loe2323"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(4.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
				
					
				});
			

				$("#kreuzchen23").on("click", function() {
					tp2323($("#bild23"), $("#kreuzchen23"));
					alle = parseFloat(alle) - parseFloat(4.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp2323(pan2323, bu2323) {
					var pprev2323 = pan2323.is(":visible"); 
					pan2323.toggle();
					if (!pprev2323) {
						$("#boxes23").show();
						$("#loe2323").show();
						$("#thunfisch").hide();
						$.cookie('st2323', 'visible', { path: '/' });
						

					}  else {
						$("#boxes23").hide();
						$("#loe2323").hide();
						$("#thunfisch").show();
						$.cookie('st2323', 'hidden', { path: '/' });
						
						
					}
					
			}

			


















				if ($.cookie('st2424') === "visible") {
					tp2424($("#bild24"), $("#shrimps"));

				}
				

				$("#shrimps").on("click", function() {
					tp2424($("#bild24"), $("#shrimps"));
					alle = parseFloat(4.5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe2424").on("click", function() {
					tp2424($("#bild24"), $("#loe2424"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(4.5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen24").on("click", function() {
					tp2424($("#bild24"), $("#kreuzchen24"));
					alle = parseFloat(alle) - parseFloat(4.5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp2424(pan2424, bu2424) {
					var pprev2424 = pan2424.is(":visible"); 
					pan2424.toggle();
					if (!pprev2424) {
						$("#boxes24").show();
						$("#loe2424").show();
						$("#shrimps").hide();
						$.cookie('st2424', 'visible', { path: '/' });
						

					}  else {
						$("#boxes24").hide();
						$("#loe2424").hide();
						$("#shrimps").show();
						$.cookie('st2424', 'hidden', { path: '/' });
						
						
					}
					
			}



















				if ($.cookie('st2525') === "visible") {
					tp2525($("#bild25"), $("#miesmuscheln"));

				}
				

				$("#miesmuscheln").on("click", function() {
					tp2525($("#bild25"), $("#miesmuscheln"));
					alle = parseFloat(5) + parseFloat(alle);	
					$.cookie('all', alle, { expires: 14, path: '/' });
					$("#eigenePizzaKosten").html(alle);
					
				});

				$("#loe2525").on("click", function() {
					tp2525($("#bild25"), $("#loe2525"));
					$(".zut").slideUp();
					alle = parseFloat(alle) - parseFloat(5);
					
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});
			

				$("#kreuzchen25").on("click", function() {
					tp2525($("#bild25"), $("#kreuzchen25"));
					alle = parseFloat(alle) - parseFloat(5);
					$("#eigenePizzaKosten").html(alle);
					$.cookie('all', alle, { expires: 14, path: '/' });
					
					
				});				


			function tp2525(pan2525, bu2525) {
					var pprev2525 = pan2525.is(":visible"); 
					pan2525.toggle();
					if (!pprev2525) {
						$("#boxes25").show();
						$("#loe2525").show();
						$("#miesmuscheln").hide();
						$.cookie('st2525', 'visible', { path: '/' });
						

					}  else {
						$("#boxes25").hide();
						$("#loe2525").hide();
						$("#miesmuscheln").show();
						$.cookie('st2525', 'hidden', { path: '/' });
						
						
					}
					
			}




















/* header ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

				$("#hi").hide();
				$("#sho").hide();
				checkSize();
				$(window).resize(checkSize);
				
				
				function checkSize() {
					if($("td").css("height") == "580px") {
							$("header").hide();
							$("#sho").show();
							$("#hi").hide();
							
						
					} else {
						$("header").show();
						$("#sho").hide();	
					}
				}					

			

				$("#sho").on("click", function() {
					$("header").slideToggle();
					$("#sho").hide();
					$("#hi").show();
				});				

				$("#hi").on("click", function() {
					$("header").hide();
					$("#sho").show();
					$("#hi").hide();
				});
				
					
				var st = true;
				var at = true;
				$("#uns").on("click", function() {
					if (st == true) {
						$("#submenu1").show();
						st = false;
					} else {
						$("#submenu1").hide();
						st = true;
					}
				});

				$("#sprachauswahl").on("click", function() {
					if (at == true) {
						$("#submenu2").show();
						at = false;
					} else {
						$("#submenu2").hide();
						at = true;
					}
				});
				




/* produkte ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



				var zaeler1 = $.cookie('sum1');
				if(zaeler1 == null) {
					$.cookie('sum1', '0', { expires: 14, path: '/' });
					zaeler1 = 0;
					
				}

				$.cookie('sum1', zaeler1, { expires: 14, path: '/' });
				$("#summe1").html(zaeler1);

			


				var counter1 = $.cookie('name1');
				if(counter1 == null) {
					$.cookie('name1', '1', { expires: 14, path: '/' });
					counter1 = 1;
				}

				$.cookie('name1', counter1, { expires: 14, path: '/' });
				$("#val1").html(counter1);



				
				$("#pluseins1").on("click", function() {
					zaeler1 = parseInt(zaeler1) + 19;
					$.cookie('sum1', zaeler1, { expires: 14, path: '/' });
					$("#summe1").html(zaeler1);


					counter1 = parseInt(counter1) + 1;
					$.cookie('name1', counter1, { expires: 14, path: '/' });
					$("#val1").html(counter1);
					$('#minuseins1').prop('disabled', false);
					gesamt();
					
					
				

				});
				
				$("#minuseins1").on("click", function() {
		
					if (counter1 == 1) {
						$('#minuseins1').prop('disabled', true);
					} else {
						zaeler1 = parseInt(zaeler1) - 19;
						$.cookie('sum1', zaeler1, { expires: 14, path: '/' });
						$("#summe1").html(zaeler1);
						counter1 = parseInt(counter1) - 1;
						$.cookie('name1', counter1, { expires: 14, path: '/' });
						$("#val1").html(counter1);
						$('#minuseins1').prop('disabled', false);
					}
					$.cookie('name1', counter1, { expires: 14, path: '/' });
					$("#val1").html(counter1);
					gesamt();
					
					
				});

				$("#go1").on("click", function() {
					zaeler1 = 19;
					$.cookie('sum1', zaeler1, { expires: 14, path: '/' });
					$("#summe1").html(zaeler1);




					counter1 = 1;
					$.cookie('name1', counter1, { expires: 14, path: '/' });
					$("#val1").html(counter1);
					$('#minuseins1').prop('disabled', false);
					gesamt();
					
					
				});

				$("#box1").hide();
					

				if ($.cookie('status1') === "visible") {
					togglePanel1($("#box1"), $("#hinzufuegen1"));
					
					
				}
				

				$("#hinzufuegen1").on("click", function() {
					togglePanel1($("#box1"), $("#hinzufuegen1"));
					zaeler1 = 19;
					$.cookie('sum1', zaeler1, { expires: 14, path: '/' });
					$("#summe1").html(zaeler1);
					gesamt();
					
					
				});

				

				$("#loeschen1").on("click", function() {
					togglePanel1($("#box1"), $("#loeschen1"));
					
					
					$.removeCookie('sum1', { path: '/' });
					$.removeCookie('name1', { path: '/' });
					gesamt();
					$.cookie("scroll", $(document).scrollTop() );
					location.reload();

				});
				
			function togglePanel1(panel1, button1) {
					var panelprev1 = panel1.is(":visible"); 
					panel1.toggle();
					if (!panelprev1) {
						$("#hinzufuegen1").hide();
						$.cookie('status1', 'visible', { path: '/' });
						

					}  else {
						$.cookie('status1', 'hidden', { path: '/' });
						$("#hinzufuegen1").html("hinzufügen");
						
					}
					
				}

			
/* .............................................................................................................................................................................................. */




				var zaeler2 = $.cookie('sum2');
				if(zaeler2 == null) {
					$.cookie('sum2', '0', { expires: 14, path: '/' });
					zaeler2 = 0;
				}

				$.cookie('sum2', zaeler2, { expires: 14, path: '/' });
				$("#summe2").html(zaeler2);

			


				var counter2 = $.cookie('name2');
				if(counter2 == null) {
					$.cookie('name2', '1', { expires: 14, path: '/' });
					counter2 = 1;
				}

				$.cookie('name2', counter2, { expires: 14, path: '/' });
				$("#val2").html(counter2);



				
				$("#pluseins2").on("click", function() {
					zaeler2 = parseInt(zaeler2) + 15;
					$.cookie('sum2', zaeler2, { expires: 14, path: '/' });
					$("#summe2").html(zaeler2);


					counter2 = parseInt(counter2) + 1;
					$.cookie('name2', counter2, { expires: 14, path: '/' });
					$("#val2").html(counter2);
					$('#minuseins2').prop('disabled', false);
					gesamt();
					
				});
				
				$("#minuseins2").on("click", function() {
		
					if (counter2 == 1) {
						$('#minuseins2').prop('disabled', true);
					} else {
						zaeler2 = parseInt(zaeler2) - 15;
						$.cookie('sum2', zaeler2, { expires: 14, path: '/' });
						$("#summe2").html(zaeler2);
						counter2 = parseInt(counter2) - 1;
						$.cookie('name2', counter2, { expires: 14, path: '/' });
						$("#val2").html(counter2);
						$('#minuseins2').prop('disabled', false);
					}
					$.cookie('name2', counter2, { expires: 14, path: '/' });
					$("#val2").html(counter2);
					gesamt();
					
					
				});

				$("#go2").on("click", function() {
					zaeler2 = 15;
					$.cookie('sum2', zaeler2, { expires: 14, path: '/' });
					$("#summe2").html(zaeler2);




					counter2 = 1;
					$.cookie('name2', counter2, { expires: 14, path: '/' });
					$("#val2").html(counter2);
					$('#minuseins2').prop('disabled', false);
					gesamt();
					
					
				});

				$("#box2").hide();
					

				if ($.cookie('status2') === "visible") {
					togglePanel2($("#box2"), $("#hinzufuegen2"));
					
					
				}
				

				$("#hinzufuegen2").on("click", function() {
					togglePanel2($("#box2"), $("#hinzufuegen2"));
					zaeler2 = 15;
					$.cookie('sum2', zaeler2, { expires: 14, path: '/' });
					$("#summe2").html(zaeler2);
					gesamt();
				});
				$("#loeschen2").on("click", function() {
					togglePanel2($("#box2"), $("#loeschen2"));
					$.removeCookie('sum2', { path: '/' });
					$.removeCookie('name2', { path: '/' });
					gesamt();
					$.cookie("scroll", $(document).scrollTop() );
					location.reload();
				});
				
			function togglePanel2(panel2, button2) {
					var panelprev2 = panel2.is(":visible"); 
					panel2.toggle();
					if (!panelprev2) {
						
						$("#hinzufuegen2").hide();
						
						$.cookie('status2', 'visible', { path: '/' });

					}  else {
						$.cookie('status2', 'hidden', { path: '/' });
						$("#hinzufuegen2").html("hinzufügen");

					}	
				}
				
				
				
/* .............................................................................................................................................................................................. */				
				

				

				var zaeler3 = $.cookie('sum3');
				if(zaeler3 == null) {
					$.cookie('sum3', '0', { expires: 14, path: '/' });
					zaeler3 = 0;
					
				}

				$.cookie('sum3', zaeler3, { expires: 14, path: '/' });
				$("#summe3").html(zaeler3);

			


				var counter3 = $.cookie('name3');
				if(counter3 == null) {
					$.cookie('name3', '1', { expires: 14, path: '/' });
					counter3 = 1;
				}

				$.cookie('name3', counter3, { expires: 14, path: '/' });
				$("#val3").html(counter3);



				
				$("#pluseins3").on("click", function() {
					zaeler3 = parseFloat(zaeler3) + parseFloat(9);
					$.cookie('sum3', zaeler3, { expires: 14, path: '/' });
					$("#summe3").html(zaeler3);


					counter3 = parseInt(counter3) + 1;
					$.cookie('name3', counter3, { expires: 14, path: '/' });
					$("#val3").html(counter3);
					$('#minuseins3').prop('disabled', false);
					gesamt();
					
					
				

				});
				
				$("#minuseins3").on("click", function() {
		
					if (counter3 == 1) {
						$('#minuseins3').prop('disabled', true);
					} else {
						zaeler3 = parseFloat(zaeler3) - parseFloat(9);
						$.cookie('sum3', zaeler3, { expires: 14, path: '/' });
						$("#summe3").html(zaeler3);
						counter3 = parseInt(counter3) - 1;
						$.cookie('name3', counter3, { expires: 14, path: '/' });
						$("#val3").html(counter3);
						$('#minuseins3').prop('disabled', false);
					}
					$.cookie('name3', counter3, { expires: 14, path: '/' });
					$("#val3").html(counter3);
					gesamt();
					
					
				});

				$("#go3").on("click", function() {
					zaeler3 = parseFloat(9);
					$.cookie('sum3', zaeler3, { expires: 14, path: '/' });
					$("#summe3").html(zaeler3);




					counter3 = 1;
					$.cookie('name3', counter3, { expires: 14, path: '/' });
					$("#val3").html(counter3);
					$('#minuseins3').prop('disabled', false);
					gesamt();
					
					
				});

				$("#box3").hide();
					

				if ($.cookie('status3') === "visible") {
					togglePanel3($("#box3"), $("#hinzufuegen3"));
					
					
				}
				

				$("#hinzufuegen3").on("click", function() {
					togglePanel3($("#box3"), $("#hinzufuegen3"));
					zaeler3 = parseFloat(9);
					$.cookie('sum3', zaeler3, { expires: 14, path: '/' });
					$("#summe3").html(zaeler3);
					gesamt();
					
					
				});
				$("#loeschen3").on("click", function() {
					togglePanel3($("#box3"), $("#loeschen3"));
					$.removeCookie('sum3', { path: '/' });
					$.removeCookie('name3', { path: '/' });
					gesamt();
					$.cookie("scroll", $(document).scrollTop() );
					location.reload();
				});
				
			function togglePanel3(panel3, button3) {
					var panelprev3 = panel3.is(":visible"); 
					panel3.toggle();
					if (!panelprev3) {
						$("#hinzufuegen3").hide();
						$.cookie('status3', 'visible', { path: '/' });
						

					}  else {
						$.cookie('status3', 'hidden', { path: '/' });
						$("#hinzufuegen3").html("hinzufügen");
						
					}	
				}

				

/* .............................................................................................................................................................................................. */





				var zaeler4 = $.cookie('sum4');
				if(zaeler4 == null) {
					$.cookie('sum4', '0', { expires: 14, path: '/' });
					zaeler4 = 0;
					
				}

				$.cookie('sum4', zaeler4, { expires: 14, path: '/' });
				$("#summe4").html(zaeler4);

			


				var counter4 = $.cookie('name4');
				if(counter4 == null) {
					$.cookie('name4', '1', { expires: 14, path: '/' });
					counter4 = 1;
				}

				$.cookie('name4', counter4, { expires: 14, path: '/' });
				$("#val4").html(counter4);



				
				$("#pluseins4").on("click", function() {
					zaeler4 = parseFloat(zaeler4) + parseFloat(7.5);
					$.cookie('sum4', zaeler4, { expires: 14, path: '/' });
					$("#summe4").html(zaeler4);


					counter4 = parseInt(counter4) + 1;
					$.cookie('name4', counter4, { expires: 14, path: '/' });
					$("#val4").html(counter4);
					$('#minuseins4').prop('disabled', false);
					gesamt();
					
					
				

				});
				
				$("#minuseins4").on("click", function() {
		
					if (counter4 == 1) {
						$('#minuseins4').prop('disabled', true);
					} else {
						zaeler4 = parseFloat(zaeler4) - parseFloat(7.5);
						$.cookie('sum4', zaeler4, { expires: 14, path: '/' });
						$("#summe4").html(zaeler4);
						counter4 = parseInt(counter4) - 1;
						$.cookie('name4', counter4, { expires: 14, path: '/' });
						$("#val4").html(counter4);
						$('#minuseins4').prop('disabled', false);
					}
					$.cookie('name4', counter4, { expires: 14, path: '/' });
					$("#val4").html(counter4);
					gesamt();
					
					
				});

				$("#go4").on("click", function() {
					zaeler4 = parseFloat(7.5);
					$.cookie('sum4', zaeler4, { expires: 14, path: '/' });
					$("#summe4").html(zaeler4);




					counter4 = 1;
					$.cookie('name4', counter4, { expires: 14, path: '/' });
					$("#val4").html(counter4);
					$('#minuseins4').prop('disabled', false);
					gesamt();
					
					
				});

				$("#box4").hide();
					

				if ($.cookie('status4') === "visible") {
					togglePanel4($("#box4"), $("#hinzufuegen4"));
					
					
				}
				

				$("#hinzufuegen4").on("click", function() {
					togglePanel4($("#box4"), $("#hinzufuegen4"));
					zaeler4 = parseFloat(7.5);
					$.cookie('sum4', zaeler4, { expires: 14, path: '/' });
					$("#summe4").html(zaeler4);
					gesamt();
					
					
				});
				$("#loeschen4").on("click", function() {
					togglePanel4($("#box4"), $("#loeschen4"));
					$.removeCookie('sum4', { path: '/' });
					$.removeCookie('name4', { path: '/' });
					gesamt();
					$.cookie("scroll", $(document).scrollTop() );
					location.reload();
				});
				
			function togglePanel4(panel4, button4) {
					var panelprev4 = panel4.is(":visible"); 
					panel4.toggle();
					if (!panelprev4) {
						$("#hinzufuegen4").hide();
						$.cookie('status4', 'visible', { path: '/' });
						

					}  else {
						$.cookie('status4', 'hidden', { path: '/' });
						$("#hinzufuegen4").html("hinzufügen");
						
					}	
				}




/* .............................................................................................................................................................................................. */





				var zaeler5 = $.cookie('sum5');
				if(zaeler5 == null) {
					$.cookie('sum5', '0', { expires: 14, path: '/' });
					zaeler5 = 0;
					
				}

				$.cookie('sum5', zaeler5, { expires: 14, path: '/' });
				$("#summe5").html(zaeler5);

			


				var counter5 = $.cookie('name5');
				if(counter5 == null) {
					$.cookie('name5', '1', { expires: 14, path: '/' });
					counter5 = 1;
				}

				$.cookie('name5', counter5, { expires: 14, path: '/' });
				$("#val5").html(counter5);



				
				$("#pluseins5").on("click", function() {
					zaeler5 = parseFloat(zaeler5) + parseFloat(7.5);
					$.cookie('sum5', zaeler5, { expires: 14, path: '/' });
					$("#summe5").html(zaeler5);


					counter5 = parseInt(counter5) + 1;
					$.cookie('name5', counter5, { expires: 14, path: '/' });
					$("#val5").html(counter5);
					$('#minuseins5').prop('disabled', false);
					gesamt();
					
					
				

				});
				
				$("#minuseins5").on("click", function() {
		
					if (counter5 == 1) {
						$('#minuseins5').prop('disabled', true);
					} else {
						zaeler5 = parseFloat(zaeler5) - parseFloat(7.5);
						$.cookie('sum5', zaeler5, { expires: 14, path: '/' });
						$("#summe5").html(zaeler5);
						counter5 = parseInt(counter5) - 1;
						$.cookie('name5', counter5, { expires: 14, path: '/' });
						$("#val5").html(counter5);
						$('#minuseins5').prop('disabled', false);
					}
					$.cookie('name5', counter5, { expires: 14, path: '/' });
					$("#val5").html(counter5);
					gesamt();
					
					
				});

				$("#go5").on("click", function() {
					zaeler5 = parseFloat(7.5);
					$.cookie('sum5', zaeler5, { expires: 14, path: '/' });
					$("#summe5").html(zaeler5);




					counter5 = 1;
					$.cookie('name5', counter5, { expires: 14, path: '/' });
					$("#val5").html(counter5);
					$('#minuseins5').prop('disabled', false);
					gesamt();
					
					
				});

				$("#box5").hide();
					

				if ($.cookie('status5') === "visible") {
					togglePanel5($("#box5"), $("#hinzufuegen5"));
					
					
				}
				

				$("#hinzufuegen5").on("click", function() {
					togglePanel5($("#box5"), $("#hinzufuegen5"));
					zaeler5 = parseFloat(7.5);
					$.cookie('sum5', zaeler5, { expires: 14, path: '/' });
					$("#summe5").html(zaeler5);
					gesamt();
					
					
				});
				$("#loeschen5").on("click", function() {
					togglePanel5($("#box5"), $("#loeschen5"));
					$.removeCookie('sum5', { path: '/' });
					$.removeCookie('name5', { path: '/' });
					gesamt();
					$.cookie("scroll", $(document).scrollTop() );
					location.reload();
				});
				
			function togglePanel5(panel5, button5) {
					var panelprev5 = panel5.is(":visible"); 
					panel5.toggle();
					if (!panelprev5) {
						$("#hinzufuegen5").hide();
						$.cookie('status5', 'visible', { path: '/' });
						

					}  else {
						$.cookie('status5', 'hidden', { path: '/' });
						$("#hinzufuegen5").html("hinzufügen");
						
					}	
				}




/* .............................................................................................................................................................................................. */


			




				var zaeler6 = $.cookie('sum6');
				if(zaeler6 == null) {
					$.cookie('sum6', '0', { expires: 14, path: '/' });
					zaeler6 = 0;
					
				}

				$.cookie('sum6', zaeler6, { expires: 14, path: '/' });
				$("#summe6").html(zaeler6);

			


				var counter6 = $.cookie('name6');
				if(counter6 == null) {
					$.cookie('name6', '1', { expires: 14, path: '/' });
					counter6 = 1;
				}

				$.cookie('name6', counter6, { expires: 14, path: '/' });
				$("#val6").html(counter6);



				
				$("#pluseins6").on("click", function() {
					zaeler6 = parseFloat(zaeler6) + parseFloat(7.5);
					$.cookie('sum6', zaeler6, { expires: 14, path: '/' });
					$("#summe6").html(zaeler6);


					counter6 = parseInt(counter6) + 1;
					$.cookie('name6', counter6, { expires: 14, path: '/' });
					$("#val6").html(counter6);
					$('#minuseins6').prop('disabled', false);
					gesamt();
					
					
				

				});
				
				$("#minuseins6").on("click", function() {
		
					if (counter6 == 1) {
						$('#minuseins6').prop('disabled', true);
					} else {
						zaeler6 = parseFloat(zaeler6) - parseFloat(7.5);
						$.cookie('sum6', zaeler6, { expires: 14, path: '/' });
						$("#summe6").html(zaeler6);
						counter6 = parseInt(counter6) - 1;
						$.cookie('name6', counter6, { expires: 14, path: '/' });
						$("#val6").html(counter6);
						$('#minuseins6').prop('disabled', false);
					}
					$.cookie('name6', counter6, { expires: 14, path: '/' });
					$("#val6").html(counter6);
					gesamt();
					
					
				});

				$("#go6").on("click", function() {
					zaeler6 = parseFloat(7.5);
					$.cookie('sum6', zaeler6, { expires: 14, path: '/' });
					$("#summe6").html(zaeler6);




					counter6 = 1;
					$.cookie('name6', counter6, { expires: 14, path: '/' });
					$("#val6").html(counter6);
					$('#minuseins6').prop('disabled', false);
					gesamt();
					
					
				});

				$("#box6").hide();
					

				if ($.cookie('status6') === "visible") {
					togglePanel6($("#box6"), $("#hinzufuegen6"));
					
					
				}
				

				$("#hinzufuegen6").on("click", function() {
					togglePanel6($("#box6"), $("#hinzufuegen6"));
					zaeler6 = parseFloat(7.5);
					$.cookie('sum6', zaeler6, { expires: 14, path: '/' });
					$("#summe6").html(zaeler6);
					gesamt();
					
					
				});
				$("#loeschen6").on("click", function() {
					togglePanel6($("#box6"), $("#loeschen6"));
					$.removeCookie('sum6', { path: '/' });
					$.removeCookie('name6', { path: '/' });
					gesamt();
					$.cookie("scroll", $(document).scrollTop() );
					location.reload();
				});
				
			function togglePanel6(panel6, button6) {
					var panelprev6 = panel6.is(":visible"); 
					panel6.toggle();
					if (!panelprev6) {
						$("#hinzufuegen6").hide();
						$.cookie('status6', 'visible', { path: '/' });
						

					}  else {
						$.cookie('status6', 'hidden', { path: '/' });
						$("#hinzufuegen6").html("hinzufügen");
						
					}	
				}


			

/* .............................................................................................................................................................................................. */




				var zaeler7 = $.cookie('sum7');
				if(zaeler7 == null) {
					$.cookie('sum7', '0', { expires: 14, path: '/' });
					zaeler7 = 0;
					
				}

				$.cookie('sum7', zaeler7, { expires: 14, path: '/' });
				$("#summe7").html(zaeler7);

			


				var counter7 = $.cookie('name7');
				if(counter7 == null) {
					$.cookie('name7', '1', { expires: 14, path: '/' });
					counter7 = 1;
				}

				$.cookie('name7', counter7, { expires: 14, path: '/' });
				$("#val7").html(counter7);



				
				$("#pluseins7").on("click", function() {
					zaeler7 = parseFloat(zaeler7) + parseFloat(7.5);
					$.cookie('sum7', zaeler7, { expires: 14, path: '/' });
					$("#summe7").html(zaeler7);


					counter7 = parseInt(counter7) + 1;
					$.cookie('name7', counter7, { expires: 14, path: '/' });
					$("#val7").html(counter7);
					$('#minuseins7').prop('disabled', false);
					gesamt();
					
					
				

				});
				
				$("#minuseins7").on("click", function() {
		
					if (counter7 == 1) {
						$('#minuseins7').prop('disabled', true);
					} else {
						zaeler7 = parseFloat(zaeler7) - parseFloat(7.5);
						$.cookie('sum7', zaeler7, { expires: 14, path: '/' });
						$("#summe7").html(zaeler7);
						counter7 = parseInt(counter7) - 1;
						$.cookie('name7', counter7, { expires: 14, path: '/' });
						$("#val7").html(counter7);
						$('#minuseins7').prop('disabled', false);
					}
					$.cookie('name7', counter7, { expires: 14, path: '/' });
					$("#val7").html(counter7);
					gesamt();
					
					
				});

				$("#go7").on("click", function() {
					zaeler7 = parseFloat(7.5);
					$.cookie('sum7', zaeler7, { expires: 14, path: '/' });
					$("#summe7").html(zaeler7);




					counter7 = 1;
					$.cookie('name7', counter7, { expires: 14, path: '/' });
					$("#val7").html(counter7);
					$('#minuseins7').prop('disabled', false);
					gesamt();
					
					
				});

				$("#box7").hide();
					

				if ($.cookie('status7') === "visible") {
					togglePanel7($("#box7"), $("#hinzufuegen7"));
					
					
				}
				

				$("#hinzufuegen7").on("click", function() {
					togglePanel7($("#box7"), $("#hinzufuegen7"));
					zaeler7 = parseFloat(7.5);
					$.cookie('sum7', zaeler7, { expires: 14, path: '/' });
					$("#summe7").html(zaeler7);
					gesamt();
					
					
				});
				$("#loeschen7").on("click", function() {
					togglePanel7($("#box7"), $("#loeschen7"));
					$.removeCookie('sum7', { path: '/' });
					$.removeCookie('name7', { path: '/' });
					gesamt();
					$.cookie("scroll", $(document).scrollTop() );
					location.reload();
				});
				
			function togglePanel7(panel7, button7) {
					var panelprev7 = panel7.is(":visible"); 
					panel7.toggle();
					if (!panelprev7) {
						$("#hinzufuegen7").hide();
						$.cookie('status7', 'visible', { path: '/' });
						

					}  else {
						$.cookie('status7', 'hidden', { path: '/' });
						$("#hinzufuegen7").html("hinzufügen");
						
					}	
				}
	
				

/* .............................................................................................................................................................................................. */




				var zaeler8 = $.cookie('sum8');
				if(zaeler8 == null) {
					$.cookie('sum8', '0', { expires: 14, path: '/' });
					zaeler8 = 0;
					
				}

				$.cookie('sum8', zaeler8, { expires: 14, path: '/' });
				$("#summe8").html(zaeler8);

			


				var counter8 = $.cookie('name8');
				if(counter8 == null) {
					$.cookie('name8', '1', { expires: 14, path: '/' });
					counter8 = 1;
				}

				$.cookie('name8', counter8, { expires: 14, path: '/' });
				$("#val8").html(counter8);



				
				$("#pluseins8").on("click", function() {
					zaeler8 = parseFloat(zaeler8) + parseFloat(26);
					$.cookie('sum8', zaeler8, { expires: 14, path: '/' });
					$("#summe8").html(zaeler8);


					counter8 = parseInt(counter8) + 1;
					$.cookie('name8', counter8, { expires: 14, path: '/' });
					$("#val8").html(counter8);
					$('#minuseins8').prop('disabled', false);
					gesamt();
					
					
				

				});
				
				$("#minuseins8").on("click", function() {
		
					if (counter8 == 1) {
						$('#minuseins8').prop('disabled', true);
					} else {
						zaeler8 = parseFloat(zaeler8) - parseFloat(26);
						$.cookie('sum8', zaeler8, { expires: 14, path: '/' });
						$("#summe8").html(zaeler8);
						counter8 = parseInt(counter8) - 1;
						$.cookie('name8', counter8, { expires: 14, path: '/' });
						$("#val8").html(counter8);
						$('#minuseins8').prop('disabled', false);
					}
					$.cookie('name8', counter8, { expires: 14, path: '/' });
					$("#val8").html(counter8);
					gesamt();
					
					
				});

				$("#go8").on("click", function() {
					zaeler8 = parseFloat(26);
					$.cookie('sum8', zaeler8, { expires: 14, path: '/' });
					$("#summe8").html(zaeler8);




					counter8 = 1;
					$.cookie('name8', counter8, { expires: 14, path: '/' });
					$("#val8").html(counter8);
					$('#minuseins8').prop('disabled', false);
					gesamt();
					
					
				});

				$("#box8").hide();
					

				if ($.cookie('status8') === "visible") {
					togglePanel8($("#box8"), $("#hinzufuegen8"));
					
					
				}
				

				$("#hinzufuegen8").on("click", function() {
					togglePanel8($("#box8"), $("#hinzufuegen8"));
					zaeler8 = parseFloat(26);
					$.cookie('sum8', zaeler8, { expires: 14, path: '/' });
					$("#summe8").html(zaeler8);
					gesamt();
					
					
				});
				$("#loeschen8").on("click", function() {
					togglePanel8($("#box8"), $("#loeschen8"));
					$.removeCookie('sum8', { path: '/' });
					$.removeCookie('name8', { path: '/' });
					gesamt();
					$.cookie("scroll", $(document).scrollTop() );
					location.reload();
				});
				
			function togglePanel8(panel8, button8) {
					var panelprev8 = panel8.is(":visible"); 
					panel8.toggle();
					if (!panelprev8) {
						$("#hinzufuegen8").hide();
						$.cookie('status8', 'visible', { path: '/' });
						

					}  else {
						$.cookie('status8', 'hidden', { path: '/' });
						$("#hinzufuegen8").html("hinzufügen");
						
					}	
				}





/* .............................................................................................................................................................................................. */





				var zaeler9 = $.cookie('sum9');
				if(zaeler9 == null) {
					$.cookie('sum9', '0', { expires: 14, path: '/' });
					zaeler9 = 0;
					
				}

				$.cookie('sum9', zaeler9, { expires: 14, path: '/' });
				$("#summe9").html(zaeler9);

			


				var counter9 = $.cookie('name9');
				if(counter9 == null) {
					$.cookie('name9', '1', { expires: 14, path: '/' });
					counter9 = 1;
				}

				$.cookie('name9', counter9, { expires: 14, path: '/' });
				$("#val9").html(counter9);



				
				$("#pluseins9").on("click", function() {
					zaeler9 = parseFloat(zaeler9) + parseFloat(28);
					$.cookie('sum9', zaeler9, { expires: 14, path: '/' });
					$("#summe9").html(zaeler9);


					counter9 = parseInt(counter9) + 1;
					$.cookie('name9', counter9, { expires: 14, path: '/' });
					$("#val9").html(counter9);
					$('#minuseins9').prop('disabled', false);
					gesamt();
					
					
				

				});
				
				$("#minuseins9").on("click", function() {
		
					if (counter9 == 1) {
						$('#minuseins9').prop('disabled', true);
					} else {
						zaeler9 = parseFloat(zaeler9) - parseFloat(28);
						$.cookie('sum9', zaeler9, { expires: 14, path: '/' });
						$("#summe9").html(zaeler9);
						counter9 = parseInt(counter9) - 1;
						$.cookie('name9', counter9, { expires: 14, path: '/' });
						$("#val9").html(counter9);
						$('#minuseins9').prop('disabled', false);
					}
					$.cookie('name9', counter9, { expires: 14, path: '/' });
					$("#val9").html(counter9);
					gesamt();
					
					
				});

				$("#go9").on("click", function() {
					zaeler9 = parseFloat(28);
					$.cookie('sum9', zaeler9, { expires: 14, path: '/' });
					$("#summe9").html(zaeler9);




					counter9 = 1;
					$.cookie('name9', counter9, { expires: 14, path: '/' });
					$("#val9").html(counter9);
					$('#minuseins9').prop('disabled', false);
					gesamt();
					
					
				});

				$("#box9").hide();
					

				if ($.cookie('status9') === "visible") {
					togglePanel9($("#box9"), $("#hinzufuegen9"));
					
					
				}
				

				$("#hinzufuegen9").on("click", function() {
					togglePanel9($("#box9"), $("#hinzufuegen9"));
					zaeler9 = parseFloat(28);
					$.cookie('sum9', zaeler9, { expires: 14, path: '/' });
					$("#summe9").html(zaeler9);
					gesamt();
					
					
				});
				$("#loeschen9").on("click", function() {
					togglePanel9($("#box9"), $("#loeschen9"));
					$.removeCookie('sum9', { path: '/' });
					$.removeCookie('name9', { path: '/' });
					gesamt();
					$.cookie("scroll", $(document).scrollTop() );
					location.reload();
				});
				
			function togglePanel9(panel9, button9) {
					var panelprev9 = panel9.is(":visible"); 
					panel9.toggle();
					if (!panelprev9) {
						$("#hinzufuegen9").hide();
						$.cookie('status9', 'visible', { path: '/' });
						

					}  else {
						$.cookie('status9', 'hidden', { path: '/' });
						$("#hinzufuegen9").html("hinzufügen");
						
					}	
				}

				


/* .............................................................................................................................................................................................. */
			




				var zaeler10 = $.cookie('sum10');
				if(zaeler10 == null) {
					$.cookie('sum10', '0', { expires: 14, path: '/' });
					zaeler10 = 0;
					
				}

				$.cookie('sum10', zaeler10, { expires: 14, path: '/' });
				$("#summe10").html(zaeler10);

			


				var counter10 = $.cookie('name10');
				if(counter10 == null) {
					$.cookie('name10', '1', { expires: 14, path: '/' });
					counter10 = 1;
				}

				$.cookie('name10', counter10, { expires: 14, path: '/' });
				$("#val10").html(counter10);



				
				$("#pluseins10").on("click", function() {
					zaeler10 = parseFloat(zaeler10) + parseFloat(3);
					$.cookie('sum10', zaeler10, { expires: 14, path: '/' });
					$("#summe10").html(zaeler10);


					counter10 = parseInt(counter10) + 1;
					$.cookie('name10', counter10, { expires: 14, path: '/' });
					$("#val10").html(counter10);
					$('#minuseins10').prop('disabled', false);
					gesamt();
					
					
				

				});
				
				$("#minuseins10").on("click", function() {
		
					if (counter10 == 1) {
						$('#minuseins10').prop('disabled', true);
					} else {
						zaeler10 = parseFloat(zaeler10) - parseFloat(3);
						$.cookie('sum10', zaeler10, { expires: 14, path: '/' });
						$("#summe10").html(zaeler10);
						counter10 = parseInt(counter10) - 1;
						$.cookie('name10', counter10, { expires: 14, path: '/' });
						$("#val10").html(counter10);
						$('#minuseins10').prop('disabled', false);
					}
					$.cookie('name10', counter10, { expires: 14, path: '/' });
					$("#val10").html(counter10);
					gesamt();
					
					
				});

				$("#go10").on("click", function() {
					zaeler10 = parseFloat(3);
					$.cookie('sum10', zaeler10, { expires: 14, path: '/' });
					$("#summe10").html(zaeler10);




					counter10 = 1;
					$.cookie('name10', counter10, { expires: 14, path: '/' });
					$("#val10").html(counter10);
					$('#minuseins10').prop('disabled', false);
					gesamt();
					
					
				});

				$("#box10").hide();
					

				if ($.cookie('status10') === "visible") {
					togglePanel10($("#box10"), $("#hinzufuegen10"));
					
					
				}
				

				$("#hinzufuegen10").on("click", function() {
					togglePanel10($("#box10"), $("#hinzufuegen10"));
					zaeler10 = parseFloat(3);
					$.cookie('sum10', zaeler10, { expires: 14, path: '/' });
					$("#summe10").html(zaeler10);
					gesamt();
					
					
				});
				$("#loeschen10").on("click", function() {
					togglePanel10($("#box10"), $("#loeschen10"));
					$.removeCookie('sum10', { path: '/' });
					$.removeCookie('name10', { path: '/' });
					gesamt();
					$.cookie("scroll", $(document).scrollTop() );
					location.reload();
				});
				
			function togglePanel10(panel10, button10) {
					var panelprev10 = panel10.is(":visible"); 
					panel10.toggle();
					if (!panelprev10) {
						$("#hinzufuegen10").hide();
						$.cookie('status10', 'visible', { path: '/' });
						

					}  else {
						$.cookie('status10', 'hidden', { path: '/' });
						$("#hinzufuegen10").html("hinzufügen");
						
					}	
				}



/* .............................................................................................................................................................................................. */				



				


				




				var zaeler11 = $.cookie('sum11');
				if(zaeler11 == null) {
					$.cookie('sum11', '0', { expires: 14, path: '/' });
					zaeler11 = 0;
					
				}

				$.cookie('sum11', zaeler11, { expires: 14, path: '/' });
				$("#summe11").html(zaeler11);

			


				var counter11 = $.cookie('name11');
				if(counter11 == null) {
					$.cookie('name11', '1', { expires: 14, path: '/' });
					counter11 = 1;
				}

				$.cookie('name11', counter11, { expires: 14, path: '/' });
				$("#val11").html(counter11);



				
				$("#pluseins11").on("click", function() {
					zaeler11 = parseFloat(zaeler11) + parseFloat(2);
					$.cookie('sum11', zaeler11, { expires: 14, path: '/' });
					$("#summe11").html(zaeler11);


					counter11 = parseInt(counter11) + 1;
					$.cookie('name11', counter11, { expires: 14, path: '/' });
					$("#val11").html(counter11);
					$('#minuseins11').prop('disabled', false);
					gesamt();
					
					
				

				});
				
				$("#minuseins11").on("click", function() {
		
					if (counter11 == 1) {
						$('#minuseins11').prop('disabled', true);
					} else {
						zaeler11 = parseFloat(zaeler11) - parseFloat(2);
						$.cookie('sum11', zaeler11, { expires: 14, path: '/' });
						$("#summe11").html(zaeler11);
						counter11 = parseInt(counter11) - 1;
						$.cookie('name11', counter11, { expires: 14, path: '/' });
						$("#val11").html(counter11);
						$('#minuseins11').prop('disabled', false);
					}
					$.cookie('name11', counter11, { expires: 14, path: '/' });
					$("#val11").html(counter11);
					gesamt();
					
					
				});

				$("#go11").on("click", function() {
					zaeler11 = parseFloat(2);
					$.cookie('sum11', zaeler11, { expires: 14, path: '/' });
					$("#summe11").html(zaeler11);




					counter11 = 1;
					$.cookie('name11', counter11, { expires: 14, path: '/' });
					$("#val11").html(counter11);
					$('#minuseins11').prop('disabled', false);
					gesamt();
					
					
				});

				$("#box11").hide();
					

				if ($.cookie('status11') === "visible") {
					togglePanel11($("#box11"), $("#hinzufuegen11"));
					
					
				}
				

				$("#hinzufuegen11").on("click", function() {
					togglePanel11($("#box11"), $("#hinzufuegen11"));
					zaeler11 = parseFloat(2);
					$.cookie('sum11', zaeler11, { expires: 14, path: '/' });
					$("#summe11").html(zaeler11);
					gesamt();
					
					
				});
				$("#loeschen11").on("click", function() {
					togglePanel11($("#box11"), $("#loeschen11"));
					$.removeCookie('sum11', { path: '/' });
					$.removeCookie('name11', { path: '/' });
					gesamt();
					$.cookie("scroll", $(document).scrollTop() );
					location.reload();
				});
				
			function togglePanel11(panel11, button11) {
					var panelprev11 = panel11.is(":visible"); 
					panel11.toggle();
					if (!panelprev11) {
						$("#hinzufuegen11").hide();
						$.cookie('status11', 'visible', { path: '/' });
						

					}  else {
						$.cookie('status11', 'hidden', { path: '/' });
						$("#hinzufuegen11").html("hinzufügen");
						
					}	
				}



/* .............................................................................................................................................................................................. */


				




				var zaeler12 = $.cookie('sum12');
				if(zaeler12 == null) {
					$.cookie('sum12', '0', { expires: 14, path: '/' });
					zaeler12 = 0;
					
				}

				$.cookie('sum12', zaeler12, { expires: 14, path: '/' });
				$("#summe12").html(zaeler12);

			


				var counter12 = $.cookie('name12');
				if(counter12 == null) {
					$.cookie('name12', '1', { expires: 14, path: '/' });
					counter12 = 1;
				}

				$.cookie('name12', counter12, { expires: 14, path: '/' });
				$("#val12").html(counter12);



				
				$("#pluseins12").on("click", function() {
					zaeler12 = parseFloat(zaeler12) + parseFloat(1.5);
					$.cookie('sum12', zaeler12, { expires: 14, path: '/' });
					$("#summe12").html(zaeler12);


					counter12 = parseInt(counter12) + 1;
					$.cookie('name12', counter12, { expires: 14, path: '/' });
					$("#val12").html(counter12);
					$('#minuseins12').prop('disabled', false);
					gesamt();
					
					
				

				});
				
				$("#minuseins12").on("click", function() {
		
					if (counter12 == 1) {
						$('#minuseins12').prop('disabled', true);
					} else {
						zaeler12 = parseFloat(zaeler12) - parseFloat(1.5);
						$.cookie('sum12', zaeler12, { expires: 14, path: '/' });
						$("#summe12").html(zaeler12);
						counter12 = parseInt(counter12) - 1;
						$.cookie('name12', counter12, { expires: 14, path: '/' });
						$("#val12").html(counter12);
						$('#minuseins12').prop('disabled', false);
					}
					$.cookie('name12', counter12, { expires: 14, path: '/' });
					$("#val12").html(counter12);
					gesamt();
					
					
				});

				$("#go12").on("click", function() {
					zaeler12 = parseFloat(1.5);
					$.cookie('sum12', zaeler12, { expires: 14, path: '/' });
					$("#summe12").html(zaeler12);




					counter12 = 1;
					$.cookie('name12', counter12, { expires: 14, path: '/' });
					$("#val12").html(counter12);
					$('#minuseins12').prop('disabled', false);
					gesamt();
					
					
				});

				$("#box12").hide();
					

				if ($.cookie('status12') === "visible") {
					togglePanel12($("#box12"), $("#hinzufuegen12"));
					
					
				}
				

				$("#hinzufuegen12").on("click", function() {
					togglePanel12($("#box12"), $("#hinzufuegen12"));
					zaeler12 = parseFloat(1.5);
					$.cookie('sum12', zaeler12, { expires: 14, path: '/' });
					$("#summe12").html(zaeler12);
					gesamt();
					
					
				});
				$("#loeschen12").on("click", function() {
					togglePanel12($("#box12"), $("#loeschen12"));
					$.removeCookie('sum12', { path: '/' });
					$.removeCookie('name12', { path: '/' });
					gesamt();
					$.cookie("scroll", $(document).scrollTop() );
					location.reload();
				});
				
			function togglePanel12(panel12, button12) {
					var panelprev12 = panel12.is(":visible"); 
					panel12.toggle();
					if (!panelprev12) {
						$("#hinzufuegen12").hide();
						$.cookie('status12', 'visible', { path: '/' });
						

					}  else {
						$.cookie('status12', 'hidden', { path: '/' });
						$("#hinzufuegen12").html("hinzufügen");
						
					}	
				}



/* .............................................................................................................................................................................................. */


				




				var zaeler13 = $.cookie('sum13');
				if(zaeler13 == null) {
					$.cookie('sum13', '0', { expires: 14, path: '/' });
					zaeler13 = 0;
					
				}

				$.cookie('sum13', zaeler13, { expires: 14, path: '/' });
				$("#summe13").html(zaeler13);

			


				var counter13 = $.cookie('name13');
				if(counter13 == null) {
					$.cookie('name13', '1', { expires: 14, path: '/' });
					counter13 = 1;
				}

				$.cookie('name13', counter13, { expires: 14, path: '/' });
				$("#val13").html(counter13);



				
				$("#pluseins13").on("click", function() {
					zaeler13 = parseFloat(zaeler13) + parseFloat(0.7);
					var meep13 = zaeler13.toFixed(2);
					zaeler13 = parseFloat(meep13);
					$.cookie('sum13', zaeler13, { expires: 14, path: '/' });
					$("#summe13").html(zaeler13);


					counter13 = parseInt(counter13) + 1;
					$.cookie('name13', counter13, { expires: 14, path: '/' });
					$("#val13").html(counter13);
					$('#minuseins13').prop('disabled', false);
					gesamt();
					
					
				

				});
				
				$("#minuseins13").on("click", function() {
		
					if (counter13 == 1) {
						$('#minuseins13').prop('disabled', true);
					} else {
						zaeler13 = parseFloat(zaeler13) - parseFloat(0.7);
						var meep13 = zaeler13.toFixed(2);
						zaeler13 = parseFloat(meep13);
						$.cookie('sum13', zaeler13, { expires: 14, path: '/' });
						$("#summe13").html(zaeler13);
						counter13 = parseInt(counter13) - 1;
						$.cookie('name13', counter13, { expires: 14, path: '/' });
						$("#val13").html(counter13);
						$('#minuseins13').prop('disabled', false);
					}
					$.cookie('name13', counter13, { expires: 14, path: '/' });
					$("#val13").html(counter13);
					gesamt();
					
					
				});

				$("#go13").on("click", function() {
					zaeler13 = parseFloat(0.7);
					$.cookie('sum13', zaeler13, { expires: 14, path: '/' });
					$("#summe13").html(zaeler13);




					counter13 = 1;
					$.cookie('name13', counter13, { expires: 14, path: '/' });
					$("#val13").html(counter13);
					$('#minuseins13').prop('disabled', false);
					gesamt();
					
					
				});

				$("#box13").hide();
					

				if ($.cookie('status13') === "visible") {
					togglePanel13($("#box13"), $("#hinzufuegen13"));
					
					
				}
				

				$("#hinzufuegen13").on("click", function() {
					togglePanel13($("#box13"), $("#hinzufuegen13"));
					zaeler13 = parseFloat(0.7);
					$.cookie('sum13', zaeler13, { expires: 14, path: '/' });
					$("#summe13").html(zaeler13);
					gesamt();
					
					
				});
				$("#loeschen13").on("click", function() {
					togglePanel13($("#box13"), $("#loeschen13"));
					$.removeCookie('sum13', { path: '/' });
					$.removeCookie('name13', { path: '/' });
					gesamt();
					$.cookie("scroll", $(document).scrollTop() );
					location.reload();
				});
				
			function togglePanel13(panel13, button13) {
					var panelprev13 = panel13.is(":visible"); 
					panel13.toggle();
					if (!panelprev13) {
						$("#hinzufuegen13").hide();
						$.cookie('status13', 'visible', { path: '/' });
						

					}  else {
						$.cookie('status13', 'hidden', { path: '/' });
						$("#hinzufuegen13").html("hinzufügen");
						
					}	
				}

/* .............................................................................................................................................................................................. */

				
/* gesamtsumme -------------------------------------------------------------------------------------------------------------------------------------------------------------------*/	


				
				function gesamt() {
				var ges = $.cookie('gesa');
		
				if(ges == null) {
					$.cookie('gesa', '0', { expires: 14, path: '/' });
					ges = 0;
				} else {
					ges =  parseInt(zaeler1) +  + parseInt(zaeler2) + parseFloat(zaeler3) + parseFloat(zaeler4) + parseFloat(zaeler5) + parseFloat(zaeler6) + parseFloat(zaeler7) + parseFloat(zaeler8) + parseFloat(zaeler9) + parseFloat(zaeler10) + parseFloat(zaeler11) + parseFloat(zaeler12) + parseFloat(zaeler13);
					var meep = ges.toFixed(2);
					ges = parseFloat(meep);
					$.cookie('gesa', ges, { expires: 14, path: '/' });
					$("#gesamtsumme").html(ges);
				}
				
				}
				gesamt();

				
			


			});



			





