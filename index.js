import express from "express";
import cors from "cors";
import request from "request";
const app = express();

app.use(cors());

app.get("/:goods_id", (req, res) =>
    req
        .pipe(
            request(
                `https://buff.163.com/api/market/goods/sell_order?game=csgo&goods_id=${req.params.goods_id}`
            )
        )
        .pipe(res)
);

app.listen(8459);

export default app;
