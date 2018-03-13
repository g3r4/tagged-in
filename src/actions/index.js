import csvtojson from 'csvtojson';

export const LOAD_FILE = 'load_file';

export function loadFile(files){
    const contacts = {};
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
        csvtojson({noheader:false})
            .fromString(event.target.result)
            .on('json',(jsonObj)=>{ 
                contacts[jsonObj["Email Address"]] = jsonObj;
                //console.log(jsonObj) 
            })
            .on('done',()=>{
                return {
                    type: LOAD_FILE,
                    payload: contacts
                };
            })
    };
    reader.readAsText(file);
    return {
        type: LOAD_FILE,
        payload: ""
    };    
}
