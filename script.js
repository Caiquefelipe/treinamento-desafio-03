const operacaoEnum = {
  Divisao: '/',
  Multiplicacao: '*',
  Adicao: '+',
  Subtracao: '-',
};

const operacoes = ['+', '-', '*', '/'];

class Calculadora {
  constructor() {
    this._expressao = [];
    this._resultado = '0.0';
    this._display = '';
  }

  getResultado() {
    return this._resultado;
  }

  getDisplay() {
    return this._display;
  }

  setResultado(resultado) {
    this._resultado = resultado;
  }

  setDisplay(valor) {
    this._display = valor;
  }
  adicionarDigito(valor) {
    if (valor === '=') {
      this.calcularExpressao();
    } else if (operacoes.includes(valor)) {
      if (this._expressao.length === 0) {
        return; 
      }
  
      // Verifique se o último elemento da expressão é um operador
      const ultimoElemento = this._expressao[this._expressao.length - 1];
      if (operacoes.includes(ultimoElemento)) {
        
        return;
      } else {
        
        this._expressao.push(valor);
        this.setDisplay(this.getDisplay() + ' ' + valor + ' ');
      }
    } else {
      this._expressao.push(valor);
      this.setDisplay(this.getDisplay() + valor);
    }
    console.log(this._expressao)
  }


  limparDisplay() {
    this._expressao = [];
    this._display = '';
  }

  calcularExpressao() {
    try {
      const result = eval(this._expressao.join(''));
      if (!isNaN(result)) {
        if (result === Infinity || result === -Infinity) {
          this.setResultado('Não é possível dividir por zero.');
          this.setDisplay(this.getResultado());
          this._expressao = [];
        } else {
          this.setResultado(result.toString().replace('.', ','));
          this.setDisplay(this.getResultado());
          this._expressao = [this.getResultado()];
          console.log(`Resultado da operação: ${this.getResultado()}`);
        }
      } else {
        this.setResultado('Erro');
        this.setDisplay(this.getResultado());
        this._expressao = [];
        console.log('Erro ao calcular a expressão');
      }
    } catch (error) {
      this.setResultado('Erro');
      this.setDisplay(this.getResultado());
      this._expressao = [];
      console.log('Erro ao calcular a expressão');
    }
  }
}

const calculadora = new Calculadora();

atribuirValor = (valor) => {
  calculadora.adicionarDigito(valor);
  atualizarDisplay();
};



atualizarDisplay = () => {
  document.getElementById('display').value = calculadora.getDisplay();
};

limparDisplay = () => {
  calculadora.limparDisplay();
  atualizarDisplay();
};


