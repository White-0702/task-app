
namespace backend.Models;

public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string PasswordHash { get; set; }

    // 將來關聯任務
    public List<TaskItem> Tasks { get; set; }
}

