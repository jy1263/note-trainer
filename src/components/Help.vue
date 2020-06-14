<template>
<transition name="fade">
    <div id="help">
        <div class="modal">
            Click on the note button ("C", "D", etc.) that corresponds with the note displayed.
            <button :type="type" :value="value" @click="$emit('input', false)"><span class="mdi mdi-arrow-left-bold" /></button>
        </div>
    </div>
</transition>
</template>

<script>
  export default {
    
    name: 'Help',

    props: {
        type: {default() { return 'text'; }},
        value: {}                              // you can also add more restrictions here
    },
    data: function () {
        return {
        }
    },

    mounted () {
    },

    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#help {
    align-items: center;
    justify-content: center;
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}
.modal {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    height: 50%;
    width: 50%;
    border-radius: 25px;
    line-height: 40px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    background:rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    
    & button {
        align-self: flex-end;
        transform: translateY(-3px);
        position: fixed;
        display: flex;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        align-content: center;
        text-align: center;
        line-height: 40px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        background:rgba(0, 0, 0, 0.5);
        border: none;
        color: white;
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
</style>
