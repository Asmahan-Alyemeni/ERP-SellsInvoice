// Copyright (c) 2023, Asmahan and contributors
// For license information, please see license.txt

frappe.ui.form.on('Students', {
	// refresh: function(frm) {

	// },


       from_date:funcation(frm){
          var from_date = frm.doc.from_date;
            var clc_date=frappe.datetime.add_days(from_date,365);
             
             frm.set_value("to_date",clc_date);
}

});
