import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CollegeEnterTest';
  num;number1;number2;number3;number4;number5;number6;number7;number8; 

  submit(){
    let num0=Number(this.number8)-Number(this.number7);
    if(num0<0){
      this.num=0;
      alert("抱歉，你的分数比今年的学校分数线低!"); 
    }
    else{
      let num1= Number(this.number1) - Number(this.number4);
      let num2= Number(this.number2) - Number(this.number5);
      let num3= Number(this.number3) - Number(this.number6);
      if(num1<0||num2<0||num3<0){
        alert("输入有误，专业分数线比当年的省控线低!");
      }
      else{
        let num4 = (num1+num2+num3)/3
        let num5 = Math.sqrt((Math.pow(num1-num4,2)+Math.pow(num2-num4,2)+Math.pow(num3-num4,2))/3);
        if(num5==0){
          if(num0<num4){
            this.num=0;
          }
          if(num0==num4){
            this.num=50;
          }
          if(num0>num4){
            this.num=50+(num0-num4)*10;
            if(this.num>100){
              this.num=100;
            }
          }
        }
        else{
          let num6=(0-num4)/num5;
          let num7=(num0-num4)/num5;   
          this.num =(this.NORMSDIST(num7)-this.NORMSDIST(num6))*100 ;
          alert(num5);
          alert(num6);
          alert(num7);
          alert(this.num);
        }
      }
    }
  }

  
  public NORMSDIST(a)
  {
   let p = 0.2316419;
   let b1 = 0.31938153;
   let b2 = -0.356563782;
   let b3 = 1.781477937;
   let b4 = -1.821255978;
   let b5 = 1.330274429;
  
   let x = Math.abs(a);
   let t = 1/(1+p*x);
  
   let val = 1 - (1/(Math.sqrt(2*Math.PI))  * Math.exp(-1*Math.pow(a, 2)/2)) * (b1*t + b2 * Math.pow(t,2) + b3*Math.pow(t,3) + b4 * Math.pow(t,4) + b5 * Math.pow(t,5) );
  
   if ( a < 0 )
   {
     val = 1- val;
   }
  
   return val;
  }
}
