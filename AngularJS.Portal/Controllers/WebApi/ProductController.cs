namespace AngularJS.Portal.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Web.Http;
    using AngularJS.DAL.Core;
    using AngularJS.DAL;
    using AngularJS.Domain;
    using Ninject.Activation;
    [Authorize]
    public class ProductController : ApiController
    {  
        IDimProductRepository productRepository;

        public ProductController(IDimProductRepository productRepository)
        {
            this.productRepository = productRepository;
        }
        public IEnumerable<ProductionProduct> Get()
        {
            var resultData = productRepository.GetAllDimProducts();
            return resultData;
      
       }
   
       // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
