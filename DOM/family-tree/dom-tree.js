/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

var family1, family2, madison, bruce, hunter;

family1 = $(".family1");
family2 = $("<div id="#family2"><h1>Family2</h1></div>");
bruce = $("<div id="#bruce"><h2>Bruce</h2></div>");
madison = $("<div id="#madison"><h3>Madison</h3></div>");
hunter =$("<div id="#hunter"><h3>Hunter</h3></div>");

family2.insertAfter(family1);
bruce.append(family2);
madison.append(bruce);
hunter.insertAfter(madison);

// $("#family1").parent().append('<div id="family2"><h1>Family 2 </h1></div>');
// $('#family2').append("<div id='bruce'><h2>Bruce</h2></div>");
// $("#bruce").append("<div id='madison'><h3>Madison</h3></div>");
// $('#madison').append("<div id='hunter'><h3>Hunter</h3></div>")
