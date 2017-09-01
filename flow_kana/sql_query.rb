def count_of_products
	execute(<<-SQL)
		SELECT 
			vendors.name, COUNT(prodcuts. *) AS prodcut_count  
		FROM 
			vendors 
		JOIN
			prodcuts ON vendors.id = prodcuts.vendor_id
		ORDER BY
			COUNT(prodcuts.*) DESC 
	SQL
end 


