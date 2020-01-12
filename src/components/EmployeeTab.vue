<template>
    <div class="form-box" v-if="!employeeInputDisapear" >
      <!-- <pre>{{$data}}</pre> -->
      <form @submit.prevent="submitEmployee" >
        <input type="number" id="employee-salary" name="minimum" v-model.number="min" class="number-input" placeholder="Enter minimum Salary" required/>
        <input type="submit" id="employee-btn"  class="submit-button"/>
      </form>
    </div>
</template>

<script>
export default {
  name: 'EmployeeTab',
  data () {
    return {
      min: undefined,
      employeeInputDisapear: false
    }
  },
  methods: {
    submitEmployee () {
      if (this.min > 0) {
        this.employeeInputDisapear = true
        this.$emit('changeMinimum', this.min)
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
