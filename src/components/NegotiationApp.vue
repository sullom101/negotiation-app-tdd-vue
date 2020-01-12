<template>
  <div >
    <div class="hello">
      <div class="tabs">
        <button id="EmployerButton" :class="[tabToggle? active:'button-tab']" @click="toggleEmployer">Employer-Tab</button>
        <button id="EmployeeButton" :class="[!tabToggle? active:'button-tab']" @click="toggleEmployee" >Employee-Tab</button>
      </div>
      <EmployeeTab class="form-box" v-if="!tabToggle"  @changeMinimum="minimum = $event"/>

      <EmployerTab class="form-box" v-if="tabToggle" @changeMaximium="maximium = $event" />

    </div>
    <Modal v-if="modal" :response="temp" :maximium="maximium" :minimum="minimum"/>
  </div>
</template>

<script>
import axios from 'axios'
import EmployeeTab from './EmployeeTab.vue'
import EmployerTab from './EmployerTab.vue'
import Modal from './Modal'
export default {
  name: 'NegotiationApp',
  components: {
    EmployerTab,
    EmployeeTab,
    Modal
  },
  data () {
    return {
      tabToggle: true,
      active: 'active-tab',
      minimum: undefined,
      maximium: undefined,
      modal: false,
      message: '',
      temp: undefined
    }
  },
  methods: {
    toggleEmployee () {
      this.tabToggle = false
    },
    toggleEmployer () {
      this.tabToggle = true
    },
    async showWeather () {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c6afa68b07779b2e095f362bebb77a78')
      this.temp = response.data.main.temp
      console.log(response.data.main)
    },
    watchMinMax () {
      if (this.minimum > 0 && this.maximium > 0) {
        this.modal = true
        this.showWeather()
      }
    }
  },
  watch: {
    minimum () {
      (this.minimum > 0 && this.maximium > 0) ? this.watchMinMax() : console.log('Minimium or maximium value is missing')
    },
    maximium () {
      (this.minimum > 0 && this.maximium > 0) ? this.watchMinMax() : console.log('Minimium or maximium value is missing')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.button-tab{
  background-color:rgb(150, 150, 150);
  width:50%;
  height:50px;
  border: 1px solid #969696;
  font-size: large;
}
.hello{
  width: 80%;
  height: 500px;
  margin: 0 auto;
  border: 3px solid black;
}
.tabs{
  display: flex;
}
.form-box{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
}
form{
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
.number-input{
  width: 50%;
  margin: 20px;
  padding: 10px;
  font-size: large;
}
.submit-button{
  padding:10px;
  width:25%;
  background-color: transparent;
  border: 1px solid black;
  font-size: large;
}
.active-tab{
  width:50%;
  height:50px;
  background-color: white;
  border: 1px solid ;
  font-size: large;
}
.modal{
  position: absolute;
  top: 20%;
  border: 2px solid rgb(12, 11, 11);
  width: 85%;
  height: 400px;
  left: 8%;
  background-color: white;
}
</style>
