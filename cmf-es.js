(function ($) {
	
	// initialize Bootstrap tooltip plugin...
	$('[data-toggle="tooltip"]').tooltip();
  
  //declare JSON Object with IDB Doc ID numbers
  var pathLevelDocs = {
		
    "technicalSupport" : {
      "8":  'EZSHARE-947469414-474',
      "9":  'EZSHARE-947469414-475',
      "10": 'EZSHARE-947469414-476',
      "11": 'EZSHARE-947469414-477',
      "12": 'EZSHARE-947469414-478'
    },
    
    "officeSupport": {
      "8":  'EZSHARE-947469414-469',
      "9":  'EZSHARE-947469414-470',
      "10": 'EZSHARE-947469414-471',
      "11": 'EZSHARE-947469414-472',
      "12": 'EZSHARE-947469414-473'
    },
    
    "budget": {
      "1": 'EZSHARE-947469414-488',
      "2": 'EZSHARE-947469414-489',
      "3": 'EZSHARE-947469414-490',
      "4": 'EZSHARE-947469414-491',
      "5": 'EZSHARE-947469414-492',
      "6": 'EZSHARE-947469414-493',
      "7": 'EZSHARE-947469414-494',
      "8": 'EZSHARE-947469414-495',
      "9": 'EZSHARE-947469414-496',
    },
    
   "communications": {
      "1": 'EZSHARE-947469414-479',
      "2": 'EZSHARE-947469414-480',
      "3": 'EZSHARE-947469414-481',
      "4": 'EZSHARE-947469414-482',
      "5": 'EZSHARE-947469414-483',
      "6": 'EZSHARE-947469414-484',
      "7": 'EZSHARE-947469414-485',
      "8": 'EZSHARE-947469414-486',
      "9": 'EZSHARE-947469414-487',
    },
    
    "corporateServices": {
      "1": 'EZSHARE-947469414-591',
      "2": 'EZSHARE-947469414-592',
      "3": 'EZSHARE-947469414-593',
      "4": 'EZSHARE-947469414-594',
      "5": 'EZSHARE-947469414-595',
      "6": 'EZSHARE-947469414-596',
      "7": 'EZSHARE-947469414-597',
      "8": 'EZSHARE-947469414-598',
      "9": 'EZSHARE-947469414-599',
    },
    
    "economics": {
      "1": 'EZSHARE-947469414-497',
      "2": 'EZSHARE-947469414-498',
      "3": 'EZSHARE-947469414-499',
      "4": 'EZSHARE-947469414-500',
      "5": 'EZSHARE-947469414-501',
      "6": 'EZSHARE-947469414-502',
      "7": 'EZSHARE-947469414-503',
      "8": 'EZSHARE-947469414-504',
      "9": 'EZSHARE-947469414-505',
    },
    
    "fiduciary": {
      "1": 'EZSHARE-947469414-506',
      "2": 'EZSHARE-947469414-507',
      "3": 'EZSHARE-947469414-508',
      "4": 'EZSHARE-947469414-509',
      "5": 'EZSHARE-947469414-510',
      "6": 'EZSHARE-947469414-511',
      "7": 'EZSHARE-947469414-512',
      "8": 'EZSHARE-947469414-513',
      "9": 'EZSHARE-947469414-514',
    },
    
    "HR": {
      "1": 'EZSHARE-947469414-574',
      "2": 'EZSHARE-947469414-575',
      "3": 'EZSHARE-947469414-576',
      "4": 'EZSHARE-947469414-577',
      "5": 'EZSHARE-947469414-578',
      "6": 'EZSHARE-947469414-579',
      "7": 'EZSHARE-947469414-580',
      "8": 'EZSHARE-947469414-581',
      "9": 'EZSHARE-947469414-582',
    },
    
    "IT": {
      "1": 'EZSHARE-947469414-600',
      "2": 'EZSHARE-947469414-601',
      "3": 'EZSHARE-947469414-602',
      "4": 'EZSHARE-947469414-603',
      "5": 'EZSHARE-947469414-604',
      "6": 'EZSHARE-947469414-605',
      "7": 'EZSHARE-947469414-606',
      "8": 'EZSHARE-947469414-607',
      "9": 'EZSHARE-947469414-608',
    },
    
    "learningAndKnowledge": {
      "1": 'EZSHARE-947469414-515',
      "2": 'EZSHARE-947469414-516',
      "3": 'EZSHARE-947469414-517',
      "4": 'EZSHARE-947469414-518',
      "5": 'EZSHARE-947469414-519',
      "6": 'EZSHARE-947469414-520',
      "7": 'EZSHARE-947469414-521',
      "8": 'EZSHARE-947469414-522',
      "9": 'EZSHARE-947469414-523',
    },
    
    "legal": {
      "1": 'EZSHARE-947469414-524',
      "2": 'EZSHARE-947469414-525',
      "3": 'EZSHARE-947469414-526',
      "4": 'EZSHARE-947469414-527',
      "5": 'EZSHARE-947469414-528',
      "6": 'EZSHARE-947469414-529',
      "7": 'EZSHARE-947469414-530',
      "8": 'EZSHARE-947469414-531',
      "9": 'EZSHARE-947469414-532',
    },
    
    "operations": {
      "1": 'EZSHARE-947469414-546',
      "2": 'EZSHARE-947469414-547',
      "3": 'EZSHARE-947469414-548',
      "4": 'EZSHARE-947469414-549',
      "5": 'EZSHARE-947469414-550',
      "6": 'EZSHARE-947469414-551',
      "7": 'EZSHARE-947469414-552',
      "8": 'EZSHARE-947469414-553',
      "9": 'EZSHARE-947469414-554',
    },
    
    "oversight": {
      "1": 'EZSHARE-947469414-537',
      "2": 'EZSHARE-947469414-538',
      "3": 'EZSHARE-947469414-539',
      "4": 'EZSHARE-947469414-540',
      "5": 'EZSHARE-947469414-541',
      "6": 'EZSHARE-947469414-542',
      "7": 'EZSHARE-947469414-543',
      "8": 'EZSHARE-947469414-544',
      "9": 'EZSHARE-947469414-545',
    },
    
    "finance": {
      "1": 'EZSHARE-947469414-555',
      "2": 'EZSHARE-947469414-556',
      "3": 'EZSHARE-947469414-557',
      "4": 'EZSHARE-947469414-558',
      "5": 'EZSHARE-947469414-559',
      "6": 'EZSHARE-947469414-560',
      "7": 'EZSHARE-947469414-561',
      "8": 'EZSHARE-947469414-562',
      "9": 'EZSHARE-947469414-563',
    },
    
    "resourcePlanning": {
      "1": 'EZSHARE-947469414-564',
      "2": 'EZSHARE-947469414-565',
      "3": 'EZSHARE-947469414-566',
      "4": 'EZSHARE-947469414-567',
      "5": 'EZSHARE-947469414-568',
      "6": 'EZSHARE-947469414-569',
      "7": 'EZSHARE-947469414-570',
      "8": 'EZSHARE-947469414-571',
      "9": 'EZSHARE-947469414-572',
    },
    
    "sector": {
      "1": 'EZSHARE-947469414-582',
      "2": 'EZSHARE-947469414-583',
      "3": 'EZSHARE-947469414-584',
      "4": 'EZSHARE-947469414-585',
      "5": 'EZSHARE-947469414-586',
      "6": 'EZSHARE-947469414-587',
      "7": 'EZSHARE-947469414-588',
      "8": 'EZSHARE-947469414-589',
      "9": 'EZSHARE-947469414-590',
    },
    
    "treasury": {
      "1": 'EZSHARE-947469414-609',
      "2": 'EZSHARE-947469414-610',
      "3": 'EZSHARE-947469414-611',
      "4": 'EZSHARE-947469414-612',
      "5": 'EZSHARE-947469414-613',
      "6": 'EZSHARE-947469414-614',
      "7": 'EZSHARE-947469414-615',
      "8": 'EZSHARE-947469414-616',
      "9": 'EZSHARE-947469414-617',
    },
    
     "businessLeader": {
      "1": 'EZSHARE-947469414-533',
      "2": 'EZSHARE-947469414-534',
      "3": 'EZSHARE-947469414-535',
    },
    
    "countryLeader": {
      "R": 'EZSHARE-947469414-536'
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
		

    var baseURL = "https://idbg.sharepoint.com/teams/ez-HRD/Outreach/_layouts/15/DocIdRedir.aspx?ID=";
    
    
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

					level[index].href = baseURL + docIDs[index];
				}

					});
  });
  
})(jQuery);
