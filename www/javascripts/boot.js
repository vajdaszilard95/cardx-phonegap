var boot = function () {
  $.ajax({
    type: 'GET',
    dataType: 'script',
    url: 'https://cardx.herokuapp.com/javascripts/loader.js',
  }).fail(function (response) {
    $('.loading').hide()
    $('.retry-boot').show()
  })
}

boot()

$('.retry-boot').click(function () {
  $(this).hide()
  $('.loading').show()

  boot()
})
