<template>
    <div class="note">
        <div class="header"><button @click="hidden">隐藏</button><button @click="changeEditState">{{ edit ? "完成":"编辑"}}</button></div>
        <div class="body" v-if="!edit">{{text}}</div>
        <textarea v-model="text" v-if="edit"></textarea>
    </div>
</template>

<script>
  export default {
    name: 'Note',
    data () {
      return {
        edit: false,
        text: ''
      }
    },
    methods: {
      hidden () {
        this.$emit('changeShowNoteState')
      },
      changeEditState () {
        this.edit = !this.edit
      }
    },
    beforeMount () {
      let note
      try{
        note = JSON.parse(localStorage.__pageNote__)
      }catch(e){
        note = {}
        localStorage.__pageNote__ = JSON.stringify(note)

        return
      }
      this.text = note[window.location.pathname] || ''
    },
    updated () {
      let note = JSON.parse(localStorage.__pageNote__)
      note[window.location.pathname] = this.text
      localStorage.__pageNote__ = JSON.stringify(note)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .note{
        background-color: #ccfff5;
        height: 400px;
        width: 400px;
    }
    button{
        background-color: aquamarine;
        border-radius: 10px;
        margin-left: 20px;
    }
    .header{
        padding:10px;
    }
    .body{
        padding: 0px 5px;
    }
    textarea{
        width: 100%;
        height: 89%;
        padding: 0px 5px;
    }
</style>
