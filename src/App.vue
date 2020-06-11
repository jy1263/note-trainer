<template>
  <div id="wrapper">
    <transition name="settings-transition">
      <SettingsModal :showSettings.sync="showSettings" v-show="showSettings" />
    </transition>

    <div class="centeralign" style="height: 83%;">
      <NotationRenderer v-show="showNotation" />
    </div>
    <div class="centeralign" style="height: 17%;" id="bottomalign">
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
        <button class="mobile-options" v-on:click='showSettings = true'><span class="mdi mdi-cog"></span></button>
        <div class="options">
          <div>Enable Note Renderer:<input type="checkbox" v-model="showNotation"></div>
          <div>Enable Synthesiser:<input type="checkbox" v-model="playSynth"></div>
          <div>Enable Treble Clef:<input type="checkbox" v-model="enableTreble"></div>
          <div>Enable Bass Clef:<input type="checkbox" v-model="enableBass"></div>
        </div>
    </div>
  </div>
</template>

<script>
  import '@mdi/font/css/materialdesignicons.css'
  import Chance from "chance";
  import { Synth } from "tone";
  import NotationRenderer from './components/NotationRenderer.vue'
  import SettingsModal from './components/SettingsModal.vue'
  import Vex from 'vexflow/src/index.js'
  let VF = Vex.Flow;

  export default {
    name: 'App',

    components: {
      NotationRenderer,
      SettingsModal
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
        playSynth: true,

        showSettings: false
      }
    },

    mounted () {
      [1,2,3,4,5,6,7,8,9].forEach(element => {
        this.$data.possibleNotes.push({noteLetter:"C", octave:element});
        this.$data.possibleNotes.push({noteLetter:"D", octave:element});
        this.$data.possibleNotes.push({noteLetter:"E", octave:element});
        this.$data.possibleNotes.push({noteLetter:"F", octave:element});
        this.$data.possibleNotes.push({noteLetter:"G", octave:element});
        this.$data.possibleNotes.push({noteLetter:"A", octave:element});
        this.$data.possibleNotes.push({noteLetter:"B", octave:element});
      });

      this.$on('enableTreble', function(e) {
        this.$data.enableTreble = e
      });
      this.$on('enableBass', function(e) {
        this.$data.enableBass = e
      });
      this.$on('showNotation', function(e) {
        this.$data.showNotation = e
      });
      this.$on('playSynth', function(e) {
        this.$data.playSynth = e
      });

      this.refresh();
    },

    methods: {
      refresh: function() {
        const synth = new Synth().toMaster();
        
        var svg = document.querySelector("svg");
        if (svg != null) {
            svg.parentNode.removeChild(svg);
        }
        
        this.randomiser().then((e) => {
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
        })       
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

        let randomclef = randomclefs[chance.integer({min:0, max: randomclefs.length - 1})]

        let minfloor;
        let maxceiling;


        switch(randomclef) {
          case "bass":
            console.log("bass");
            minfloor = 9;
            maxceiling = 21;
            break;
          case "treble":
            console.log("treble");
            minfloor = 19;
            maxceiling = 35;
        } 

        return { randomNoteIndex: chance.integer({min:minfloor, max:maxceiling}), randomclef: randomclef};
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import './assets/fonts/font-loader.css';
@mobile:    ~"only screen and (max-width: 800px)";
@desktop:    ~"only screen and (min-width: 800px)";

#wrapper{
  height: 100%;

  & .centeralign {
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & #bottomalign{
    background: rgba(0, 0, 0, 0.5);
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    & button{
      text-align: center;
      line-height: 40px;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      background:rgba(0, 0, 0, 0.5);
      border-radius: 25px;
      border: none;
      color: white;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }
    
    & .button-grid{
      margin: 2px;
      display: grid;
      width: 100%;
      grid-template-columns:  auto auto auto auto auto auto auto;

      & .reroll {
        margin: 1%;
        justify-content: center;
        display: flex;
        height: 40px;
      }
    }

    & button{
      text-align: center;
      line-height: 40px;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      background:rgba(0, 0, 0, 0.5);
      border-radius: 25px;
      border: none;
      color: white;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }

    & .mobile-options{
      @media @desktop {
        display: none;
      }

      border-radius: 100%;
      height: 40px;
      width: 40px;
    }

    & .options {
      @media @mobile {
        display: none;
      }
      width: 100%;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      color: white;
      display: grid;
      grid-template-columns:  auto auto auto auto;

      & div{
        display: flex;
        justify-content: center;
        align-content: center;
      }
    }
  }
}

html {
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  background-size: 400% 400%;
  -webkit-animation: rainbowFrames 20s ease infinite;
  -moz-animation: rainbowFrames 20s ease infinite;
  animation: rainbowFrames 20s ease infinite;
  /*background: linear-gradient(to right, #ffafbd, #ffc3a0);*/
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

@-webkit-keyframes rainbowFrames {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes rainbowFrames {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes rainbowFrames {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

.settings-transition-enter-active, .settings-transition-leave-active {
  transition: all .5s ease-in-out;
}

.settings-transition-enter, .settings-transition-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(100%);
}
</style>
