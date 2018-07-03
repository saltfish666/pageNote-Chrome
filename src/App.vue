<template>
    <div>
        <button class="btn fix" id="show-note" :class="{hidden:(ifShowNote)}" @click="changeNoteShowState">note</button>
        <Note class="fix" :class="{hidden:(!ifShowNote)}" @changeShowNoteState="changeNoteShowState"></Note>
    </div>
</template>

<script>
  import Note from './components/Note.vue'

  export default {
    name: 'App',
    data () {
      return {
        ifShowNote: false,
      }
    },
    methods: {
      changeNoteShowState () {
        this.ifShowNote = !this.ifShowNote
      }
    },
    components: {
      Note
    }
  }
</script>

<style lang="less" scoped>
    .fix{
        position: fixed;
        top: 20%;
        right: 0px;
    }
    .btn{
        height: 30px !important;
        color: white !important;
        text-align: center !important;
        background-color: #009900 !important;
        border-bottom-left-radius: 12px !important;
        border-top-left-radius: 12px !important;
    }
    .hidden{
        display: none !important;
    }
</style>
