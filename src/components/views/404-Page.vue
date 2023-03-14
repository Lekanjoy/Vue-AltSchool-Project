<template>
 <div class="container">
		<h1 class="title">404</h1>
		<p class="subtitle">Sorry, the page you requested cannot be found.</p>
		<router-link to="/" class="btn">Go back to homepage</router-link>
	</div>
</template>

<script>
export default {};
</script>
<style scoped>

body {
	background-color: #f2f2f2;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80vh;
}

.title {
	font-size: 7rem;
	font-weight: 700;
	color: #333;
	margin-bottom: 15px;
	text-shadow: 2px 2px #f2f2f2;
}

.subtitle {
	font-size: 1.5rem;
	font-weight: 400;
	color: #555;
	margin-bottom: 40px;
	text-align: center;
}

.btn {
	display: inline-block;
	background-color: #333;
	color: #fff;
	padding: 12px 20px;
	border-radius: 4px;
	text-decoration: none;
	transition: background-color 0.3s ease;
}

.btn:hover {
	background-color: #555;
}
/* Media queries for larger screens */
@media (min-width: 768px) {
  .title {
    font-size: 10rem;
  }
  .subtitle {
    font-size: 2rem;
  }
}

</style>
