var i=0;
var correctcounter=0;
generate(0);
function generate(index)
{
    document.getElementById("question").innerHTML=jsonData[index].q;
    document.getElementById("optt1").innerHTML=jsonData[index].opt1;
    document.getElementById("optt2").innerHTML=jsonData[index].opt2;
    document.getElementById("optt3").innerHTML=jsonData[index].opt3;
    document.getElementById("optt4").innerHTML=jsonData[index].opt4;
}


function checkAnswer()
{
    if(document.getElementById("opt1").checked && jsonData[i].opt1==jsonData[i].answer)
    {
        correctcounter++;

}
if(document.getElementById("opt2").checked && jsonData[i].opt2==jsonData[i].answer)
{
    correctcounter++;
}
if(document.getElementById("opt3").checked && jsonData[i].opt3==jsonData[i].answer)
{
    correctcounter++;
}
if(document.getElementById("opt4").checked && jsonData[i].opt4==jsonData[i].answer)
{
    correctcounter++;
}
i++;
if(jsonData.length-1< i)
{
    document.write("<body style='background-image:url(sssss.jpg); text-align:centre >");
    document.write("<div class='container'>");
    document.write("<p style='color:yellow;margin-left:250px;margin-top:200px;font-size:50px;text-align:centre;float:left;font-size:18pt;text-align:centre;background-color:black;left-margin:500px'>   your score is   "+correctcounter+ "");
    document.write("</div>");
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("</body");

    document.write("<p style='color:yellow;margin-left:250px;margin-top:200px;font-size:50px;text-align:centre;float:left;font-size:18pt;text-align:centre;background-color:black;left-margin:500px'>");
    
    document.write("<a href='file:///E:/online%20test%20application/quiz/preview.html'>Preview</a>");

    document.write("</body>")


}
generate(i);

}