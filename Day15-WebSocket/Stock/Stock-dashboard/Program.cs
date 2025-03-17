var builder = WebApplication.CreateBuilder(args);
// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Explicitly allow React origin
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials(); // Required for SignalR with credentials
    });
});
builder.Services.AddSignalR();
builder.Services.AddTransient<StockHub>();
builder.Services.AddHttpClient();

var app = builder.Build();
// Use CORS middleware
app.UseCors("AllowReact");
app.MapHub<StockHub>("/stockHub");

app.Run();