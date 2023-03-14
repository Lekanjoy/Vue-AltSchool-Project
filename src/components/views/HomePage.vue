<template>
    <main>
      <section>
        <h2>What is a Counter App?</h2>
        <p>
          A Counter App is a simple tool that allows you to count up or down
          from a starting number.
        </p>
      </section>
      <section>
        <h2>How does it work?</h2>
        <p>
          The Counter App lets you input a starting number and then provides
          buttons to increment or decrement that number. You can also reset the
          count back to the starting number.
        </p>
      </section>
      <section>
        <h2>Why use a Counter App?</h2>
        <p>
          A Counter App can be useful in a variety of situations, such as
          tracking inventory, keeping score in games, or counting down to
          important events.
        </p>
      </section>
    </main>
    <footer>
      <p>Olalekan &copy; 2023 </p>
      <a target="_blank" href="https://github.com/Lekanjoy/Vue-AltSchool-Project.git">GitHub</a>
    </footer>
</template>

<script>
export default {};
</script>
<style scoped>

main {
  margin: 40px auto;
  max-width: 800px;
  padding: 0 20px;
}

section {
  border: 1px solid #dfdee3;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 1px 1px 5px #dfdee3;
}

h2 {
  color: #6351c6;
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
}

footer {
  background-color: #6351c6;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  
}

footer p {
    font-size: 14px;
    color: #fff;
}
footer a {
    font-size: 14px;
    color: #fff;
    transition: color 0.3s ease;
}
footer a:hover {
    color: #dfdee3;
}
</style>
