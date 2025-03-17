using Microsoft.AspNetCore.Mvc;
using AsyncDataAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AsyncDataAPI.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostsController : ControllerBase
    { 
        //For implementing pagination
        private static readonly List<Post> SampleData = Enumerable.Range(1, 100)
            .Select(i => new Post 
            { 
                Id = i, 
                Title = $"Post Title {i}", 
                Body = $"This is the body content for post {i}." 
            })
            .ToList();
        
        [HttpGet]
        public async Task<IActionResult> GetPosts(int page = 1, int pageSize = 10)
        {
            // For pagination, skip and take the appropriate records
            var paginatedData = SampleData.Skip((page - 1) * pageSize).Take(pageSize);
            return Ok(new
            {
                data = paginatedData,
                currentPage = page,
                totalPages = (int)Math.Ceiling(SampleData.Count / (double)pageSize)
            });
            // var posts = new List<Post>
            // {
            //     new Post { Id = 1, Title = "Async Programming", Body = "Understanding async/await in C#." },
            //     new Post { Id = 2, Title = "React Hooks", Body = "Using useEffect for API calls." },
            //     new Post { Id = 3, Title = "ASP.NET Core", Body = "Building Web APIs in .NET 6+." }
            // };

            // // Simulating an async operation
            // await Task.Delay(1000);
            // return Ok(posts);
        }
    }
}