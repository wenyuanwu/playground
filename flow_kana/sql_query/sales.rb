require 'singleton'
require 'sqlite3'

#use Singleton module to allow only one SalesDatabase object get instantiated. 
# There should only be a single connection to the database

class SalesDatabase < SQLite3::Database	
	include Singleton 

	def initialize
		super('sales.db')
		self.results_as_hash = true
		self.type_translation = true 
	end
end 

class Vendors
	def order_by_products
		results = SalesDatabase.instance.execute(<<-SQL)
		  SELECT 
		    vendors.name,
		    CASE WHEN product_count.count IS NULL THEN 0
		    ELSE product_count.count END AS prodcut_count
		  FROM 
	        vendors 
		  LEFT JOIN
		   (
		   	 SELECT
		   	 	vendor_id,
		   	 	COUNT(*) AS count
		   	 FROM products
		   	 GROUP BY vendor_id
		   ) AS product_count
		  ON vendors.id = product_count.vendor_id
		  ORDER BY product_count.count DESC
		SQL
		results
	end 
end 

v = Vendors.new
puts v.order_by_products