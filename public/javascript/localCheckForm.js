$(document).ready(initCheckForm);

function initCheckForm() {
  $('input').attr('onchange', 'checkForm()');
}

function checkForm() {
    // alert('triggered');

    var name = $("input[name='nomJoueur']").val();
    var nbDisciplinesChecked = $("fieldset.disciplines").find('input:checked').length;
    var nbItemsChecked = $("fieldset.equipement").find('input:checked').length;

    // alert(name);
    // alert(nbDisciplinesChecked);
    // alert(nbItemsChecked);

    if(!(name == "" || name == undefined) && nbDisciplinesChecked == 5 && nbItemsChecked == 2){
      $(".button").attr('disabled',false);
      //alert('cest gud');
    }
    else{
      $(".button").attr('disabled',true);
      //alert('nope');
    }
}
