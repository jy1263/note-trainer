<template>
  <div id="wrapper">
    <div class="centeralign" style="height: 80%;">
      <NotationRenderer v-if="showNotation" />
    </div>
    <div class="centeralign" style="height: 20%;" id="bottomalign">
      <button class="reroll" v-on:click='refreshlock("C")'>C</button>
      <button class="reroll" v-on:click='refreshlock("D")'>D</button>
      <button class="reroll" v-on:click='refreshlock("E")'>E</button>
      <button class="reroll" v-on:click='refreshlock("F")'>F</button>
      <button class="reroll" v-on:click='refreshlock("G")'>G</button>
      <button class="reroll" v-on:click='refreshlock("A")'>A</button>
      <button class="reroll" v-on:click='refreshlock("B")'>B</button>
      <br>
       <input type="checkbox" v-model="showNotation">
    </div>
  </div>
</template>

<script>
  import NotationRenderer from './components/NotationRenderer.vue'
  import Vex from 'vexflow/src/index.js'
  let VF = Vex.Flow;

  export default {
    name: 'App',

    components: {
      NotationRenderer
    },

    props: {
    },

    data: function () {
      return {
        indexOfArray: 0,
        randomchars: [],
        showNotation: true
      }
    },

    mounted () {
      this.refresh();
    },

    methods: {
      refresh: function() {
        var svg = document.querySelector("svg");
        if (svg != null) {
            svg.parentNode.removeChild(svg);
        }

        let randomchar = String.fromCharCode(65+Math.floor(Math.random() * 7)).toString()
        this.$data.randomchars.push(randomchar)
        var randomiser = [randomchar+ "/" + (Math.floor(Math.random() * 2) + 4).toString()];

        console.log(this.$data.randomchars)

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
      },

      refreshlock: function(e) {
          console.log(this.$data.randomchars)
          if (this.$data.randomchars[this.$data.indexOfArray] == e ) {
              console.log("correct")
              this.refresh();
              this.$data.indexOfArray++
          }
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#wrapper{
  height: 100%;
}
.centeralign {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#bottomalign{
    background: black;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
}
.reroll {
    display: flex;
    height: 20px;
}
#notation {
    width: 20em !important;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
}
html {
    display: block;
    border: 0px;
    height: 100%;
}
body {
    margin: 0px;
    height: 100%;
}
button{
    font-family: monospace;
    display:block;
    padding-left: 5%;
    padding-right: 5%;
    background-color: white; 
    border: none;
}
</style>
