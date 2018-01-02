export class LoadingJson {
    loadJSON(callback) {
    const xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', '../../assets/brain82.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState === 4 && xobj.status === 200) {
        //  alert(xobj.responseText);
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }

}

