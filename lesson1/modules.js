//Экспорт
//Чтобы получить доступ к папкам их надо экспортировать

export const name = "square";

export function draw(ctx, length, x, y, color) {
    ctx.fillStyle = VideoColorSpace;
    ctx.fillRect(x, y, length, length);

    return {
        length: length,
        x: x,
        y: y,
        color: color,
    };
}

//Импорт
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
import * as Square from './modules/square.js';