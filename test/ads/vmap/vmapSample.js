var adBreak1 = '<vmap:AdBreak breakType="linear" breakId="mypre" timeOffset="start">' +
    '<vmap:AdSource allowMultipleAds="true" followRedirects="true" id="1">' +
      '<vmap:VASTAdData>' +
        '<VAST version="3.0" xsi:noNamespaceSchemaLocation="vast.xsd">' +
        '</VAST>' +
      '</vmap:VASTAdData>' +
    '</vmap:AdSource>' +
    '<vmap:TrackingEvents>' +
      '<vmap:Tracking event="breakStart">http://server.com/breakstart</vmap:Tracking>' +
      '<vmap:Tracking event="breakEnd">http://server.com/breakend</vmap:Tracking>' +
      '<vmap:Tracking event="breakEnd">http://server.com/breakend2</vmap:Tracking>' +
      '<vmap:Tracking event="error">http://server.com/error?[ERRORCODE]</vmap:Tracking>' +
     '</vmap:TrackingEvents>' +
  '</vmap:AdBreak>' ; 

var adBreak2 = '<vmap:AdBreak breakType="linear" breakId="myid" timeOffset="00:10:23.125">' +
    '<vmap:AdSource allowMultipleAds="true" followRedirects="true" id="2">' +
      '<vmap:VASTAdData>' +
        '<VAST version="3.0" xsi:noNamespaceSchemaLocation="vast.xsd">' +
        '</VAST>' +
      '</vmap:VASTAdData>' +
    '</vmap:AdSource>' +
    '<vmap:TrackingEvents>' +
      '<vmap:Tracking event="breakStart">http://server.com/breakstart</vmap:Tracking>' +
    '</vmap:TrackingEvents>' +
  '</vmap:AdBreak>';

var adBreak3 = '<vmap:AdBreak breakType="linear" breakId="mypost" timeOffset="50%">' +
    '<vmap:AdSource allowMultipleAds="true" followRedirects="true" id="3">' +
    '<vmap:AdTagURI>http://server.com/vast.xml</vmap:AdTagURI>' +
    '</vmap:AdSource>' +
    '<vmap:TrackingEvents>' +
      '<vmap:Tracking event="breakStart">http://server.com/breakstart</vmap:Tracking>' +
    '</vmap:TrackingEvents>' +
  '</vmap:AdBreak>' ;

var adBreak4 = '<vmap:AdBreak breakType="linear" breakId="mypost" timeOffset="end">' +
    '<vmap:AdSource allowMultipleAds="true" followRedirects="true" id="3">' +
    '<vmap:AdTagURI>http://server.com/vast.xml</vmap:AdTagURI>' +
    '</vmap:AdSource>' +
    '<vmap:TrackingEvents>' +
      '<vmap:Tracking event="breakStart">http://server.com/breakstart</vmap:Tracking>' +
    '</vmap:TrackingEvents>' +
  '</vmap:AdBreak>' ;

var Full = '<vmap:VMAP xmlns:vmap="http://www.iab.net/vmap-1.0" version="1.0">' +
  adBreak1 + adBreak2  + adBreak3 + adBreak4 +
'</vmap:VMAP>';

var Empty = '<vmap:VMAP xmlns:vmap="http://www.iab.net/vmap-1.0" version="1.0">' +
'</vmap:VMAP>';

module.exports = {
  FULL: Full,
  EMPTY: Empty
};