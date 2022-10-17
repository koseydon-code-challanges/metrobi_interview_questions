import React, {useEffect, useState, useRef} from "react";

export default function Question6() {
    let achilleCanvas = useRef(null)
    let tortoiseCanvas = useRef(null)
    let pathCanvas = useRef(null)

    const [achillesSpeed, setAchillesSpeed] = useState(0.005)
    const [tortoiseSpeed, setTortoiseSpeed] = useState(0.005)
    const [headStart, setHeadStart] = useState(250)
    const [achilleAnimationId, setAchilleAnimationId] = useState(null)
    const [tortoiseAnimationId, setTortoiseAnimationId] = useState(null)

    let achillesCtx = null
    let tortoiseCtx = null
    let pathCtx = null

    let achilles = 0
    let tortoise = 0

    useEffect(() => {
        achillesCtx = achilleCanvas.current.getContext("2d");
        tortoiseCtx = tortoiseCanvas.current.getContext("2d");
    }, [achillesSpeed, tortoiseSpeed, headStart, tortoiseAnimationId, achilleAnimationId])

    useEffect(() => {
        pathCtx = pathCanvas.current.getContext("2d");

        //Path
        pathCtx.lineWidth = 1;
        pathCtx.beginPath();
        pathCtx.arc(175, 175, 100, 0, 2 * Math.PI);
        pathCtx.stroke();
    }, [])

    function runner(ctx, x, y, radius, offset, segments, size) {
        let pi2 = 2 * Math.PI,
            segs = pi2 / segments,
            len = segs * size,
            i = 0,
            ax, ay;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(offset);
        ctx.translate(-x, -y);

        for (; i < pi2; i += segs) {
            ax = x + radius * Math.cos(i);
            ay = y + radius * Math.sin(i);
            ctx.moveTo(ax, ay);
            ctx.arc(x, y, radius, i, i + len);
        }

        ctx.restore();
    }

    function animateAchilles() {
        achillesCtx.lineWidth = 10;
        achillesCtx.strokeStyle = "green";

        achillesCtx.clearRect(0, 0, 350, 350)
        achillesCtx.beginPath();
        runner(achillesCtx, 175, 175, 100, achilles % 2 * Math.PI, 1, 0.02)
        achillesCtx.stroke();

        achilles += achillesSpeed;

        setAchilleAnimationId(requestAnimationFrame(animateAchilles))
    }

    function animateTortoise() {
        tortoiseCtx.lineWidth = 10;
        tortoiseCtx.strokeStyle = "red";

        tortoiseCtx.clearRect(0, 0, 350, 350)
        tortoiseCtx.beginPath();
        runner(tortoiseCtx, 175, 175, 100, tortoise % 2 * Math.PI, 1, 0.02)
        tortoiseCtx.stroke();

        tortoise += tortoiseSpeed;

        setTortoiseAnimationId(requestAnimationFrame(animateTortoise))
    }

    function animate() {
        tortoise = 0
        achilles = 0
        achillesCtx.clearRect(0, 0, 350, 350)
        tortoiseCtx.clearRect(0, 0, 350, 350)
        cancelAnimationFrame(tortoiseAnimationId)
        cancelAnimationFrame(achilleAnimationId)
        animateTortoise()
        setTimeout(animateAchilles, headStart)
    }

    function stop() {
        achillesCtx.clearRect(0, 0, 350, 350)
        tortoiseCtx.clearRect(0, 0, 350, 350)
        cancelAnimationFrame(tortoiseAnimationId)
        cancelAnimationFrame(achilleAnimationId)
    }

    return (
        <div className="bg-gray-400 h-[600px] flex items-center justify-center space-x-2">
            <div className="relative w-[350px] h-[350px]">
                <canvas className="border-2 absolute" ref={pathCanvas} width="350" height="350"></canvas>
                <canvas className="border-2 absolute" ref={achilleCanvas} width="350" height="350"></canvas>
                <canvas className="border-2 absolute" ref={tortoiseCanvas} width="350" height="350"></canvas>
            </div>
            <div className="flex flex-col space-y-2">
                <span>
                    Headstart (ms):
                </span>
                <input className="border"
                       type="number"
                       defaultValue={headStart}
                       placeholder="Headstart (ms)"
                       onChange={(event) => {
                           setHeadStart(event.target.value ? parseInt(event.target.value) : 250)
                       }}/>
                <span>
                    Achille Speed:
                </span>
                <input className="border"
                       type="number"
                       defaultValue={achillesSpeed * 1000}
                       placeholder="Achille Speed"
                       onChange={(event) => {
                           setAchillesSpeed(event.target.value ? parseInt(event.target.value) / 1000 : 0.005)
                       }}/>
                <span>
                    Tortoise Speed:
                </span>
                <input className="border"
                       type="number"
                       defaultValue={tortoiseSpeed * 1000}
                       placeholder="Tortoise Speed"
                       onChange={(event) => {
                           setTortoiseSpeed(parseInt(event.target.value) / 1000)
                       }}/>
                <button onClick={() => animate()} className="bg-gray-500 border">Test</button>
                <button onClick={() => stop()} className="bg-gray-500 border">Stop</button>
            </div>
        </div>
    )
}