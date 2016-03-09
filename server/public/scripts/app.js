$(document).ready(function(){
    $(".scott").on("click", scottBtn);
    $(".biz").on("click", bizBtn);
});

setInterval(scottBtn, 1000);

function scottBtn(){
  console.log("Button click works Scott");
  $.ajax({
      type: "GET",
      url: "/data/scott",
      success: function(data){
        console.log(data);
      }
  });
}

function bizBtn(){
  $.ajax({
      type: "GET",
      url: "/data/biz",
      success: function(data){
        console.log(data);
      }
  });
}
