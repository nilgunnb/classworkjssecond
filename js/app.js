//TASK-1
Task1 = () =>{

        for(let x=1; x<=1000; x++){

             if(x%3==0 && x%10!=3){
                console.log(x)
            }
        }

        console.log("task-1");
}

Task1();

//TASK-2

Task2 = () =>{
    for( let x=1; x<=1000; x++){
        let srtingnumber = x.toString();
        if (!srtingnumber.includes('3')){
           console.log(x);
        }
    }
    console.log("task-2")
    }

Task2();

//TASK-3

Task3 = () =>{
    let maxnum = 0;
    for( let x=1; x<=1000; x++){
       let digits = x.toString().split("");
       let sum = 0;
       for( i=0; i < digits.length; i++){
        sum += parseInt(digits[i]);
       }
       if(sum == 6 && x>maxnum){
        maxnum = x;
    }
    }
    console.log(maxnum);
}

Task3();
