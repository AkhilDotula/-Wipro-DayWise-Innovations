// GreetingControllerTests.cs
using DemoApi.Controllers;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace DemoApi.Tests
{
    public class GreetingControllerTests
    {
        [Fact]
        public void GetGreeting_ReturnsOkResult_WithGreetingMessage()
        {
            // Arrange
            var controller = new GreetingController();

            // Act
            var result = controller.GetGreeting() as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Hello, World!", ((dynamic)result.Value).message);
        }
    }
}