using Microsoft.AspNetCore.Mvc;

namespace DemoApi.Controllers{
    [ApiController]
    [Route("controller")]
    public class GreetingController : ControllerBase{
        [HttpGet]
        public IActionResult GetGreeting(){
            return Ok(new {Mesage = "Hello, world"});
        }
    }
}