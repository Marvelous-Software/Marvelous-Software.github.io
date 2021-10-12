

 $(document).ready(function(){
		$(".modal").not(".format-schedule-modal").appendTo("body#Body");
 });
 
enquire.register("screen and (min-width:1200px)", {

    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {
		
		  $(document).ready(function(){
			  if($("#ControlBar_ControlPanel" + name).length == 0) {
    			$("#stickyheader").sticky({topSpacing:0});
				}
  		  });

		},      
                                
    // OPTIONAL
    // If supplied, triggered when the media query transitions 
    // *from a matched state to an unmatched state*.
    unmatch : function() {
				
		$("#stickyheader").unstick();

		},    
    
    // OPTIONAL
    // If supplied, triggered once, when the handler is registered.
    setup : function() {},    
                                
    // OPTIONAL, defaults to false
    // If set to true, defers execution of the setup function 
    // until the first time the media query is matched
    deferSetup : true,
                                
    // OPTIONAL
    // If supplied, triggered when handler is unregistered. 
    // Place cleanup code here
    destroy : function() {}
      
});


/* sidebar panel for filtering */
