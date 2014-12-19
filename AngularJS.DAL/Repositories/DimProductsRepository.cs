namespace AngularJS.DAL
{
    using AngularJS.DAL.Core;
    using AngularJS.Domain;
    using System.Data.SqlClient;
    using System.Data;
    using  System.Collections.Generic;
    public class DimProductsRepository: IDimProductRepository
    {
        IDataBuilder SQLDataBuilder_Helper;
        public DimProductsRepository(IDataBuilder SQLDataBuilder_Helper)
        {
            this.SQLDataBuilder_Helper = SQLDataBuilder_Helper;
        }

        public List<ProductionProduct> GetAllDimProducts()
        {
           
            SqlCommand command = new SqlCommand()
            {
                CommandText = Schema.Production.ToString() + "." + Procedure.Product_GetProducts.ToString(),
                CommandType = CommandType.StoredProcedure
            };
            command.Parameters.Add(new SqlParameter("@MakeFlag", true));
            

            var results = this.SQLDataBuilder_Helper.GetData(command);
            var products = new List<ProductionProduct>();
            foreach(DataRow row in results.Rows)
            {
                products.Add(
                        new ProductionProduct()
                        {
                            ProductId = row.Field<int>("ProductId"),
                            ProductNumber = row.Field<string>("ProductNumber"),
                            Name = row.Field<string>("Name"),
                        }
                    );
            }
              
            return products;
            
            
        }
    }
}
