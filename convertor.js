function produto() {
  const precoProduto = document.getElementById("input").value;

  produtoValor = parseFloat(precoProduto);

  const acimaDeQuinze = produtoValor + produtoValor / 20;
  const entreOnzeeQuinze = produtoValor + produtoValor / 6.6666;
  const entreOitoeDez = produtoValor + produtoValor / 4;
  const menorQueOito = produtoValor + produtoValor / 2;

  let resultadoInput = document.getElementById("resultado");
  if (produtoValor >= 15) {
    resultadoInput.value = `$ ${acimaDeQuinze}`;
  } else if (produtoValor >= 11) {
    resultadoInput.value = `$ ${entreOnzeeQuinze}`;
  } else if (produtoValor >= 8) {
    resultadoInput.value = `$ ${entreOitoeDez}`;
  } else if (produtoValor >= 0.01) {
    resultadoInput.value = `$ ${menorQueOito}`;
  } else if (precoProduto === 0) {
    alert(`O valor não pode ser zero!`);
  }
}
document.getElementById("button").addEventListener("click", produto());
