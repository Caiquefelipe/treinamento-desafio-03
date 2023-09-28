const operacaoEnum = ({
    Divisao: '/',
    Multiplicacao: '*',
    Adicao: '+',
    Subtracao: '-'
  });
  const operacoes = ['+', '-', '*', '/'];
  class Calculadora {
    constructor() {
      this._valorA = ''
      this._valorB = ''
      this._operacao = ''
      this._resultado = '0.0'
      this._display = ''
  
    }
    getValorA() {
      return this._valorA;
    }
  
    getValorB() {
      return this._valorB;
    }
  
    getOperacao() {
      return this._operacao;
    }
  
    getResultado() {
      return this._resultado;
    }
  
    getDisplay() {
      return this._display;
    }
  
    setValorA(valor) {
      this._valorA += valor
    }
  
    setValorB(valor) {
      this._valorB += valor
    }
  
    setOperacao(operacao) {
      this._operacao = operacao
    }
  
    setResultado(resultado) {
      this._resultado = resultado;
    }
  
    setDisplay(valor) {
      this._display = valor
    }
  
  
    adicionarDigito(valor) {
      if (operacoes.includes(valor)) {
        this.setOperacao(valor)
        this.setDisplay(this.getValorA() + ' ' + this.getOperacao() + ' ')
      } else if (this.getValorB() == '' && this.getOperacao() == '') {
        this.setValorA(valor)
        this.setDisplay(this.getDisplay() + valor)
      } else {
        this.setValorB(valor)
        this.setDisplay(this.getDisplay() + valor)
      }
    }
  
    limparDisplay() {
      this._valorA = ''
      this._valorB = ''
      this._operacao = ''
      this._display = ''
    }
  
    calcular() {
      let calculo = '';
      console.log(this._valorA, this._operacao, this._valorB)
      const valorA = parseFloat(this._valorA.replace(',', '.'));
      const valorB = parseFloat(this._valorB.replace(',', '.'));
      
      if (this._operacao === operacaoEnum.Adicao) {
        calculo = valorA + valorB;
      } else if (this._operacao === operacaoEnum.Multiplicacao) {
        calculo = valorA * valorB;
      } else if (this._operacao === operacaoEnum.Subtracao) {
        calculo = valorA - valorB;
      } else if (this._operacao === operacaoEnum.Divisao) {
        if (valorB === 0) {
          this.setResultado('Não é possível dividir por zero.');
          this.setDisplay(this.getResultado());
          return;
        } else {
          calculo = valorA / valorB;
        }
      } else {
        this.setResultado('Faça uma operação válida');
        this.setDisplay(this.getResultado());
        return
      }
  
      this.setResultado(calculo.toString().replace('.', ','))
      this.setDisplay(this.getResultado());
    }
  }
  
  const calculadora = new Calculadora();
  
  
  atribuirValor = (valor) => {
    calculadora.adicionarDigito(valor);
    atualizarDisplay();
  
  }
  
  calcular = () => {
    calculadora.calcular();
    atualizarDisplay();
    calculadora.limparDisplay()
  }
  
  atualizarDisplay = () => {
    document.getElementById('display').value = calculadora.getDisplay();
  }
  
  limparDisplay = () => {
    calculadora.limparDisplay();
    atualizarDisplay();
  }
  