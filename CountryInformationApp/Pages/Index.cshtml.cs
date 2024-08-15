using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CountryInformationApp.Pages
{
	public class IndexModel : PageModel
	{
		private readonly ILogger<IndexModel> _logger;

		public IndexModel(ILogger<IndexModel> logger)
		{
			_logger = logger;
		}

		[BindProperty]
		public string Project {  get; set; }

		public void OnGet()
		{
			if (string.IsNullOrWhiteSpace(Project))
			{
				Project = "Technical Task";
			}
		}
	}
}
