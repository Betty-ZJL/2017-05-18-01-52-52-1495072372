module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.length}
o) 平均值 = ${sequence.average()}
`);
};

class Sequence {
  constructor(input) {
      this.length=input.length;
      for (let i=0;i<this.length;i++){
          this[i]=input[i];
      }
  }

  minimum() {
      let min=this[0];
      for(let i=1;i<this.length;i++)
          if(min>this[i])
              min=this[i];
      return min; 
  }
  
  maximum() {
      let max=this[0];
      for(let i=1;i<this.length;i++)
          if(max<this[i])
              max=this[i];
      return max; 
  }
  
  average(){
      let ave=0;
      for(let i=0;i<this.length;i++)
          ave=ave+this[i];
      ave=ave/this.length;
      return ave.toFixed(2);
  }
}
