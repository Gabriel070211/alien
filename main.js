

function startClassification () {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nolbTcNIS/model.json',modelReady);

}

function modelReady () {
    classifier.classify(gotResults); 
}

function gotResults (error,results) {
    if (error) {
        console.error(error);
        
    }
    else  {
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Posso ouvir: "+ results[0].label;
        document.getElementById("result_confidence").innerHTML="Posso ouvir: "+ (results[0].confidence *100).toFixed()+"%";
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";

        img1=document.getElementById("alien1");
        img2=document.getElementById("alien2");
        img3=document.getElementById("alien3");
        img4=document.getElementById("alien4");

        resultado=results[0].label;
        
        if (resultado=="palmas") {
          img1.src="aliens-01.gif"
          img2.src="aliens-02.png"
          img3.src="aliens-03.png"
          img4.src="aliens-04.png"
        }

        else if (resultado=="risada") {
            img2.src="aliens-02.gif"
            img1.src="aliens-01.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
          }

          else if (resultado=="estalos") {
            img3.src="aliens-03.gif"
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img4.src="aliens-04.png"
          }

          else   {
            img4.src="aliens-04.gif"
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
          }


    } 
}

