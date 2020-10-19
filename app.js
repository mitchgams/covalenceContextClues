var friends = ['Carl', 'Brandon', 'John', 'Jack', 'Ben'];
var locations = ['bathroom', 'library', 'patio', 'balcony', 'pool', 'study', 'master bedroom', 'cellar', 'hallway', 'garage'];
var weapons = ['toothpick', 'pencil', 'hammer', 'potato', 'rock', 'lead pipe', 'broom', 'chicken', 'brick', 'stick',
                'leaf blower', 'baseball bat', 'fishing pole', 'fingernail clippers', 'spatchula', 'frisbe', 'usb-c cable', 'grass clipping', 'orange', 'carrot'];
$(document).ready(function() {
    for(let i = 1; i < 101; i++) {
        $('<h3 id=' + i + '>Accusation ' + i + '</h3>').appendTo('body');
        $('#'+i).click(clickH3(i));
    }
});

function clickH3(i) {
    var friend = friends[Math.floor(i/20)];
    var location = locations[Math.floor(i/10)];
    var weapon = weapons[Math.floor(i/5)];

     function accuse() {
        alert("Accusation " + i + ": I accuse " + friend + ", with the " + weapon + " in the " + location + "!");
    }
    return accuse;
}
