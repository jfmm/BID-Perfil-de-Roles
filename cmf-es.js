(function ($) {
	
	// initialize Bootstrap tooltip plugin...
	$('[data-toggle="tooltip"]').tooltip();
  
  //declare JSON Object with IDB Doc ID numbers
  var pathLevelDocs = {
		
    "technicalSupport" : {
      "8":  '40882219',
      "9":  '40882220',
      "10": '40882221',
      "11": '40882222',
      "12": '40882223'
    },
    
    "officeSupport": {
      "8":  '40882214',
      "9":  '40882215',
      "10": '40882216',
      "11": '40882217',
      "12": '40882218'
    },
    
    "budget": {
      "1": '40882233',
      "2": '40882234',
      "3": '40882235',
      "4": '40882236',
      "5": '40882237',
      "6": '40882238',
      "7": '40882239',
      "8": '40882240',
      "9": '40882241',
    },
    
   "communications": {
      "1": '40882224',
      "2": '40882225',
      "3": '40882226',
      "4": '40882227',
      "5": '40882228',
      "6": '40882229',
      "7": '40882230',
      "8": '40882231',
      "9": '40882232',
    },
    
    "corporateServices": {
      "1": '40882343',
      "2": '40882344',
      "3": '40882345',
      "4": '40882346',
      "5": '40882347',
      "6": '40882348',
      "7": '40882349',
      "8": '40882350',
      "9": '40882351',
    },
    
    "economics": {
      "1": '40882242',
      "2": '40882243',
      "3": '40882244',
      "4": '40882245',
      "5": '40882246',
      "6": '40882247',
      "7": '40882248',
      "8": '40882249',
      "9": '40882250',
    },
    
    "fiduciary": {
      "1": '40882251',
      "2": '40882252',
      "3": '40882253',
      "4": '40882254',
      "5": '40882255',
      "6": '40882256',
      "7": '40882257',
      "8": '40882258',
      "9": '40882259',
    },
    
    "HR": {
      "1": '40882318',
      "2": '40882319',
      "3": '40882320',
      "4": '40882321',
      "5": '40882322',
      "6": '40882323',
      "7": '40882324',
      "8": '40882325',
      "9": '40882326',
    },
    
    "IT": {
      "1": '40882353',
      "2": '40882354',
      "3": '40882355',
      "4": '40882356',
      "5": '40882357',
      "6": '40882358',
      "7": '40882359',
      "8": '40882360',
      "9": '40882361',
    },
    
    "learningAndKnowledge": {
      "1": '40882260',
      "2": '40882261',
      "3": '40882262',
      "4": '40882263',
      "5": '40882264',
      "6": '40882265',
      "7": '40882266',
      "8": '40882267',
      "9": '40882268',
    },
    
    "legal": {
      "1": '40882269',
      "2": '40882270',
      "3": '40882271',
      "4": '40882272',
      "5": '40882273',
      "6": '40882274',
      "7": '40882275',
      "8": '40882276',
      "9": '40882277',
    },
    
    "operations": {
      "1": '40882291',
      "2": '40882292',
      "3": '40882293',
      "4": '40882294',
      "5": '40882295',
      "6": '40882296',
      "7": '40882297',
      "8": '40882298',
      "9": '40882299',
    },
    
    "oversight": {
      "1": '40882282',
      "2": '40882283',
      "3": '40882284',
      "4": '40882285',
      "5": '40882286',
      "6": '40882287',
      "7": '40882288',
      "8": '40882289',
      "9": '40882290',
    },
    
    "finance": {
      "1": '40882300',
      "2": '40882301',
      "3": '40882302',
      "4": '40882303',
      "5": '40882304',
      "6": '40882305',
      "7": '40882306',
      "8": '40882307',
      "9": '40882308',
    },
    
    "resourcePlanning": {
      "1": '40882309',
      "2": '40882310',
      "3": '40882311',
      "4": '40882312',
      "5": '40882313',
      "6": '40882314',
      "7": '40882315',
      "8": '40882316',
      "9": '40882317',
    },
    
    "sector": {
      "1": '40882330',
      "2": '40882331',
      "3": '40882332',
      "4": '40882333',
      "5": '40882334',
      "6": '40882335',
      "7": '40882336',
      "8": '40882337',
      "9": '40882338',
    },
    
    "treasury": {
      "1": '40882362',
      "2": '40882363',
      "3": '40882364',
      "4": '40882365',
      "5": '40882366',
      "6": '40882367',
      "7": '40882368',
      "8": '40882369',
      "9": '40882370',
    },
    
     "businessLeader": {
      "1": '40882278',
      "2": '40882279',
      "3": '40882280',
    },
    
    "countryLeader": {
      "R": '40882281'
    },
  };
  

  var button = $(".career-path-col .cmf-info-box"); // bind to boxes under career path column only
  
  
  button.on("click", function () {
    
    var thisButton = $(this), // get button instance clicked
        path = thisButton.data("path"); // get the career path value  of the button selected
    
		// first hide the elements tooltip
		thisButton.tooltip("hide");
		
		// if the box had already been selected
    if(thisButton.hasClass("cmf-info-box-selected")) {
		
			//hide its Work role column
      thisButton.parent()
								.siblings(":not(.track-box)") 
								.removeClass("cmf-col-visible cmf-info-box-selected")
								.addClass("cmf-col-hidden");
								
		} else {
			
			//show Work role column
      thisButton.parent()
								.siblings()
								.removeClass("cmf-col-hidden")
								.addClass("cmf-col-visible");
		}
			
    
   // if there's a button already selected, deselect it  
		if(button.hasClass("cmf-info-box-selected")) 
          button.removeClass("cmf-info-box-selected");
      
		
    //then add selected class to button that was clicked
      thisButton.addClass("cmf-info-box-selected");
      
      
      //hide the irrelevant Work role columns
      thisButton.parent()
                .parent()
                .siblings()
                .children(".role-col") // only children with this class
                .removeClass("cmf-col-visible")
                .addClass("cmf-col-hidden");
   
    
    
    //select work role links currently visible
   	var level = $("div.cmf-col-visible .level-btn");
		
		
	//conditional logic for Mangerial track
	if(path === "countryLeader" || path === "businessLeader") {

		for(var i = 0; i < level.length; i++) {

			var $currentBtn = $(level[i]);//cache jquery obj reference

			// disable/enable buttons according to path
			if($currentBtn.data("relatedpath") !== path) 
				$currentBtn.addClass("level-btn-disabled").removeAttr("target");
	
			 else 
				$currentBtn.removeClass("level-btn-disabled").attr("target", "_blank");
			
		}
	} 

    
   
		/*
    *  Link Dynamic population Logic
    */
    
    var docIDs = []; // stores IDB Doc ids for path clicked
    
    for(prop in pathLevelDocs[path]) {
      docIDs.push(pathLevelDocs[path][prop]);
    }
		

    var baseURL = "http://idbdocs.iadb.org/WSDocs/getDocument.aspx?DOCNUM=";
    
    
    //loop over visible buttons and set their href values
    $.each(level, function (index, value) {
      
        // do not append a URL to boxes that are disabled...
        if($(level[index]).hasClass("level-btn-disabled")) {

					level[index].href = "#";

				} 
				else if(path === "countryLeader") {
					
					// for country rep, we just hardcode the index for now...
					level[index].href = baseURL + docIDs[0] + "&CONTDISP=inline";
				
				}

				else {

					level[index].href = baseURL + docIDs[index] + "&CONTDISP=inline";
				}

					});
  });
  
})(jQuery);
