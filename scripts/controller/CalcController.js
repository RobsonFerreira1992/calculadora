class CalcController{

    constructor(){
        this._operation = [];
        this.__locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.__currentDate;
        this.initialize();
        this.initButtonEvents();


    }

    initialize(){

        this.setDisplayDataTime();
        
        setInterval(() => {
            
            this.setDisplayDataTime();
           
        }, 1000);

    }
    addEventListenerAll(element,events,fn){
        events.split(' ').forEach(event =>{

            element.addEventListener(event,fn,false);

        });
    }
    clearAll(){
        this._operation = [];
    }
    clearEntry(){
        this._operation.pop();
    }

    addOperation(){
        this._operation.push(value);
    }

    setError(){
        this.displayCalc = "Error";
    }

    execBtn(value){
        switch(value){
            case 'ac' :
                this.clearAll();
            break;

            case 'ce' :
                this.clearEntry();
            break;

            case 'soma':
    
            break;

            case 'subtracao':

            break;

            case 'divisao':

            break;

            case 'multiplicacao':

            break;

            case 'porcento':

            break;

            case 'igual':

            break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseint(value));
            break;
               
            default:
                this.setError();
            break;    



        }
    }

    initButtonEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index )=>{

            this.addEventListenerAll(btn,'click drag', e =>{

                let textBtn =  btn.className.baseVal.replace("btn-", "");

                this.execBtn();

            });

            this.addEventListenerAll(btn,'mouseover mouseup mousedown', e =>{
                
                btn.style.cursor = "pointer";
            });
    
        });

        
    }


    setDisplayDataTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this.__locale,{
            day:"2-digit",
            month:"long",
            year:"numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this.__locale);
    }


    get displayTime(){
       return this._timeEl.innerHTML; 
    }

    set displayTime(value){
         this._timeEl.innerHTML = value; 
     }



    get displayDate(){
      return  this._dateEl.innerHTML;
    }

    set displayDate(value){
        return  this._dateEl.innerHTML = value;
      }

    get displayCalc(){
        return this.__displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this.__displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._dataAtual = value;
    }




}