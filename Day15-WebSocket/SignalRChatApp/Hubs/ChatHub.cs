// This hub allows sending messages to all connected clients
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

public class ChatHub : Hub{
    public async Task SendMessage(string user, string message){
        await Clients.All.SendAsync("receiveMessage", user, message);
    }
}