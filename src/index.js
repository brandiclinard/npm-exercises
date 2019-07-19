const $ = require('jquery');

const randomColor = require('randomcolor');
const color = randomColor;

const sayHello = () => console.log('Hello');
sayHello();

$('body').css('background-color',color);