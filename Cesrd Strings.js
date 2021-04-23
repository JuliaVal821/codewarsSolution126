https://www.codewars.com/kata/5ff6060ed14f4100106d8e6f/train/javascript

    function uncensor(infected, discovered) {
        let str = '';
        for(let el of infected){
            if(el === '*'){
                str = str + discovered[0];
                discovered = discovered.slice(1);
            }else{
                str = str + el;
            }
        }
        return str;
    }