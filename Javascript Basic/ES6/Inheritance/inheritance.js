class Father{
   addTwo(){
    console.log(2+2);
   }
}


class Son extends Father{

}

let son1 = new Son();
son1.addTwo();