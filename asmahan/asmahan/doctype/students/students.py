# Copyright (c) 2023, Asmahan and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class Students(Document):
	def before_save(self):
               self.fullname=f'{self.firstname} {self.lastname or ""}'



