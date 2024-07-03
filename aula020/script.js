//CALLBACK FUNCTION SINTAXE

const loginUser = (email, password) => {
  setTimeout(() => {}, 1500); //1,5 seg
};

//JAVASCRIPT ASYNC AWAIT SINTAXE

function primeiraFuncao() {
  return new Promisse((resolve) => {
    setTimeout(() => {
      console.log(`Esperou isso aqui!`);
      resolve();
    }, 1500); //1,5 seg
  });
}

async function segundaFuncao() {
  console.log(`Iniciou!`);

  await primeiraFuncao();

  console.log(`Terminou!`);
}

//JAVASCRIPT ASSÍNCRONO APLICADO

function getUser(id) {
  return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
}

async function showUserName(id) {
  const user = await getUser(id);

  console.log(`O nome do usuário é: ${user.data.first_name}`);
}

showUserName(6);
