function p_change(){
    $("#btn1").click(function(){
   $("#div1").addClass("d-none")
   $("#div2").removeClass("d-none")
   $("#p2").html("<p>Question 2 from 10</p>")
   var ans1=$("#textbox1").val()
   localStorage.setItem("ans1",ans1)
   console.log("Ans 1 : "+localStorage.getItem("ans1"));
   $("#div1").addClass("d-none")
    $("#div2").removeClass("d-none")
    $("#p").html("<p>Question 1 from 10</p>")
})
$("#btn2").click(function(){
    var ans2=$("#textbox2").val()
    localStorage.setItem("ans2",ans2)
    console.log("Ans 2 : "+localStorage.getItem("ans2"));
    $("#div2").addClass("d-none")
    $("#div3").removeClass("d-none")
    $("#p3").html("<p>Question 3 from 10</p>")
 })
 $("#btn3").click(function(){
    var ans3=$("#textbox3").val()
    localStorage.setItem("ans3",ans3)
    console.log("Ans 3 : "+localStorage.getItem("ans3"));
    $("#div3").addClass("d-none")
    $("#div4").removeClass("d-none")
    $("#p4").html("<p>Question 4 from 10</p>")
 })
 $("#btn4").click(function(){
    var ans4=$("#textbox4").val()
    localStorage.setItem("ans4",ans4)
    console.log("Ans 4 : "+localStorage.getItem("ans4"));
    $("#div4").addClass("d-none")
    $("#div5").removeClass("d-none")
    $("#p5").html("<p>Question 5 from 10</p>")
 })
 $("#btn5").click(function(){
    var ans5=$("#textbox5").val()
    localStorage.setItem("ans5",ans5)
    console.log("Ans 5 : "+localStorage.getItem("ans5"));
    $("#div5").addClass("d-none")
    $("#div6").removeClass("d-none")
    $("#p6").html("<p>Question 6 from 10</p>")
 })
 $("#btn6").click(function(){
    var ans6=$("#textbox6").val()
    localStorage.setItem("ans6",ans6)
    console.log("Ans 6 : "+localStorage.getItem("ans6"));
    $("#div6").addClass("d-none")
    $("#div7").removeClass("d-none")
    $("#p7").html("<p>Question 7 from 10</p>")
 })
 $("#btn7").click(function(){
    var ans7=$("#textbox7").val()
    localStorage.setItem("ans7",ans7)
    console.log("Ans 7 : "+localStorage.getItem("ans7"));
    $("#div7").addClass("d-none")
    $("#div8").removeClass("d-none")
    $("#p8").html("<p>Question 8 from 10</p>")
 })
 $("#btn8").click(function(){
    var ans8=$("#textbox8").val()
    localStorage.setItem("ans8",ans8)
    console.log("Ans 8 : "+localStorage.getItem("ans8"));
    $("#div8").addClass("d-none")
    $("#div9").removeClass("d-none")
    $("#p9").html("<p>Question 9 from 10</p>")
 })
 $("#btn9").click(function(){
    var ans9=$("#textbox9").val()
    localStorage.setItem("ans9",ans9)
    console.log("Ans 9 : "+localStorage.getItem("ans9"));
    $("#div9").addClass("d-none")
    $("#div10").removeClass("d-none")
    $("#p10").html("<p>Question 10 from 10</p>")
 })
 $("#btn10").click(function(){
    var ans10=$("#textbox10").val()
    localStorage.setItem("ans10",ans10)
    console.log("Ans 10 : "+localStorage.getItem("ans10"));
    location.href="final.html"
 })
}
function ans(){
    $("#ans1").html("Ans 1 : "+localStorage.getItem("ans1"))
    $("#ans2").html("Ans 2 : "+localStorage.getItem("ans2"))
    $("#ans3").html("Ans 3 : "+localStorage.getItem("ans3"))
    $("#ans4").html("Ans 4 : "+localStorage.getItem("ans4"))
    $("#ans5").html("Ans 5 : "+localStorage.getItem("ans5"))
    $("#ans6").html("Ans 6 : "+localStorage.getItem("ans6"))
    $("#ans7").html("Ans 7 : "+localStorage.getItem("ans7"))
    $("#ans8").html("Ans 8 : "+localStorage.getItem("ans8"))
    $("#ans9").html("Ans 9 : "+localStorage.getItem("ans9"))
    $("#ans10").html("Ans 10 : "+localStorage.getItem("ans10"))
}