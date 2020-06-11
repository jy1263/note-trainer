<template>
    <div id="settings-screen">
        <div>Enable Note Renderer:<input type="checkbox" v-model="showNotation" @input='emit({command: "showNotation", value:$event.target.checked})'></div>
        <div>Enable Synthesiser:<input type="checkbox" v-model="playSynth" @input='emit({command: "playSynth", value:$event.target.checked})'></div>
        <div>Enable Treble Clef:<input type="checkbox" v-model="enableTreble" @input='emit({command: "enableTreble", value:$event.target.checked})'></div>
        <div>Enable Bass Clef:<input type="checkbox" v-model="enableBass" @input='emit({command: "enableBass", value:$event.target.checked})'></div>
        <button v-on:click='emit({command: "showSettings", value:false})'></button>
    </div>
</template>

<script>
  import Vex from 'vexflow/src/index.js'
  let VF = Vex.Flow;

  export default {
    name: 'NotationRenderer',

    props: {
    },

    data: function () {
        return {
            enableTreble: this.$parent.enableTreble,
            enableBass: this.$parent.enableBass,
            showNotation: this.$parent.showNotation,
            playSynth: this.$parent.playSynth,

            showSettings: this.$parent.showSettings
        }
    },

    mounted () {
    },

    methods: {
        emit: function(e){
            this.$parent.$emit("settingsClicked", e)
        },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#settings-screen {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: white;
}
</style>
