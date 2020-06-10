<template>
  <div id="wrapper">
    <div class="centeralign" style="height: 80%;">
      <NotationRenderer v-show="showNotation" />
    </div>
    <div class="centeralign" style="height: 20%;" id="bottomalign">
      <div class="break" />
        <div class="button-grid">
          <button class="reroll" v-on:click='refreshlock("C")'>C</button>
          <button class="reroll" v-on:click='refreshlock("D")'>D</button>
          <button class="reroll" v-on:click='refreshlock("E")'>E</button>
          <button class="reroll" v-on:click='refreshlock("F")'>F</button>
          <button class="reroll" v-on:click='refreshlock("G")'>G</button>
          <button class="reroll" v-on:click='refreshlock("A")'>A</button>
          <button class="reroll" v-on:click='refreshlock("B")'>B</button>
        </div>
        <span class="options">
          Enable Note Renderer:<input type="checkbox" v-model="showNotation">
          Enable Synthesiser:<input type="checkbox" v-model="playSynth">
          Enable Treble Clef:<input type="checkbox" v-model="enableTreble">
          Enable Bass Clef:<input type="checkbox" v-model="enableBass">
        </span>
    </div>
  </div>
</template>

<script>
  import Chance from "chance";
  import { Synth } from "tone";
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
        possibleNotes: [],

        indexOfArray: 0,
        randomchars: [],
        
        enableTreble: true,
        enableBass: true,
        showNotation: true,
        playSynth: true
      }
    },

    mounted () {
      [3,4,5,6].forEach(element => {
        this.$data.possibleNotes.push({noteLetter:"C", octave:element});
        this.$data.possibleNotes.push({noteLetter:"D", octave:element});
        this.$data.possibleNotes.push({noteLetter:"E", octave:element});
        this.$data.possibleNotes.push({noteLetter:"F", octave:element});
        this.$data.possibleNotes.push({noteLetter:"G", octave:element});
        this.$data.possibleNotes.push({noteLetter:"A", octave:element});
        this.$data.possibleNotes.push({noteLetter:"B", octave:element});
      });
      console.log(this.$data.possibleNotes)
      this.refresh();
    },

    methods: {
      refresh: async function() {
        const synth = new Synth().toMaster();
        
        var svg = document.querySelector("svg");
        if (svg != null) {
            svg.parentNode.removeChild(svg);
        }
        
        this.randomiser().then((e) =>{
          console.log(e)
          let randomObject = this.$data.possibleNotes[e.randomNoteIndex]
          let randomClef = e.randomclef
          this.$data.randomchars.push(randomObject.noteLetter);

          if (this.$data.playSynth){
            synth.triggerAttackRelease(randomObject.noteLetter + randomObject.octave, "4n");
          }

          var notes = [
              // A quarter-note.
              new VF.StaveNote({clef: randomClef, keys: [randomObject.noteLetter + "/" + randomObject.octave], duration: "q" }),
          ];

          // Create an SVG renderer and attach it to the DIV element named "notation".
          var div = document.getElementById("notation")
          var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
          
          // Size our SVG:
          renderer.resize(notes.length*100+20, 300);
          
          // And get a drawing context:
          var context = renderer.getContext();

          // Create a stave at position 10, 40 of width 400 on the canvas.
          var stave = new VF.Stave(10, 20, notes.length*100);

          // Add a clef and time signature.
          stave.addClef(randomClef) //.addTimeSignature("3/4");

          // Connect it to the rendering context and draw!
          stave.setContext(context).draw();

          // Create a voice in 4/4 and add the notes from above
          var voice = new VF.Voice({num_beats: notes.length,  beat_value: 4});
          voice.addTickables(notes);
          
          // Format and justify the notes to 400 pixels.
          var formatter = new VF.Formatter().joinVoices([voice]).format([voice], notes.length*100);
          
          // Render voice
          voice.draw(context, stave);

        });
      },

      refreshlock: function(e) {
          console.log(this.$data.randomchars)
          if (this.$data.randomchars[this.$data.indexOfArray] == e ) {
              console.log("correct")
              this.refresh();
              this.$data.indexOfArray++
          }
      },

      randomiser: async function(e) {
        var chance = new Chance();
        let randomclefs = [
          ... this.$data.enableTreble ? ["treble"] : [],
          ... this.$data.enableBass ? ["bass"] : [],
        ];
        let randomclefIndex = await chance.integer({min:0, max: randomclefs.length - 1})

        return { randomNoteIndex: await chance.integer({min:3, max:this.$data.possibleNotes.length}), randomclef: randomclefs[randomclefIndex]};
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#wrapper{
  height: 100%;

  & .centeralign {
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & #notation {
      width: 20em !important;
      display: flex;
      align-items: center;
      justify-items: center;
      justify-content: center;
  }

  & #bottomalign{
    background: black;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    
    & .button-grid{
      margin: 2px;
      display: grid;
      width: 100%;
      grid-template-columns:  auto auto auto auto auto auto auto;

      & .reroll {
        margin: 1%;
        justify-content: center;
        display: flex;
        height: 20px;
      }

      & button{
        font-family: monospace;
        display:block;
        padding-left: 5%;
        padding-right: 5%;
        background-color: white; 
        border: none;
      }
    }
    & .options {
      color: white;
    }
  }
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
.break {
  flex-basis: 100%;
  height: 0;
}
</style>
