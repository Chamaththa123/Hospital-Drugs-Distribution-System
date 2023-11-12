import express from "express";
import Traffic from "../models/traffic.js"


const router = express.Router();


router.post('/traffic/add', async (req, res) => {

    const bus = req.body.bus;
    const route = req.body.route;
    const segment = req.body.segment;
    const time = req.body.time;
    const type = req.body.type;
    const description = req.body.description;
    const status = req.body.status;


    const newTraffic = new Traffic({
        bus, route, segment, time, type, description,status
    })

    newTraffic.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err.message
            });
        }
        return res.status(200).json({
            success: "Traffic details added successfully"
        });
    });

});



router.route("/traffic").get((req, res) => {
    Traffic.find().then((traffic) => {
        res.json(traffic)
    }).catch((err) => {
        console.log(err);
    })
})



router.get('/traffic/:id', (req, res) => {
    let trafficId = req.params.id;

    Traffic.findById(trafficId, (err, traffic) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }
        return res.status(200).json({
            success: true,
            traffic
        });
    });
});

router.delete("/traffic/delete/:id", async (req, res) => {
    let result = await Traffic.deleteOne({ _id: req.params.id })
    res.send(result)
});

router.put('/traffic/update/:id', (req, res) => {
    Traffic.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, item) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "updated successfully"
            });
        }
    );
});

export default router;