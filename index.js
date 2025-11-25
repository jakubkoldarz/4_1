"use strict";

const express = require("express");
const app = express();

app.get("/math/circle/:r", (req, res) => {
    req.params.r = parseFloat(req.params.r);
    const radius = req.params.r;
    const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    const circumference = (2 * Math.PI * radius).toFixed(2);
    res.json({ area, circumference });
});

app.get("/math/rectangle/:w/:h", (req, res) => {
    req.params.w = parseFloat(req.params.w);
    req.params.h = parseFloat(req.params.h);
    const width = req.params.w;
    const height = req.params.h;
    const area = (width * height).toFixed(2);
    const perimeter = (2 * (width + height)).toFixed(2);
    res.json({ area, perimeter });
});

app.get("/math/power/:base/:exponent", (req, res) => {
    const base = parseFloat(req.params.base);
    const exponent = parseFloat(req.params.exponent);

    if (isNaN(base) || isNaN(exponent)) {
        return res.status(400).json({ error: "Invalid input" });
    }

    const result = Math.pow(base, exponent);

    if (req.query.root === "true") {
        const root = Math.sqrt(base);
        if (isNaN(root)) {
            return res.status(400).json({ error: "Invalid input for root" });
        }
        res.json({ result, root });
    } else {
        res.json({ result });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
