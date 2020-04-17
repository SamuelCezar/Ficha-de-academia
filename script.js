nome=prompt("Nome completo:")
tagh1.innerHTML="Nome:"+nome
nascimento=prompt("Sua data de nascimento:")
idade="31 anos"
tem_condicao=confirm("Você tem algum problema de saúde?")
if(tem_condicao) {
  estado_saude="Sim"
} 
else {
  estado_saude="Não"
}
//if(tem_condicao==false){estado_saude='Não'}
//else(false){estado_saude="Não"}
lista.innerHTML= `<li>Data de nascimento: ${nascimento}</li><li>Idade: ${idade}</li><li>Tem algum problema de saúde? ${estado_saude}`