<template>
    <div class="note">
        <div class="aside">
            <button @click="hidden" class="item show_state">隐藏</button>
            <button @click="changeEditState" class="item edit">{{ edit ? "完成":"编辑"}}</button>
            <a href="https://github.com/login/oauth/authorize?client_id=40e9e869abab72c0da76&scope=public_repo">
                <button v-if="!login" class="item login">登录</button>
            </a>
        </div>
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
        token: '',
        login: false
      }
    },
    methods: {
      hidden () {
        this.$emit('changeShowNoteState')
      },
      changeEditState () {
        if(this.edit){
          let options = {
            method: 'post',
            url: 'https://libai688.com/note',
            params: {
              domain: window.location.host,
              path: window.location.pathname + window.location.search,
              content: this.text
            },
            headers: {
              Authorization: 'token ' + this.token
            }
          }
          axios(options)
            .then((res) => {
              console.log(res)
            })
        }
        this.edit = !this.edit
      }
    },
    beforeMount () {
        chrome.runtime.sendMessage({ type:'get_token' }, (response) => {
          this.token = response.token
          this.login = true
        })

        this.token = localStorage.__pageNote__token
        if(!this.token){
          return null
        } else {
          this.login = true
        }

        let url = 'https://libai688.com/note?'   //插，少了？
        let params = {
          token: this.token,
          domain: window.location.host,
          path: window.location.pathname + window.location.search
        }
        for(let key in params){
          url += `&${key}=${params[key]}`
        }
        let options = {
          method: 'get',
          url: url,
          headers: {
            Authorization: 'token ' + this.token
          }
        }
        axios(options)
          .then( (res) => {
            this.text = res.data.msg[0]['content']
          })

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .note{
        height: 400px;
        width: 400px;
        display: flex;
        flex-direction: row;
        position: fixed;
        top:20%;
        right: 0px;
    }
    .aside{
        display: flex;
        flex-direction: column;
    }
    .aside a {
        text-decoration: none;
    }
    .aside .item{
        display: block;
        margin: 0px;
        height: 22px;
        width: 45px;
        text-align: center;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        margin-bottom: 10px;
        font-size: 12px !important;
    }
    textarea, .body{
        width: 100%;
        height: 89%;
        padding: 0px 5px;
        border: 0.1px solid #e6faff;
    }
    .body{
        background-color: #80e5ff;
    }
    textarea{
        background-color: snow;
    }

    .show_state{
        background-color: black !important;
        color: white !important;
    }
    .edit{
        background-color: #00ccff !important;
        color: white !important;
    }

    .login{
        background-color: #4dff4d !important;
        color: white !important;
    }
</style>
