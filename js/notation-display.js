window.onload = function(){
    this.refresh(undefined);
}

let i = 0;
let randomchars = [];

function refresh() {
    VF = Vex.Flow;
    var svg = document.querySelector("svg");
    if (svg != null) {
        svg.parentNode.removeChild(svg);
    }

    randomchar = String.fromCharCode(65+Math.floor(Math.random() * 7)).toString()
    randomchars.push(randomchar)
    var randomiser = [randomchar+ "/" + (Math.floor(Math.random() * 2) + 4).toString()];

    console.log(randomchars)

    var notes = [
        // A quarter-note C.
        new VF.StaveNote({clef: "treble", keys: randomiser, duration: "q" }),
    ];

    // Create an SVG renderer and attach it to the DIV element named "notation".
    var div = document.getElementById("notation")
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
    
    // Size our SVG:
    renderer.resize(notes.length*100+20, 200);
    
    // And get a drawing context:
    var context = renderer.getContext();

    // Create a stave at position 10, 40 of width 400 on the canvas.
    var stave = new VF.Stave(10, 20, notes.length*100);

    // Add a clef and time signature.
    stave.addClef("treble") //.addTimeSignature("3/4");

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    // Create a voice in 4/4 and add the notes from above
    var voice = new VF.Voice({num_beats: notes.length,  beat_value: 4});
    voice.addTickables(notes);
    
    // Format and justify the notes to 400 pixels.
    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], notes.length*100);
    
    // Render voice
    voice.draw(context, stave);
}

function refreshlock(e) {
    if (randomchars[i] == e ) {
        console.log("correct")
        refresh();
    }
    i++
}