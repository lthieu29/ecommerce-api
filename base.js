class Ecommerce {
    /**
     * Lấy access token
     */
    getAccessToken(param) {
        if(typeof param != AccessTokenParam) {
            console.error("Lỗi truyền sai param");
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

    /**
     * Call dữ liệu sang sàn thương mại điện tử
     */
    callAPIEcommerce(url, method = 'GET', query = {}, headers = {}, body = null) {
        const keys = Object.keys(query);
        keys.forEach(key => {
            if(url.includes("?")) {
                url = `${url}&${key}=${query[key]}}`;
            } else {
                url = `${url}?${key}=${query[key]}`;
            }
        })
        
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...headers // Kết hợp các header tùy chỉnh vào
            }
        };
    
        // Nếu là phương thức POST, thêm body vào options
        if (method === 'POST' && body) {
            options.body = JSON.stringify(body);
        }
    
        // Gọi API
        return fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    showData(response);
                }
                return response.json(); // chuyển đổi dữ liệu response thành JSON
            })
            .then(data => {
                showData(data);
            })
            .catch(error => {
                showData(error);
            });
    }
}