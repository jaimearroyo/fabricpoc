

<script type="text/javascript" src="/Style%20Library/PoC/JS/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="/Style%20Library/PoC/JS/handlebars-v4.0.2.js"></script>


<link href="/Style%20Library/PoC/CSS/fabric.components.css" rel="stylesheet" type="text/css" />
<link href="/Style%20Library/PoC/CSS/fabric.css" rel="stylesheet" type="text/css" />




<script>

	 $sr = jQuery.noConflict();
	 
	 SP.SOD.executeFunc('sp.js', 'SP.ClientContext', initializeScript);

	function initializeScript() {

			var siteurl = _spPageContextInfo.webAbsoluteUrl;
			
			var contactIcon = siteurl + "/Style%20Library/PoC/IMAGES/contact-icon.png";
			

			
			$sr.ajax({
					   url: siteurl + "/_api/web/lists/getbytitle('Contacts')/items",
					   method: "GET",
					   headers: { "Accept": "application/json; odata=verbose" },
					   success: function (data) {
							if (data.d.results.length > 0 ) {
								 
								var stringData = JSON.stringify(data);
								var jsonObject = JSON.parse(stringData);
								var results = jsonObject.d.results;

								var source = $sr("#contact-template").html();
								var template = Handlebars.compile(source);
								var html = template(results);
								$sr('#ContactResults').html(html);
								 

								 
								 
								 
								 
							}       
					  },
					  error: function (data) {
						  alert("Error: "+ data);
					 }
			  });

	
	
	
	
	}


</script>


<div id="ContactResults"></div>








<script id="contact-template" type="text/x-handlebars-template">

	{{#each this}}

		  <div class="ms-ListItem">
			<span class="ms-ListItem-primaryText">{{FullName}}</span>
			<span class="ms-ListItem-secondaryText" style="color: #767676;"><a href="mailto:{{Email}}" target="_blank">{{Email}}</a></span>
			<span class="ms-ListItem-metaText">{{JobTitle}}</span>
			<span class="ms-ListItem-secondaryText" style="word-wrap: break-word !important;">{{{Comments}}}</span>
		  </div>

	{{/each}}

	
</script>