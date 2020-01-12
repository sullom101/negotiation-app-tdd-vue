<template>
    <div class="modal">
        <p> Tempreture in London: {{response}} </p>
        <h1>{{message}}</h1>
        <p> Maximium offer was: <span>{{ maximium }}</span> </p>
        <p> Minimum expected salary was: <span>{{ minimum }}</span> </p>
    </div>
</template>

<script>

export default {
  name: 'Modal',
  props: {
    minimum: {
      type: Number,
      required: true
    },
    maximium: {
      type: Number,
      required: true
    },
    response: {
      required: true
    }
  },
  data () {
    return {
      message: this.minimum <= this.maximium ? 'Success!' : 'Failed!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
