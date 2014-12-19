namespace AngularJS.DAL
{
        using System.Data.SqlClient;
        using System.Data;
        using AngularJS.DAL.Core;
       internal class DataResult
        {
            public int ReturnValue { get; set; }

            public string ErrorMessage { get; set; }
        }

        public enum Schema
        {
            Production
        }

        public enum Procedure
        {
           Product_GetProducts 
        }


        public class SqlDataBuilder: IDataBuilder
        {
            string connectionString;
            public SqlDataBuilder(string connectionString)
            {
                this.connectionString = connectionString;
            }
           
            public DataTable GetData(SqlCommand command)
            {
                var connection = new SqlConnection(connectionString);

                connection.Open();
                command.Connection = connection;

                var table = new DataTable();
                var adapter = new SqlDataAdapter(command);
                adapter.Fill(table);

                connection.Close();

                return table;   
                
            }

            internal DataSet GetDataSet(SqlCommand command)
            {
                var connection = new SqlConnection(connectionString);

                connection.Open();
                command.Connection = connection;

                var set = new DataSet();
                var adapter = new SqlDataAdapter(command);
                adapter.Fill(set);

                connection.Close();

                return set;
            }

            internal int CreateAndGetId(SqlCommand command)
            {
                var connection = new SqlConnection(connectionString);
                connection.Open();
                command.Connection = connection;

                object ret = command.ExecuteScalar();
                int id = 0;
                if (ret != null && ret is int)
                    id = (int)ret;

                connection.Close();

                return id;
            }

            internal long CreateAndGetLongId(SqlCommand command)
            {
                var connection = new SqlConnection(connectionString);
                connection.Open();
                command.Connection = connection;

                object ret = command.ExecuteScalar();
                long id = 0;
                if (ret != null && ret is decimal)
                    id = (long)(decimal)ret;

                connection.Close();

                return id;
            }

            internal DataResult CreateAndGetReturnValue(SqlCommand command)
            {
                var returnParameter = command.Parameters.Add("return", SqlDbType.Int);
                returnParameter.Direction = ParameterDirection.ReturnValue;

                var connection = new SqlConnection(connectionString);
                connection.Open();
                command.Connection = connection;

                var adapter = new SqlDataAdapter(command);
                var table = new DataTable();
                adapter.Fill(table);

                var value = 0;
                if (returnParameter.Value != null)
                    value = (int)returnParameter.Value;

                connection.Close();

                return new DataResult()
                {
                    ReturnValue = value,
                    ErrorMessage = table.Rows.Count > 0 && table.Columns.Count > 1
                        ? table.Rows[0].Field<string>("ErrorMessage")
                        : ""
                };
            }
        }

}
