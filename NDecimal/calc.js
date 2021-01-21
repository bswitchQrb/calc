const Calculator = {
  data(){
    return {
      num1: 0,
      num2: 0,
      answer: 'answer',
      selected:'+'
    }
  },
  methods:{
    calcSum(){
      this.answer = this.num1 + this.num2
    },
    calcDifference(){
      this.answer = this.num1 - this.num2
    },
    calcProduct(){
      this.answer = this.num1 * this.num2
    },
    calcQuotient(){
      this.answer = this.num1 / this.num2
    },
    calcRemainder(){
      this.answer = this.num1 % this.num2
    },
  }
}
Vue.createApp(Calculator).mount('#calculator')

const Calc2Determinant = {
  data(){
    return{
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      answer:'answer',
      // width: 2,
      // height: 2
    }
  },
  methods:{
    calc22(a1, a2, a3, a4){
      this.answer = a1 * a4 - a3 * a2
    },
    // incrementWidth(){
    //   this.width++
    // },
    // incrementHeight(){
    //   this.Height++
    // }
  }
}
Vue.createApp(Calc2Determinant).mount('#calc2Determinant')

const Calc3Determinant = {
  data(){
    return{
      a11: 0, a12: 0, a13: 0,
      a21: 0, a22: 0, a23: 0,
      a31: 0, a32: 0, a33: 0,
      answer:'answer',
    }
  },
  methods:{
    calc22(a11, a12, a21, a22){
      return a11 * a22 - a12 * a21
    },
    calc33(a11, a12, a13, a21, a22, a23, a31, a32, a33){
      this.answer = a11 * this.calc22(a22, a23, a32, a33) - a21 * this.calc22(a12, a13, a32, a33) + a31 * this.calc22(a12, a13, a22, a23)
    },
  }
}
Vue.createApp(Calc3Determinant).mount('#calc3Determinant')

const Calc4Determinant = {
  data(){
    return{
      //なんで配列使わんかったん？？
      a11: 0, a12: 0, a13: 0, a14: 0,
      a21: 0, a22: 0, a23: 0, a24: 0,
      a31: 0, a32: 0, a33: 0, a34: 0,
      a41: 0, a42: 0, a43: 0, a44: 0,
      answer:'answer',
    }
  },
  methods:{
    calc22(a11, a12, a21, a22){
      return a11 * a22 - a12 * a21
    },
    calc33(a11, a12, a13, a21, a22, a23, a31, a32, a33){
      return a11 * this.calc22(a22, a23, a32, a33) - a21 * this.calc22(a12, a13, a32, a33) + a31 * this.calc22(a12, a13, a22, a23)
    },
    calc44(a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44){
      this.answer = a11*this.calc33(a22, a23, a24, a32, a33, a34, a42, a43, a44)-a21*this.calc33(a12, a13, a14, a32, a33, a34, a42, a43, a44)+a31*this.calc33(a12, a13, a14, a22, a23, a24, a42, a43, a44)-a41*this.calc33(a12, a13, a14, a22, a23, a24, a32, a33, a34)
    }
  }
}
Vue.createApp(Calc4Determinant).mount('#calc4Determinant')

const DecimalToN = {
  data(){
    return {
      n10: 0,
      n2:'answer',
      selected:""
    }
  },
  methods:{
    calc10to2(n){
      this.n2 = n.toString(2)
    },
    calc10to16(n){
      this.n2 = n.toString(16)
    },
    calc10to7(n){
      this.n2 = n.toString(7)
    },
  }

}
Vue.createApp(DecimalToN).mount('#decimalToN')

const NToDecimal = {
  data(){
    return {
      n: 0,
      n10:'answer',
      selected:''
    }
  },
  methods:{
    calc2to10(n){
      this.n10 = parseInt(n, 2)
    },
    calc7to10(n){
      this.n10 = parseInt(n, 7)
    },
    calc16to10(n){
      this.n10 = parseInt(n, 16)
    }
  }

}
Vue.createApp(NToDecimal).mount('#nToDecimal')

