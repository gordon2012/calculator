// onclick for all buttons, calls hasClass to determine type
// TODO: refactor other clicks to use this one
//
$(".btn").on("click", function()
{
  // var classes = $(this).attr('class').split(' ');
  // var test = function(val)
  // {
  //   return classes.indexOf(val) > -1 ? classes[classes.indexOf(val)] : undefined;
  // };

  // if(test('clear'))
  // {
  //   onClear();
  // }
  // if(test('clear-all'))
  // {
  //   clearAll();
  // }

  if($(this).hasClass('clear'))
  {
    onClear();
  }
  if($(this).hasClass('clear-all'))
  {
    clearAll();
  }


});


$(".num").on("click", function()
{
  if($(this).hasClass("answered"))
  {
    clearAll();
    $(".btn").removeClass("answered");
  }

  onNum($(this).html());
});

$(".op").on("click", function()
{
  onOp($(this).html());
});

$(".equals").on("click", function()
{
  equals();
});




function onClear()
{
  $("#calc-cur").html("");
}

function clearAll()
{
  onClear();
  $("#calc-acc").html("");
}


function onNum(num)
{

  /*$(this).addClass("answered");*/
 /* hide(this);*/



  /*if($(this).hasClass("answered"))
  {
    clearAll();
    $(".btn-success").removeClass("answered");
  }*/


  $("#calc-cur").html($("#calc-cur").html() + num);
}

function onOp(op)
{
  var num = $("#calc-cur").html();
  /*$("#calc-acc").html($("#calc-acc").html() + " " + num + " " + op);*/
  $("#calc-acc").html($("#calc-acc").html() + num + op);
  onClear();
  /*data.push(num);
  data.push(op);
  updateData();*/
}

function equals()
{
  onOp("");

  var expr = $("#calc-acc").html();
  var ans = eval(expr);

  $("#calc-acc").html(expr + "=" + ans);
  $("#calc-cur").html(ans);

  $(".btn").addClass("answered");
  //console.log("+ANS");

}
