enquire.register("screen and (max-width:1199px)", {

    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {
		
		$(document).ready(function() {
			
			var footercaret = '<span class="icon-footer-caret"></span>';
			
			$("footer div nav > ul > li:has(ul)").append(footercaret);
			$("footer nav li ul").hide();
			
			$("footer li > span.icon-footer-caret").click(function() {
				$(this).prev("ul").slideToggle("fast");
				$(this).toggleClass("active");
			});
			
		});
		
		},      
                                
    // OPTIONAL
    // If supplied, triggered when the media query transitions 
    // *from a matched state to an unmatched state*.
    unmatch : function() {
		
			$("footer nav li ul").show();
			$(".icon-footer-caret").remove();
		
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