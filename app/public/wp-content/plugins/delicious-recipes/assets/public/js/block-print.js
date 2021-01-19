( function( $, delrecipesRecipeCard ) {
    'use scrict';

    function dr_block_print_recipe( recipeID, servings, blockType, blockId ) {
        servings = servings || 0;
        blockType = blockType || 'recipe-card';
        blockId = blockId || 'delicious-recipes-pro-recipe-card';
    
        const urlParts = delrecipesRecipeCard.homeURL.split( /\?(.+)/ );
        let printUrl = urlParts[ 0 ];
    
        if ( delrecipesRecipeCard.permalinks ) {
            printUrl += 'delrecipes_block_print/' + recipeID + '/';
    
            if ( urlParts[ 1 ] ) {
                printUrl += '?' + urlParts[ 1 ];
                printUrl += '&block-type=' + blockType;
                printUrl += '&block-id=' + blockId;
    
                if ( servings ) {
                    printUrl += '&servings=' + servings;
                }
            } else {
                printUrl += '?block-type=' + blockType;
                printUrl += '&block-id=' + blockId;
    
                if ( servings ) {
                    printUrl += '&servings=' + servings;
                }
            }
        } else {
            printUrl += '?delrecipes_block_print=' + recipeID;
            printUrl += '&block-type=' + blockType;
            printUrl += '&block-id=' + blockId;
    
            if ( servings ) {
                printUrl += '&servings=' + servings;
            }
    
            if ( urlParts[ 1 ] ) {
                printUrl += '&' + urlParts[ 1 ];
            }
        }

        const print_window = window.open( printUrl, '_blank' );
        print_window.delrecipesRecipeCard = delrecipesRecipeCard;
        print_window.onload = function() {
            print_window.focus();
            print_window.document.title = document.title;
            print_window.history.pushState( '', 'Print Recipe', location.href.replace( location.hash, '' ) );
    
            setTimeout( function() {
                print_window.print();
            }, 500 );
    
            print_window.onfocus = function() {
                setTimeout( function() {
                    print_window.close();
                }, 500 );
            };
        };
    }

    $( document ).ready( function() {

        $( '.dr-recipe-card-block-print .dr-print-trigger' ).each( function() {
            const $printBtn = $( this );
    
            $printBtn.on( 'click', function( e ) {
                const $this = $( this );
                const recipeID = $this.data( 'recipe-id' );
                const servings = $this.data( 'servings-size' );
    
                const isRecipeCardBlock = $this.parents( '.wp-block-delicious-recipes-block-recipe-card' ).length;
    
                let blockType;
                let blockId;
    
                if ( isRecipeCardBlock ) {
                    blockType = 'recipe-card';
                    blockId = $this.parents( '.wp-block-delicious-recipes-block-recipe-card' ).attr( 'id' );
                } 
    
                if ( recipeID ) {
                    e.preventDefault();
                    dr_block_print_recipe( recipeID, servings, blockType, blockId );
                }
            } );
        } );
    } );
}( jQuery, delrecipesRecipeCard ) );
