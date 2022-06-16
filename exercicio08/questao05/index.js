var objeto = {}

objeto['Um atributo com espaços'] = 1

console.log(objeto['Um atributo com espaços'])
Object.values(objeto).forEach(function(obj) { console.log(obj)})