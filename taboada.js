const argv = require('yargs').argv;

if (argv.numero) {
    for(var i =1,len = 10; i<= len; i++){
        console.log(` ${argv.numero} x ${i}  =  ${i*argv.numero}`);
    }
   
} else {
    console.log('Informe um parametro');
}

