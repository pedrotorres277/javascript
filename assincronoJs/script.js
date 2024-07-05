//require() importar 
//arquivo.readFile("") ler o arquivo 
//CallBack:
// //function callBack(erro, conteúdo){
// 	console.log(erro, conteúdo)
// }
//fazer chamada da função na import do arquivo

//forma recomendada:
fs.readFile("./in1.txt", (erro, conteudo) => {
	fs.readFile("./in2.txt", (erro2, conteudo2) => {
		console.log(erro, conteudo)
		console.log(erro2, conteudo2)
	})
})

//Async && Await:
const init = async() => {
	try{
	const contents = await readFile(".in1.txt");
	const contents2 = await readFile(".in2.txt");
	console.log(String(conteudo));
	console.log(String(conteudo2));
	} 
	catch(erro){
	console.log(erro);
	}
}
