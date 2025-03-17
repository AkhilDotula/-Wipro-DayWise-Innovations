using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly TokenService _tokenService;

    public AuthController(TokenService tokenService)
    {
        _tokenService = tokenService;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginModel model)
    {
        if (model.Username == "admin" && model.Password == "password")
        {
            var token = _tokenService.GenerateToken(model.Username);
            return Ok(new { Token = token });
        }

        return Unauthorized("Invalid credentials");
    }
}

public class LoginModel
{
    public string Username { get; set; }
    public string Password { get; set; }
}

//Accepts username and password.
//Returns a JWT token if credentials are valid.
//Rejects unauthorized users.