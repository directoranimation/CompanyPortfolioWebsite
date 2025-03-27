"use client";
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { gsap } from 'gsap';

const FluidAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const blobs = Array.from({ length: 10 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 300 + 200,
            color: ["#7743DB", "hsl(214, 45%, 85%)"][Math.floor(Math.random() * 2)]
        }));

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.globalCompositeOperation =  "source-over";
            blobs.forEach(blob => {
                const gradient = ctx.createRadialGradient(
                    blob.x, blob.y, blob.radius * 0.5,
                    blob.x, blob.y, blob.radius
                );
                gradient.addColorStop(0, blob.color);
                gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
                
                ctx.beginPath();
                ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            });
        }

        function animateBlobs() {
            anime({
                targets: blobs,
                x: (el, i) => Math.sin(i) * canvas.width * 0.4 + canvas.width / 2 + Math.random() * 50,
                y: (el, i) => Math.cos(i) * canvas.height * 0.4 + canvas.height / 2 + Math.random() * 50,
                radius: () => Math.random() * 350 + 200,
                duration: 4000,
                easing: 'easeInOutQuad',
                direction: 'alternate',
                loop: true,
                update: draw,
            });
        }

        gsap.to(canvas, {
            opacity: 1,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        draw();
        animateBlobs();

        return () => {
            anime.remove(blobs);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full blur-3xl -z-10" />;
};

export default FluidAnimation;