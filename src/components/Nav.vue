<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container fluid">
        <a href="#" class="navbar-brand">Troca Mágica</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a href="http://localhost:8080/" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Novos</a>
            </li>
            <li class="nav-item">
                <a href="http://localhost:8080/login" class="nav-link">Entrar</a>
            </li>
            <li class="nav-item">
                <a href="http://localhost:8080/cadastrar" class="nav-link">Cadastre-se</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
    name: 'Nav'
}
</script>