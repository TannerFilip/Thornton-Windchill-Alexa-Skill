// borrowed from https://github.com/kevinl95/Thornton-Windchill-Alexa-Skill/blob/master/alexapp.js

exports.handler = function( event, context ) {

    var http = require( 'http' );

    var url = 'http://api.kanye.rest/';

    http.get( url, function( response ) {

        var data = '';

        response.on( 'data', function( x ) { data += x; } );

        response.on( 'end', function() {

            var json = JSON.parse( data );

            var quote = json.quote;
            output(quote, context);

        } );

    } );

};

function output( quote, context ) {

    var speechWrap1 = "<speak><voice name='Matthew'>";
    var speechWrap2 = "</voice></speak>";
    var response = {
        outputSpeech: {
            "type": "SSML",
            "ssml": speechWrap1+quote+speechWrap2
        },
        shouldEndSession: true
    };

    context.succeed( { response: response } );

}
