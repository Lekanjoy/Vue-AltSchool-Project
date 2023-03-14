<template>
  <div class="counter-box">
    <p class="value">{{ count }}</p>
     <input
    class="set"
    @input="setValue"
    type="number"
    placeholder="Set Value"
    min="0"
    id="input"
  />
    <div class="btn">
      <button class="minus" @click="decrement">-</button>
      <button class="add" @click="increment">+</button>
    </div>
    <button class="reset" @click="reset">&rightleftharpoons; Reset</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import counterManager from "../../composables/counterManager";

export default defineComponent({
  setup() {
    const { count, increment, decrement, reset, setValue } = counterManager();

    return {
      count,
      increment,
      decrement,
      reset,
      setValue,
    };
  },
});
</script>

<style scoped>
.counter-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 12px;
  
}
.value {
  font-size: 100px;
  height: 50px;
  font-weight: 900;
  color: #6351c6;
}
.btn{
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  width: 100%;
}
.btn button{
  padding: 12px;
  text-align: center;
  color: #6351c6;
  border: none;
  min-width: 150px;
  width: 100%;
  height: 100px;
  font-size: 50px;
  background-color: #dfdee3;
  cursor: pointer;
}
.set{
  width: 100%;
  height: 40px;
  margin-bottom: 13px;
  font-size: 20px;
  padding: 12px 0;
  text-align: center;
  border: none;
  border: 1px solid #6351c6;
  outline: none;
  border-radius: 3px;
}
.reset{
  text-align: center;
  color: #fff;
  border: none;
  background-color: #ec2e19;
  cursor: pointer;
  margin-top: 18px;
  padding: 6px 10px;
  text-transform: uppercase;
  font-size: 1rem;
}
.reset:hover{
  background-color: #e01e09;
}
@media screen and (min-width: 768px) {
  .counter-box {
    width: 70%;
    margin: 0 auto;
  }
  .value {
    font-size: 200px;
  margin-top: 20px;
  }
  .btn{
    width: 50%;
  }
  .btn button{
    min-width: 100px;
    width: 100%;
    height: 100px;
    font-size: 50px;
  }
  .set{
    width: 50%;
    margin-bottom: 13px;
    font-size: 20px;
    padding: 12px 0;
    text-align: center;
    border: none;
    border: 1px solid #6351c6;
    outline: none;
    border-radius: 3px;
  }
  .reset{
    text-align: center;
    color: #fff;
    border: none;
    background-color: #ec2e19;
    cursor: pointer;
    margin-top: 18px;
    padding: 6px 10px;
    text-transform: uppercase;
    font-size: 1rem;
  }
  .reset:hover{
    background-color: #e01e09;
  }
}
</style>
