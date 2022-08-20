class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    search() {
        const keyword = this.queryStr.data? {
            product_name: {
                $regex: this.queryStr.data,
                $options: "i"
            }
        } : {}

        this.query = this.query.find({ ...keyword });
        return this;
    }
}

module.exports = APIFeatures;