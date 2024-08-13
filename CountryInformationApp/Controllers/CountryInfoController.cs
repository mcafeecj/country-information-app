using Microsoft.AspNetCore.Mvc;

namespace CountryInformationApp.Controllers
{
    public class CountryInfoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
