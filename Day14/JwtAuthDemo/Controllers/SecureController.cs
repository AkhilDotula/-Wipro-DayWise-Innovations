using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/secure")]
public class SecureController : ControllerBase
{
    [Authorize]
    [HttpGet("protected")]
    public IActionResult GetProtectedData()
    {
        var username = User.Identity.Name;
        return Ok(new { Message = "This is a protected route", User = username });
    }
}