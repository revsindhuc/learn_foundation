$(document).ready(function(){
    // Initializes Foundation
    $(document).foundation();
    
    // Hiding both pages at teh begining
    $('.page').hide();
    
    // when element with id top-nav-page-1 is clicked
    // show page1
    $('#top-nav-page-1').click(function(){
        $('.page').hide();
        $('#page1').show(1000);
    });
        
    // when element with id top-nav-page-2 is clicked
    // show page1
    $('#top-nav-page-2').click(function(){
        $('.page').hide();
        $('#page2').show(1000);
    });
    
    //When the link with id nav-option-1 is clicked
    $('#nav-option-1').click(function(){
        //Hide all content boxes
        hideAllContentBoxes();
        
        //Just show the div with id option1-content
        $('#option1-content').removeClass('hide-using-opacity');
        $('#option1-content').addClass('show-using-opacity');
    });
    
    //When the link with id nav-option-2 is clicked
    $('#nav-option-2').click(function(){
        //Hide all content boxes
        hideAllContentBoxes();
        
        //Just show the div with id option1-content
        $('#option2-content').removeClass('hide-using-opacity');
        $('#option2-content').addClass('show-using-opacity');
    });
    
    //When the link with id nav-option-2 is clicked
    $('#nav-option-3').click(function(){
        //Hide all content boxes
        hideAllContentBoxes();
        
        //Just show the div with id option1-content
        $('#option3-content').removeClass('hide-using-opacity');
        $('#option3-content').addClass('show-using-opacity');
    });
    
    /** Hides all content boxes */
    function hideAllContentBoxes() {
        $('.content-box').removeClass('show-using-opacity');
        $('.content-box').addClass('hide-using-opacity');
    }
        
});

