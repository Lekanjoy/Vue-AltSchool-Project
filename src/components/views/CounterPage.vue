<template>
  <p>{{ count }}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="reset">Reset</button>
  <button @click="setValue">Set Value</button>
</template>

<script>

export default {

  data(){
    return({
      count: 0,
    })
  },
  methods: {
    increment(){
      this.count++
    },
    decrement(){
      if (this.count > 0) {
        this.count--
        
      }
    },
    reset(){
        this.count = 0
    }, 
    setValue(){
        const value = parseInt(prompt('Enter a value'))
        if(!isNaN(value)){
            this.count = value
        }
    }
  }
 
}
</script>

<style>

</style>
