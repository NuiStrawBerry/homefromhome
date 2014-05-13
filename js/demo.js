$(function () {

   // Slider
   /* $('#slider').slider({
        range: true,
        values: [17, 67]
    });*/
	/**slider bar**/
	 $( "#bedrooms-slider" ).slider({
		range: true,
		min: 1,
		max: 6,
		values: [ 1, 6 ],
		slide: function( event, ui ) {
			$( "#min-bedrooms" ).val(ui.values[ 0 ]);
			$( "#max-bedrooms" ).val(ui.values[ 1 ]);

		}
		});
		$( "#min-bedrooms" ).val($( "#bedrooms-slider" ).slider( "values", 0 ));
		$( "#max-bedrooms" ).val($( "#bedrooms-slider" ).slider( "values", 1 ));

		// floorsize-slider
		$( "#floorsize-slider" ).slider({
		range: true,
		min: 50,
		max: 800,
		values: [ 150, 700 ],
		slide: function( event, ui ) {
			$( "#min-floorsize" ).val(ui.values[ 0 ]);
			$( "#max-floorsize" ).val(ui.values[ 1 ]);

		}
		});
		$( "#min-floorsize" ).val($( "#floorsize-slider" ).slider( "values", 0 ));
		$( "#max-floorsize" ).val($( "#floorsize-slider" ).slider( "values", 1 ));

		// floorsize-slider
		$( "#rental-slider" ).slider({
		range: true,
		min: 1000,
		max: 50000,
		values: [ 10000, 40000 ],
		slide: function( event, ui ) {
			$( "#min-rental" ).val(ui.values[ 0 ]);
			$( "#max-rental" ).val(ui.values[ 1 ]);

		}
		});
		$( "#min-rental" ).val($( "#rental-slider" ).slider( "values", 0 ));
		$( "#max-rental" ).val($( "#rental-slider" ).slider( "values", 1 ));

		// menu
		var ind=2;
	    var nav = $(".nav");
	    var init = $(".nav .m").eq(ind);
	    var block = $(".nav .block");
	    block.css({
	        "left": init.position().left 
	    });
	    nav.hover(function() {},
	    function() {
	        block.stop().animate({
	            "left": init.position().left 
	        },
	        100);
	    });
	    $(".nav").slide({
	        type: "menu",
	        titCell: ".m",
	        targetCell: ".sub",
	        delayTime: 300,
	        triggerTime: 0,
	        returnDefault: true,
	        defaultIndex: ind,
	        startFun: function(i, c, s, tit) {
	            block.stop().animate({
	                "left": tit.eq(i).position().left 
	            },
	            100);
	        }
	    });

	    // slider pic 
    	$('#camera_wrap_1').camera({
			thumbnails: false,
			fx:'scrollRight'
		});
		
})