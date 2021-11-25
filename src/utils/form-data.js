

export const formDataCollect = (values) => {
    const formData = new FormData();
    for(let i in values){
        if(values.hasOwnProperty(i)){
            formData.append(i, values[i]);
        }
    }
    return formData;
}