namespace AngularJS.DAL
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using AngularJS.DAL.Core;
    public class MessageRepository: IMessageService
    {
        public string GetWelcomeMessage()
        {
             return "Welcome to Ninject MVC4 Example";
        }
    }
}
