namespace AngularJS.Tests.Portal.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net.Http;
    using System.Text;
    using System.Web.Http;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using AngularJS.Portal;
    using AngularJS.DAL.Core;
    using AngularJS.Domain;
    using System.Data.SqlClient; 
    using AngularJS.Portal.Controllers;
    using Rhino.Mocks;
    using System.Data;
    [TestClass]
    public class ProductControllerTest
    {
        List<ProductionProduct> TestData;
        [TestInitialize]
        public void Initialize()
        {

            TestData = new List<ProductionProduct>();
            TestData.Add(new ProductionProduct { ProductId = 1234, ProductNumber = "BK-M38S-46", Name = "Mountain-400-W Silver, 46" });
        }
        [TestMethod]
        public void ProductController_Get()
        {
            //arrange
            var MockBuilder = MockRepository.GenerateMock<IDimProductRepository>();
            
            List<ProductionProduct> SuccessfulResults = new List<ProductionProduct>();

            MockBuilder.Expect(m => m.GetAllDimProducts()).Return(TestData);


            var config = new HttpConfiguration();
            var request = new HttpRequestMessage(HttpMethod.Get, "http://localhost/api/product");
            var productsController = new ProductController(MockBuilder)
            {
                 Request = request
            };
            productsController.Request.SetConfiguration(config);

            //act
            var results = productsController.Get();

            //assert
            MockBuilder.VerifyAllExpectations();
        }

      
    }
}
