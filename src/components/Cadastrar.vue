<template>
    <div class="auth-inner">
        <form class="register" onsubmit="validarInputs(event)">
            <h1>Cadastro</h1> <br>
            <div> <br>
                <input type="text" name="username" id="username" placeholder="Digite seu nome de usuário" required />
            </div>
            <div> <br>
                <input type="text" name="text" id="text" placeholder="Digite sua senha" required />
            </div>
            <div> <br>
                <input type="text" name="passConfirmation" id="passConfirmation" placeholder="Confirme sua senha" required />
            </div>
            <div> <br>
                <input type="submit" class="btn btn-primary" name="botao" value="Cadastre-se" />
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:'Cadastrar'
}
</script>


<style>
body{
    background-color: #FFFFFF;
}
.color{
    background-color:	#FFFFFF;
    max-width: 500px;
    width: 70%;
    padding: 50px;
    position:absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);

}
form{
    padding-left: 20px;
    border: 1px solid #DBDBDB;
    text-align: center;
    box-shadow:10px 10px 10px rgba(50, 50, 50, 0.1);
}
form h1{
    text-align: center;
}
form input[type=text], .title
form input[type=password]{
    width: 100%;
    height: 45px;
    border: 1px solid #DBDBDB;
    padding-left: 10px;
    margin: 10px 0;
}
.pass-change{
    width:100%;
    display: flex;
    align-items: center;
    margin-left: auto;
}
button{
    width: 40px;
    display: flex;
    align-items: center;
    margin-left: -70px;
    background-color: transparent;
    border: none;
    transition: .2s;
    opacity: .5s;
}
form input{
    background-color: #FAFAFA;
    border-radius: 5pt;
}
form a{
    text-decoration: none;
    color: 	425d70;
}
form a:hover {
    color: #425d70;
}
label h1{
    color: #00376b;
    font-size: 25px;
}
form h1{
    font-size: 50px;
}
.btn-primary{
    width: 100%;
}
.register {
    padding: 20px;
}
.auth-inner{
  width: 600px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14 px 80px rgba(34, 35, 58, 0.2);
  padding-top: 100px;
  border-radius: 15px;
  transition: all .3s;
  position: relative;
}
</style>