function calcularimposto(cpf, numDependentes, rendamensal){
    let salariominimo = 1302;
    let aliquota;
    
    if(rendaMensal <= salarioMinimo * 2){
        aliquota = 0;
        
    }else if(rendamensal <= salariominimo * 3){ 
        aliquota = 0.05;
        
    }else if(rendamensal <= salariominimo * 5){ 
        aliquota = 0.10;
        
    }else if(rendamensal <= salariominimo * 7){ 
        aliquota = 0.15;
        
    }else{ 
        aliquota = 0.20;
    }
    
    return rendamensal * aliquota - ((numdependentes * 0.05 ) * salariominimo);
}
module.exports = { calcularimposto }