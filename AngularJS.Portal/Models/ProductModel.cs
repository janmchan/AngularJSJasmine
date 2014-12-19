namespace AngularJS.Portal
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using AngularJS.Domain;
    [Serializable]
    public class ProductModel
    {
        public ProductModel()
        {

        }
        public ProductModel(ProductionProduct Product)
        {
            this.ProductId = Product.ProductId;
            this.ProductNumber = Product.ProductNumber;
            this.Name = Product.Name;
        }
        public int ProductId { get; set; }
        public string ProductNumber { get; set; }
        public string Name { get; set; }
    }
}