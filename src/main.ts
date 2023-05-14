const Game = {
  config: {
    height: 500,
    width: 500,
  },
  block: {
    config: {
      height: 50,
      width: 50,
    },
  },
};

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas?.getContext("2d");

  if (!canvas || !ctx) return;

  canvas.height = Game.config.height;
  canvas.width = Game.config.width;

  for (let j = 0; j < Game.config.height / Game.block.config.height; j++) {
    ctx.fillStyle = "hsl(0, 0, 0)";

    for (let i = 0; i < Game.config.width / Game.block.config.width; i++) {
      ctx.fillRect(
        i * Game.block.config.width,
        j * Game.block.config.height,
        Game.block.config.width,
        Game.block.config.height
      );
      // context.fillRect(i * Game.block.config.width, j * Game.block.config.height, Game.block.config.width, Game.block.config.height);
    }
  }

  ctx.lineWidth = 2
  ctx.strokeStyle = "hsl(360, 70%, 50%)"
  for (let j = 0; j < Game.config.height; j += Game.block.config.height) {

    ctx.beginPath()
    ctx.moveTo(0, j)
    ctx.lineTo(Game.config.width, j)
    ctx.stroke()

    for (let i = 0; i < Game.config.width; i += Game.block.config.width) {
      if (j !== 0)
        break

      ctx.beginPath()
      ctx.moveTo(i + 1, 0)
      ctx.lineTo(i + 1, Game.config.height)
      ctx.stroke()
    }
  }
});
