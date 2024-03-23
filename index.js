let so ;
let no ;
let yo ;
let mo ;
so= 0; yo =0;

const btns = document.querySelector(".op4")
    btns.addEventListener("click",()=>{
        yo=Number(yo)
        so=Number(so)
       if(mo=='+'){
        no=yo+so
       }
       else if(mo=='-'){
        no=yo-so
       }
       else if(mo=='*'){
        no=so*yo
       }
       else{
        no=yo/so
       }
       document.querySelector(".di1").innerHTML=``
       document.querySelector(".di2").innerHTML=``
       document.querySelector(".di3").innerHTML=`${no}`
       yo=no
       so= 0
    })
    const un = document.getElementById("id1")
    un.addEventListener("click",()=>{
        if(so==0 && yo== 0){
            so=1
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        /*else if(so==0 && yo!== 0){
            if(so==0){
                let moc
                let soc
                let res
                moc=mo
                so=1
                soc =so
                res=soc;
                
                document.querySelector(".di3").innerHTML=`${soc}${moc}`
        
            }
            else{
                let moc
                let soc
                let res
                moc=mo
                so= so+'1'
                soc =so
                res=soc
                
                document.querySelector(".di3").innerHTML=`${soc}${moc}`
            }
        }*/
        else{
            so=so+'1'
            document.querySelector(".di3").innerHTML=` ${so}`}
        
    })
    const deux = document.getElementById("id2")
    deux.addEventListener("click",()=>{
        if(so==0){
            so=2
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        else{
            so=so+'2'
            document.querySelector(".di3").innerHTML=`   ${so}`
        }
       

    })
    const trois = document.getElementById("id3")
    trois.addEventListener("click",()=>{
        if(so==0){
            so=3
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        else{
            so=so+'3'
            document.querySelector(".di3").innerHTML=`   ${so}`
        }
       

    })
    const quatre = document.getElementById("id4")
    quatre.addEventListener("click",()=>{
        if(so==0){
            so=4
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        else{
            so=so+'4'
            document.querySelector(".di3").innerHTML=`   ${so}`
        }
       

    })
    const cinq = document.getElementById("id5")
    cinq.addEventListener("click",()=>{
        if(so==0){
            so=5
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        else{
            so=so+'5'
            document.querySelector(".di3").innerHTML=`   ${so}`
        }
       

    })
    const   six = document.getElementById("id6")
    six.addEventListener("click",()=>{
        if(so==0){
            so=6
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        else{
            so=so+'6'
            document.querySelector(".di3").innerHTML=`   ${so}`
        }
       

    })
    const sept = document.getElementById("id7")
    sept.addEventListener("click",()=>{
        if(so==0){
            so=7
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        else{
            so=so+'7'
            document.querySelector(".di3").innerHTML=`   ${so}`
        }
       

    })
    const huit = document.getElementById("id8")
    huit.addEventListener("click",()=>{
        if(so==0){
            so=8
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        else{
            so=so+'8'
            document.querySelector(".di3").innerHTML=`   ${so}`
        }
       

    })
    const   neuf = document.getElementById("id9")
    neuf.addEventListener("click",()=>{
        if(so==0){
            so=9
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        else{
            so=so+'9'
            document.querySelector(".di3").innerHTML=`   ${so}`
        }
       

    })
    const dzero = document.getElementById("id00")
    dzero.addEventListener("click",()=>{
        if(so==0){
            so= 0
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        else{
            so=so+'00'
            document.querySelector(".di3").innerHTML=`   ${so}`
        }
       

    })
    const zero = document.getElementById("id0")
    zero.addEventListener("click",()=>{
        if(so==0){
            so=0
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        else{
            so=so+'0'
            document.querySelector(".di3").innerHTML=`   ${so}`
        }
       

    })
    const plus = document.getElementById("plus")
    plus.addEventListener("click",()=>{
        if(so==0 && yo== 0 ){
            so=0
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        else{
            if(yo== 0 ){
            yo = so
            so = 0
            mo= '+'
            document.querySelector(".di1").innerHTML=`${yo}`
            document.querySelector(".di2").innerHTML=`${mo}`
            document.querySelector(".di3").innerHTML=`${so}`
        }
        else{
                so = 0
                mo= '+'
                document.querySelector(".di1").innerHTML=`${yo}`
                document.querySelector(".di2").innerHTML=`${mo}`
                document.querySelector(".di3").innerHTML=`${so}`
        }
    
    }
       

    })
    const moins = document.getElementById("moins")
    moins.addEventListener("click",()=>{
        if(so==0 && yo== 0 ){
            so=0
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        else{
            if(yo== 0 ){
            yo = so
            so = 0
            mo= '-'
            document.querySelector(".di1").innerHTML=`${yo}`
            document.querySelector(".di2").innerHTML=`${mo}`
            document.querySelector(".di3").innerHTML=`${so}`
        }
        else{
                so = 0
                mo= '-'
                document.querySelector(".di1").innerHTML=`${yo}`
                document.querySelector(".di2").innerHTML=`${mo}`
                document.querySelector(".di3").innerHTML=`${so}`
        }
    
    }
    })
    const mult = document.getElementById("mult")
    mult.addEventListener("click",()=>{
        if(so==0 && yo== 0 ){
            so=0
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        else{
            if(yo== 0 ){
            yo = so
            so = 0
            mo= '*'
            document.querySelector(".di1").innerHTML=`${yo}`
            document.querySelector(".di2").innerHTML=`${mo}`
            document.querySelector(".di3").innerHTML=`${so}`
        }
        else{
                so = 0
                mo= '*'
                document.querySelector(".di1").innerHTML=`${yo}`
                document.querySelector(".di2").innerHTML=`${mo}`
                document.querySelector(".di3").innerHTML=`${so}`
        }
    
    }
    })
    const div = document.getElementById("div")
    div.addEventListener("click",()=>{
        if(so==0 && yo== 0 ){
            so=0
            document.querySelector(".di3").innerHTML=`
        ${so}`

        }
        else{
            if(yo== 0 ){
            yo = so
            so = 0
            mo= '/'
            document.querySelector(".di1").innerHTML=`${yo}`
            document.querySelector(".di2").innerHTML=`${mo}`
            document.querySelector(".di3").innerHTML=`${so}`
        }
        else{
                so = 0
                mo= '/'
                document.querySelector(".di1").innerHTML=`${yo}`
                document.querySelector(".di2").innerHTML=`${mo}`
                document.querySelector(".di3").innerHTML=`${so}`
        }
    
    }
       

    })

    let vvs = document.querySelectorAll(".vv")
    vvs.forEach(function(ss){
        ss.addEventListener("click",()=>{
           yo=0
            so=0
            document.querySelector(".di1").innerHTML=``
            document.querySelector(".di2").innerHTML=``
            document.querySelector(".di3").innerHTML=`${so}`
            
        })
        
    })


