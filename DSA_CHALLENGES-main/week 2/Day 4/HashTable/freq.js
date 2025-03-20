function freq(s){
    let obj ={}
    for(let i=0;i<s.length;i++){
        if(!obj[s[i]]){
            obj[s[i]]=1
        }else{
            obj[s[i]]++
        }
    }
    return obj
}

console.log(freq("Rimshan"))

//Remove Duplicate use frequency:-

function freq(s){
    let obj ={}
    for(let i=0;i<s.length;i++){
        if(!obj[s[i]]){
            obj[s[i]]=1
        }else{
            obj[s[i]]++
        }
    }
    return Object.keys(obj).join('')
}

console.log(freq("Rimshaaaan"))