var friends = ['Carl', 'Brandon', 'John', 'Jack', 'Ben'];
var locations = ['bathroom', 'library', 'patio', 'balcony', 'pool', 'study', 'master bedroom', 'cellar', 'hallway', 'garage'];
var weapons = ['toothpick', 'pencil', 'hammer', 'potato', 'rock', 'lead pipe', 'broom', 'chicken', 'brick', 'stick',
                'leaf blower', 'baseball bat', 'fishing pole', 'fingernail clippers', 'spatchula', 'frisbe', 'usb-c cable', 'grass clipping', 'orange', 'carrot'];
$(document).ready(function() {
    for(var i = 1; i < 101; i++) {
        $('<li class="list-group-item"><h3 id=' + i + '>Accusation ' + i + '</h3></li>').appendTo('.list-group-flush');
        $('#'+i).click(clickH3(i));
    }
});

function clickH3(num) {
    var friend = friends[num%20];
    var location = locations[num%10];
    var weapon = weapons[num%5];
    return function() {
        alert("Accusation " + num + ": I accuse " + friend + ", with the " + weapon + " in the " + location + "!");
    }
}