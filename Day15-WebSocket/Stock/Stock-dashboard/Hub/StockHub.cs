using Microsoft.AspNetCore.SignalR;
using System;
using System.Net.Http;
using System.Threading.Tasks;

public class StockHub : Hub
{
    private readonly IHttpClientFactory _httpClientFactory;

    public StockHub(IHttpClientFactory httpClientFactory)
    {
        _httpClientFactory = httpClientFactory;
    }

    // Fetches the AAPL stock quote from Alpha Vantage.
    public async Task FetchStocks()
    {
        try
        {
            string apiUrl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AMZN&apikey=GL0L7SKVMP42T08E";
            var client = _httpClientFactory.CreateClient();
            var response = await client.GetAsync(apiUrl);

            if (response.IsSuccessStatusCode)
            {
                var json = await response.Content.ReadAsStringAsync();
                // Broadcast stock data to all connected clients
                await Clients.All.SendAsync("ReceiveStockUpdate", "AAPL", json);
            }
            else
            {
                string errorMsg = $"Error fetching stock data. Status code: {response.StatusCode}";
                await Clients.All.SendAsync("ReceiveStockUpdate", "AAPL", errorMsg);
            }
        }
        catch (Exception ex)
        {
            string errorMsg = $"Exception: {ex.Message}";
            await Clients.All.SendAsync("ReceiveStockUpdate", "AAPL", errorMsg);
        }
    }
}
