<template>
<div>
    <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand  order-md-last  " style="margin-right:30px">CRUD Vue.js + MongoDB + Node.js </a>
        <ul class="navbar-nav mr-auto " style="margin-left:20px">
            <li class="nav-item ">
              <router-link class="nav-link " to="/">Crie Novos Carros</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/listCars">Lista De Carros</router-link>
            </li>
          </ul>
    </nav>
    <div class="container mt-5">
        <router-view/>
    </div>
</div>

</template>
<script>
</script>