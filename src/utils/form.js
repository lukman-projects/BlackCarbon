

export const turnEmptyStringToNull = (values) => {
    const newValues = {...values}
    for(let i in newValues){
        if(newValues.hasOwnProperty(i)){
            if(newValues[i] === ""){
                newValues[i] = null;
            }
        }
    }
    return newValues;   
}

export const outDifferents = (values, initialValues) => {
    let index = 0;
    const result = {}
    for(let i in values){
        for(let j in initialValues){
            if(j === i && values[i] !== initialValues[j]){
                if(values[i] === "" && initialValues[j] === null) {
                    continue;
                }else{
                    result[i] = values[i];
                    index++;
                }
            }
        }
    }
    return {
        index,
        result
    }
}