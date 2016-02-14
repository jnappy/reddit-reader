$( document ).ready(function() {


  $("#sport-nav").addClass('krossover-orange');
		$('#select-a-sport a').click(function(){
			clickRadioButton(this)
  	  $("#select-a-sport").addClass('animated fadeOut display-none');
  	  	$("#select-a-division").removeClass('display-none').addClass('animated fadeIn');
  	  	 	$("#division-nav").addClass('krossover-orange');
  	  	 	$("#sport-nav").removeClass('krossover-orange');
  	  	 	$(".reset-filters-desktop").removeClass('display-none');
  	  	 	$(".reset-filters-desktop").addClass('animated fadeIn');
  	  	 	


		});
		$('#select-a-division a').click(function(){
			clickRadioButton(this)
  	  $("#select-a-division").addClass('animated fadeOut display-none');
  	   $("#select-a-gender").removeClass('display-none').addClass('animated fadeIn');
  	     $("#gender-nav").addClass('krossover-orange');
  	       $("#division-nav").removeClass('krossover-orange');
  	       $("#breadcrumbs-level").removeClass('display-none').addClass('animated fadeInDown');
  	       $("#breadcrumbs-sport").addClass('display-none');



		});
		$('#select-a-gender a').click(function(){
			clickRadioButton(this)
  	  $("#select-a-gender").addClass('animated fadeOut display-none');
  	  $("#select-a-stat").removeClass('display-none').addClass('animated fadeIn');
  	   $("#stat-nav").addClass('krossover-orange');
  	     $("#gender-nav").removeClass('krossover-orange');
  	     $("#breadcrumbs-sex").removeClass('display-none').addClass('animated fadeInDown');
  	     $("#breadcrumbs-level").addClass('display-none');




		});

		$('#select-a-stat a').click(function(){
  	   $("#leaders-nav").addClass('krossover-orange');
  	     $("#stat-nav").removeClass('krossover-orange');


		});

				$('#get-leaders-button').click(function(){
					$("#sport-nav").removeClass('krossover-orange');
					$("#leaders-nav").addClass('krossover-orange');


		});



	// ajax to replace form with leader board
	$('.select-a-stat-link').click(function(){
		event.preventDefault();
		clickRadioButton(this)
		object = {}
		$('input:radio').filter(":checked").map(function(){
			object[this.name] = this.value.toLowerCase().replace(/ /g, '-')
		})
		var response = $.ajax({
			method: "POST",
			url: "/leaderboard",
			dataType: 'json',
			data: {
				sport: object['sport'],
				level: object['level'],
				sex: object['sex'],
				stat: object['stat']
			},
		}).always(function() {
			console.log( "done" );
			$('#swap-content').replaceWith($(response.responseText).find("#swap-content"))
	  });	
	})

	// clicking the radio button when you click on a circle 
	clickRadioButton = function(data){
		radioId = "#radio-" + data.text.trim().toLowerCase().replace(/ /g, '-')
		$(radioId).prop("checked", true)
	}; 



});



