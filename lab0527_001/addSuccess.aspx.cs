using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace lab0527_001 {
    public partial class addSuccess : System.Web.UI.Page {

        guessNumDBEntities db = new guessNumDBEntities();

        

        protected void Page_Load(object sender, EventArgs e) {
            var query = from o in db.Scores
                        select o;
            Score cas = new Score() {
                name = Request["name"].ToString(),
                costTime = Request["costTime"].ToString()
            };
            db.Scores.Add(cas);

            db.SaveChanges();
            
        }
    }
}