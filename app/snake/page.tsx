"use client";
import {SnakeGame} from './snake.js'
import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function Page() {
    let mapSizeX = 50;
    let mapSizeY = 50;
    let tileSize = 10; // Minimum map tile size (in pixel)
    const [score, setScore] = useState(0);
    const gameRef = useRef<SnakeGame | null>(null);
    const [grid, setGrid] = useState<number[][]>([]);
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        const game = new SnakeGame(mapSizeX, mapSizeY, 500, (changes) => {
            changes.forEach(({ x, y, value }) => {
                setGrid(prev => {
                    const next = prev.map(row => [...row]);
                    next[y][x] = value;
                    return next;
                });
            });

            setScore(game.getScore());

            if (game.isGameOver()) {
                setIsGameOver(true);
                console.log("Game Over");
            }
        });

        gameRef.current = game;
        setGrid(game.getMap().map(row => [...row]));

        const keyMap: Record<string, number> = {
            ArrowLeft: 0, ArrowUp: 1, ArrowRight: 2, ArrowDown: 3
        };
        const handleKey = (e: KeyboardEvent) => {
            const dir = keyMap[e.key];
            if (dir !== undefined) gameRef.current?.setDirection(dir);
        };
        window.addEventListener('keydown', handleKey);

        return () => {
            game.stop();
            gameRef.current = null;
            window.removeEventListener('keydown', handleKey);
        }
    }, []);

    return(
        <div className = "relative bg-[#435979] border-4 border-gray-600"
            style={{
            width: mapSizeX * tileSize,
            height: mapSizeY * tileSize,
            display: 'grid',
            gridTemplateColumns: `repeat(${mapSizeY}, 1fr)`,
            gridTemplateRows: `repeat(${mapSizeX}, 1fr)`
        }}>
            {grid.flatMap((row, y) =>
                row.map((cell, x) => {
                    const isHead = gameRef.current?.snake.pos[0][0] === x && 
                                gameRef.current?.snake.pos[0][1] === y;
                    return (
                        <div
                            key={`${x}-${y}`}
                            className={`w-full h-full border-[0.5px] border-gray-700/30 ${
                                isHead ? 'bg-green-400 rounded-sm' :
                                cell === 1 ? 'bg-green-600' :
                                cell === 2 ? 'bg-red-500 rounded-full scale-75' : ''
                            }`}
                        />
                    );
                })
            )}
        </div>
    )
    
}



