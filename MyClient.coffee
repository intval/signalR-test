$ ->
  hub = $.connection.chatHub
  hub.connection.start()
  hub.client.receiveMessage = (msg) ->
    $("#chatContent").html $("#chatContent").html() + msg + "<br/>"

  $("#msgInput").keypress((e) ->
    if e.which is 13
      console.log "send"
      hub.server.sendMessage $(this).val()
      $(this).val ""
      e.preventDefault()
  ).focus()