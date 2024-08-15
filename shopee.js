class Shopee extends Ecommerce {
    constructor() {
        this.partnerID = localStorage.getItem("ShoppePartnerID");
        this.partnerSecret = localStorage.getItem("ShopeePartnerSecret");
        this.host = "https://partner.shopeemobile.com/";
    }

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
        const endpoint = localStorage.getItem("GetOrderDetails");

        if(!endpoint) {
            showData("Chưa gán dữ liệu localStorage");
            return;
        }

        if(param.AccessToken && param.ShopID && param.OrderSnList) {
            const timestamp = (int)(new Date().getTime() / 1000);
            const str = `${this.partnerID}${endpoint}${timestamp}${param.AccessToken}${param.ShopID}`;
            const sign = generateHmacSHA256Signature(this.partnerSecret, str);

            console.log("Sign: " + sign);
            console.log("TimeStamp: " + timestamp);

            this.callAPIEcommerce(`${this.host}${endpoint}`, 'GET', {
                partner_id: this.partnerID,
                timestamp: timestamp,
                access_token: param.AccessToken,
                shop_id: param.ShopID,
                sign: sign,
                order_sn_list: param.OrderSnList,
                request_order_status_pending: true,
                response_optional_fields: "buy_user_id,buyer_username,estimated_shipping_fee,recipient_address,actual_shipping_fee,goods_to_declare,note,note_update_time,item_list,pay_time,dropshipper,dropshipper_phone,split_up,buyer_cancel_reason,cancel_by,cancel_reason,actual_shipping_fee_confirmed,buyer_ccf_id,fulfillment_flag,pickup_done_time,package_list,shipping_carrier,Payment_method,total_amount,buyer_username,invoice_data,no_plastic_packing,order_chargeable_weight_gram,edt,region,currency,cod,pending_terms,order_status,message_to_seller,create_time,update_time,days_to_ship,ship_by_date,checkout_shipping_carrier,reverse_shipping_fee,prescription_check_status,update_time"
            })
        } else {
            showData("Kiểm tra lại tham số đầu vào, truyền thiếu gì đó");
        }
    }

    /**
     * Lấy ký sổ (riêng Shopee)
     */
    getEscrowDetail(param) {
        const endpoint = localStorage.getItem("GetEscrowDetail");

        if(!endpoint) {
            showData("Chưa gán dữ liệu localStorage");
            return;
        }

        if(param.AccessToken && param.ShopID && param.OrderSnList) {
            const timestamp = (int)(new Date().getTime() / 1000);
            const str = `${this.partnerID}${endpoint}${timestamp}${param.AccessToken}${param.ShopID}`;
            const sign = generateHmacSHA256Signature(this.partnerSecret, str);

            console.log("Sign: " + sign);
            console.log("TimeStamp: " + timestamp);

            this.callAPIEcommerce(`${this.host}${endpoint}`, 'POST', {
                partner_id: this.partnerID,
                timestamp: timestamp,
                access_token: param.AccessToken,
                shop_id: param.ShopID,
                sign: sign
            }, {}, {
                order_sn_list: param.OrderSnList.split(",")
            });
        } else {
            showData("Kiểm tra lại tham số đầu vào, truyền thiếu gì đó");
        }
    }

    generateHmacSHA256Signature(secret, message) {
        return CryptoJS.HmacSHA256(message, secret).toString(CryptoJS.enc.Hex);
    }
}