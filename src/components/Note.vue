<template>
    <div class="note">
        <div class="header"><button @click="hidden">隐藏</button><button @click="changeEditState">{{ edit ? "完成":"编辑"}}</button></div>
        <div class="body" v-if="!edit">{{text}}</div>
        <textarea v-model="text" v-if="edit"></textarea>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Note',
    data () {
      return {
        edit: false,
        text: '',
        token: ''
      }
    },
    methods: {
      hidden () {
        this.$emit('changeShowNoteState')
      },
      changeEditState () {
        console.log(this)
        if(this.edit){
          /*axios.post('http://libai688.com:8072/note', {
            params: {
              token: this.token,
              domain: window.location.origin,
              path: window.location.pathname,
              content: this.text
            }
          })
            .then((res) => {
              console.log(res)
            })*/
          let options = {
            method: 'post',
            url: 'http://libai688.com:8072/note',
            params: {
              token: this.token,
              domain: window.location.host,
              path: window.location.pathname,
              content: this.text
            }
          }
          axios(options)
            .then((res) => {
              console.log(res)
            })
          /*chrome.runtime.sendMessage({ type:'ajax', options:options}, (res) => {
            console.log(res)
          })*/
        }

        this.edit = !this.edit
      }
    },
    beforeMount () {
      chrome.runtime.sendMessage({ type:'get_token' }, (response) => {
        console.log(response)
        this.token = response.token

        let url = 'http://libai688.com:8072/note?'
        let params = {
          token: this.token,
          domain: window.location.host,
          path: window.location.pathname
        }
        for(let key in params){
          url += `&${key}=${params[key]}`
        }
        let options = {
          method: 'get',
          url: url
        }
        axios(options)
          .then( (res) => {
            console.log(res)
            this.text = res.data.msg[0]['content']
          })
        /*chrome.runtime.sendMessage({ type:'ajax', options:options}, function(err, res){
          console.log('hi,ajax getted callback')
          console.log(err)
          console.log(res)
          //this.text = res.data.msg[0]['content']
        })*/
      })
    },
    updated () {
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
