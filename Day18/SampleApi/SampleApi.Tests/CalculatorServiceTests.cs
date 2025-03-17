// SampleApi.Tests/CalculatorServiceTests.cs
using SampleApi.Services;
using Xunit;

namespace SampleApi.Tests
{
    public class CalculatorServiceTests
    {
        private readonly CalculatorService _calculator;

        public CalculatorServiceTests()
        {
            _calculator = new CalculatorService();
        }

        [Fact]
        public void Add_WhenCalled_ReturnsSum()
        {
            // Arrange
            int a = 1;
            int b = 2;

            // Act
            var result = _calculator.Add(a, b);

            // Assert
            Assert.Equal(3, result);
        }

        [Fact]
        public void Subtract_WhenCalled_ReturnsDifference()
        {
            // Arrange
            int a = 5;
            int b = 3;

            // Act
            var result = _calculator.Subtract(a, b);

            // Assert
            Assert.Equal(2, result);
        }
    }
}