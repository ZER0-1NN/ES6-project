const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    { nome: 'Luis', idade: 17, empresa: 'Google' },
];

// 2.1 Utilizando o map

const idades = usuarios.map(user => {
    return user.idade;
});

// 2.2 Utilizando o filter

const usuariosRocketseat = usuarios.filter(user => {
    return user.empresa === 'Rocketseat' && user.idade >= 18
});

// 2.3 Utilizando o find

const usuariosGoogle = usuarios.filter(user => {
    return user.empresa === 'Google'
});

// 2.4 Unindo operações

const resultado = usuarios.map(user => {
    return ({...user, idade: user.idade*2})
}).filter(user => {
    return user.idade <= 50
});
