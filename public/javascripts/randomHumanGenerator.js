$(function () {

  var $peepsContent = $('#peeps tbody');
  var $error = $('#error');
  $error.hide();
  var $errorContent = $('#error-content');

  $('#generate').on('click', function (event) {
    $.ajax({
      url: '/users',
      method: "GET"
    }).done(function (data) {

      console.log(data);
      $peepsContent.empty();

      data.forEach(function(elem) {

        var $row = $('<tr>');
        $row.append($('<td>' + elem.fullName + '</td>'));
        $row.append($('<td>' + elem.age + '</td>'));
        $row.append($('<td>' + elem.sex + '</td>'));
        $row.append($('<td>' + elem.location + '</td>'));
        $row.append($('<td>' + elem.twitterHandle + '</td>'));

        $peepsContent.append($row);
      });

      // make sure the error is hidden now that we succeeded
      $error.hide();
    }).fail(function (jqXHR, textStatus) {
      $error.show();
      $errorContent.html("&nbsp;Request failed: " + textStatus);
    });
  });
});