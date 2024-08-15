class Shopee extends Ecommerce {
    /**
     * Lấy access token
     */
    getAccessToken(param) {
        super.getAccessToken(param);

        if(param.code && param.shopID) {
            
        }
    }

    /**
     * Làm mới token
     */
    refreshToken(param) {
        if(typeof param != AccessTokenParam) {
            console.error("Lỗi truyền sai param");
        }
    }

    /**
     * Lấy về thông tin Shop
     */
    getShop() {

    }

    /**
     * Lấy thông tin hàng hoá
     */
    getProduct(param) {

    }

    /**
     * Lấy danh sách hàng hoá
     */
    getProducts(param) {

    }

    /**
     * Lấy thông tin  1 đơn hàng
     */
    getOrder(param) {

    }

    /**
     * Lấy thông tin nhiều đơn hàng
     */
    getOrders(param) {

    }

    /**
     * Lấy thông tin chi tiết 1 đơn hàng
     */
    getOrderDetail(param) {

    }

    /**
     * Lấy thông tin chi tiết nhiều đơn hàng
     */
    getOrderDetails(param) {

    }

    /**
     * Lấy ký sổ (riêng Shopee)
     */
    getEscrowDetail(param) {

    }
}