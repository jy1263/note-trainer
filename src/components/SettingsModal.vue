<template>
    <div id="settings-screen">
        <div class="options">Enable Note Renderer:<input type="checkbox" v-model="showNotation" @input="$parent.$emit('showNotation', $event.target.checked);"></div>
        <div class="options">Enable Synthesiser:<input type="checkbox" v-model="playSynth" @input="$parent.$emit('playSynth', $event.target.checked);"></div>
        <div class="options">Enable Treble Clef:<input type="checkbox" v-model="enableTreble" @input="$parent.$emit('enableTreble', $event.target.checked);"></div>
        <div class="options">Enable Bass Clef:<input type="checkbox" v-model="enableBass" @input="$parent.$emit('enableBass', $event.target.checked);"></div>
        <button @click="$emit('update:showSettings', false);" class="options">Done<div class="break" /><span class="mdi mdi-chevron-down" /></button>
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
    display: grid;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    background-size: 400% 400%;
    -webkit-animation: rainbowFrames 20s ease infinite;
    -moz-animation: rainbowFrames 20s ease infinite;
    animation: rainbowFrames 20s ease infinite;

    & .options {
        justify-content: center;
        align-content: center;
        display: flex;
        width: 100%;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color: white;
        display: grid;
        grid-template-columns:  auto auto auto auto;
    }
    & button{
        height: 100%;
        text-align: center;
        line-height: 40px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 120% !important;
        background:rgba(0, 0, 0, 0.5);
        border-radius: 25px 25px 0px 0px;
        border: none;
        color: white;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
    }
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
</style>
