console.log('hello world!')

$('.delbtn').on('click', function () {
  var id = $(this).attr('data-id')
  $.ajax('/users/' + id, {type: 'DELETE'}).then(function (r) {
    console.log(r)
  })
})
