namespace AngularJS.DAL.Core
{
    using System.Data.SqlClient;
    using AngularJS.Domain;
    using System.Collections.Generic;

    public interface IDimProductRepository
    {       
        List<ProductionProduct> GetAllDimProducts();              
    }
}
