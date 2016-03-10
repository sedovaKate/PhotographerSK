/**
 * Created by Karamba on 01.07.2015.
 */
"use strict";
$(document).ready(function(){  /*скрипты для просмотра фото на странице Urban*/
    $(".libraryUrban").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
        }, removalDelay: 300, mainClass: 'mfp-fade'
    });

});

