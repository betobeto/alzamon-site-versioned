// ROT13 decoder for mail address protection
// https://cryptii.com/pipes/rot13

function decode(a) {
  return a.replace(/[a-zA-Z]/g, function(c){
    return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) 
                               ? c : c - 26);
  })
}; 
function openMailer(element) {
var y = decode("znvygb:orgb@nymnzba.pbz?fhowrpg=Nymnzba: rznvy vadhver");
element.setAttribute("href", y);
element.setAttribute("onclick", "");
element.setAttribute("target", "_blank");
// element.firstChild.nodeValue = "Open email software";
};