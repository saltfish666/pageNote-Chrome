<template>
    <div>
        <div class="img-size">
            <img class="fix" :class="{hidden:(ifShowNote)}" @click="changeNoteShowState" src="./btn.png"
              style="height: 30px;"></img>
        </div>
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
        width: 50px !important;
        font-size: 15px !important;
        color: white !important;
        // text-align: center !important;
        padding-bottom: 8px;
        padding-top: 4px; // Lowercase English letters will leave a gap above the content
        background-color: #009900 !important;
        border-bottom-left-radius: 12px !important;
        border-top-left-radius: 12px !important;
        background-image: none !important; // prevent possiable inner page style
    }
    .hidden{
        display: none !important;
    }
</style>
