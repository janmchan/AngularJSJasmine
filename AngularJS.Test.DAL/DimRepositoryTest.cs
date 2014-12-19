
namespace AngularJS.Tests.DAL
{
    using System;
    using System.Data.SqlClient;
    using System.Data;
    using System.Collections.Generic;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using Rhino.Mocks;
    using AngularJS.DAL.Core;
    using AngularJS.DAL;
    using AngularJS.Domain;
    [TestClass]
    public class DimRepositoryTest
    {

        DataTable TestData;

        [TestInitialize]
        public  void Initialize()
        {

            TestData = new DataTable();
            TestData.Columns.Add(new DataColumn("ProductId", typeof(int)));
            TestData.Columns.Add(new DataColumn("ProductNumber"));
            TestData.Columns.Add(new DataColumn("Name"));
            var testRow = TestData.NewRow();
            testRow[0] = 1234;
            testRow[1] = "BK-M38S-46";
            testRow[2] = "Mountain-400-W Silver, 46";
            TestData.Rows.Add(testRow);

        }

        [TestMethod]
        public void GetAllDimProducts_ReturnsResults()
        {
            
            //arrange
            var MockBuilder = MockRepository.GenerateMock<IDataBuilder>();
            
            SqlCommand command = 
                new SqlCommand(Procedure.Product_GetProducts.ToString());
            
            //1. Checks that the command type is a stored procedure
            //2. Checks that the parameter @MakeFlag was passed
            //3. Returns a valid retult (Test Data)
            MockBuilder.Expect(m => m.GetData(Arg<SqlCommand>
                .Matches(param => param.CommandType == CommandType.StoredProcedure
                    && param.Parameters.Contains("@MakeFlag"))))
                .Return(TestData);
            
            //act
            var productsRepository = new DimProductsRepository(MockBuilder);
            var results = productsRepository.GetAllDimProducts();
            
            //assert
            MockBuilder.VerifyAllExpectations();
        
        }
    }
}
