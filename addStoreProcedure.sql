CREATE PROCEDURE [dbo].[addOrderDetailsByOrderId]
    @orderId INT
	AS
	BEGIN
	INSERT INTO OrdersDetail
	SELECT @orderId as orderId, plantId, COUNT(*) AS quantity
	FROM Cart
	WHERE customerId IN (SELECT customerId FROM ORDERS where id = @orderId)
	GROUP BY customerId, plantId
	END