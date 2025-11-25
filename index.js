"use strict";

const express = require("express");
const app = express();

app.get("/math/circle/:r", (req, res) => {
    req.params.r = parseFloat(req.params.r);
    const radius = req.params.r;
    const area = Math.PI * Math.pow(radius, 2);
    const circumference = 2 * Math.PI * radius;
    res.json({ area, circumference });
});

app.get("/math/rectangle/:w/:h", (req, res) => {
    req.params.w = parseFloat(req.params.w);
    req.params.h = parseFloat(req.params.h);
    const width = req.params.w;
    const height = req.params.h;
    const area = width * height;
    const perimeter = 2 * (width + height);
    res.json({ area, perimeter });
});

//TODO3

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
