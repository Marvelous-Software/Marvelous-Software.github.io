enquire.register("screen and (max-width:1199px)", {

    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {
		
		$(document).ready(function() {
			
			var navtouchcaret = '<span class="icon-navtouchcaret"></span>';
			
			$("#nav-container").hide();
			$("ul.child-nav").hide();
			
			$("span.nav-trigger-wrapper").unbind().click(function() {
				$("#nav-container").slideToggle("fast");
				$(this).toggleClass("active");
			});
			
			$("nav#nav li:has(ul)").append(navtouchcaret);

			$("span.icon-navtouchcaret").unbind().click(function() {
				$(this).prev().slideToggle("fast");
				$(this).toggleClass("active");
			});
			
		});
		
		},      
                                
    // OPTIONAL
    // If supplied, triggered when the media query transitions 
    // *from a matched state to an unmatched state*.
    unmatch : function() {
		
		$("#nav-container").show();
		$("ul.child-nav").hide();
		$("span.icon-navtouchcaret").remove();
		$("span.nav-trigger-wrapper").removeClass("active");
		
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