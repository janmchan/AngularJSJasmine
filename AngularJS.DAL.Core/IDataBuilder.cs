namespace AngularJS.DAL.Core
{
    using System.Data;
    using System.Data.SqlClient;
    public interface IDataBuilder
    {
        DataTable GetData(SqlCommand command);
       
    }
}
