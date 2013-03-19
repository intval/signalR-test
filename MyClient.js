var send,
  _this = this;


$(function ()
{
    var hub = $.connection.chatHub;
    hub.connection.start();
    

    hub.client.receiveMessage = function (msg)
    {
        $('#chatContent').html($('#chatContent').html() + msg + "<br/>");
    }

    $('#msgInput').keypress(function (e) {
        if (e.which === 13)
        {
            console.log('send');
            hub.server.sendMessage($(this).val());
            $(this).val('');
            e.preventDefault();
        }
    }).focus();


});

