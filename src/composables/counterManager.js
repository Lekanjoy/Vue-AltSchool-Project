import { ref } from "vue";


export default function counterManager() {
  const count = ref(0);

  //   Increment Function
  function increment() {
    count.value++;
  }

  //   Decrement Function
  function decrement() {
    if (count.value > 0) {
      count.value--;
    }
  }

  //   Reset Value Function
  function reset() {
    count.value = 0;
    document.getElementById('input').value = 0

  }

//   Set Value Function
function setValue(e){
      count.value = e.target.value;

}

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
}
