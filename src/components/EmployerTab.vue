<template>
    <div class="form-box" v-if="!employerInputDisapear" >
        <!-- <pre>{{$data}}</pre>-->
        <form @submit.prevent="submitEmployer">
          <input type="number" id="employer-expect" name="maximium" v-model.number="max" class="number-input" placeholder="Enter maximum Salary" required/>
          <input type="submit" class="submit-button"/>
        </form>
    </div>
</template>

<script>
export default {
  name: 'EmployerTab',
  data () {
    return {
      employerInputDisapear: false,
      max: undefined
    }
  },
  methods: {
    submitEmployer () {
      if (this.max > 0) {
        this.employerInputDisapear = true
        this.$emit('changeMaximium', this.max)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
</style>
