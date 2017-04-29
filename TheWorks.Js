 
<html>
    <head>
        <script src="https://code.jquery.com/jquery.min.js">
        </script>
        
        <script>
        
        jQuery(document).ready(function($) {
            
            var count=0;
            
            $("#update").click(function() {
                if(count<10){
                count++;}
                $(".progress").css("width", count*50);
                
            });
            
        });

        </script>

        <title>Rewards</title>
        <meta charset="utf-8">
        <link href= "Change.css" type="text/css" rel="stylesheet" />
    </head>
    <body>
        <div class="info-nav">
            <ul class="info-links">
                <li class="links"><a href="hello-world.html">Home</a></li>
                <li class="links"><a href="soup-kitchens.html">Soup kitchens</a></li>
                <li class="links"><a href="background-info.html">Background Info</a></li>
                <li class="links"><a href="rewards.html">Rewards</a></li>
                <li class="links"><a href="sponsors.html">Sponsors</a></li>
                <li class="links"><a href="the-team.html">The Team</a></li>
            </ul>
        
        <div>
       
        <div class= "progressbar"> 
            <div class="progress">
                
                
                
                
                
                
                
            </div>
            
            
        </div>
        
        <button id="update">Progress</button>
        
        
        
        </div>