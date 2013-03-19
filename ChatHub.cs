using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace SignalR
{
    public class ChatHub : Hub
    {
        public void sendMessage(string msg)
        {
            Clients.All.receiveMessage(msg);
        }
    }
}