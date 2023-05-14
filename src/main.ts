const Game = {
  config: {
    dimensions: {
      height: 500,
      width: 500
    }
  },
  block: {
    config: {
      dimensions: {
        height: 50,
        width: 50,
        border: 2
      },
      colors: {
        fill: 'hsl(0, 0%, 0%)',
        accent: 'hsl(360, 70%, 50%)'
      }
    }
  }
}

let canvas: HTMLCanvasElement = {} as HTMLCanvasElement
let ctx: CanvasRenderingContext2D = {} as CanvasRenderingContext2D

window.addEventListener('DOMContentLoaded', () => {
  const _canvas = document.querySelector<HTMLCanvasElement>('#canvas')
  const _ctx = _canvas?.getContext('2d')

  if (!_canvas || !_ctx) return
  canvas = _canvas
  ctx = _ctx

  canvas.height = Game.config.dimensions.height
  canvas.width = Game.config.dimensions.width

  // canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('click', handleMouseClick);

  drawGrid()
})

function handleMouseMove(event: MouseEvent) {
  const { width: cellWidth, height: cellHeight } = Game.block.config.dimensions

  // Calculate the mouse position relative to the canvas
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Calculate the grid cell coordinates
  const cellX = Math.floor(mouseX / cellWidth);
  const cellY = Math.floor(mouseY / cellHeight);

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the grid
  drawGrid();

  // Draw a highlight at the current mouse position
  ctx.fillStyle = Game.block.config.colors.accent
  ctx.fillRect(cellX * cellWidth, cellY * cellHeight, cellWidth, cellHeight);
}

function handleMouseClick(event: MouseEvent) {
  const { width: cellWidth, height: cellHeight } = Game.block.config.dimensions

  // Calculate the mouse position relative to the canvas
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Calculate the grid cell coordinates
  const cellX = Math.floor(mouseX / cellWidth);
  const cellY = Math.floor(mouseY / cellHeight);

  // Draw a highlight at the current mouse position
  ctx.fillStyle = Game.block.config.colors.accent
  ctx.fillRect(cellX * cellWidth, cellY * cellHeight, cellWidth, cellHeight);
}

function drawGrid() {
  for (
    let j = 0;
    j < Game.config.dimensions.height / Game.block.config.dimensions.height;
    j++
  ) {
    for (
      let i = 0;
      i < Game.config.dimensions.width / Game.block.config.dimensions.width;
      i++
    ) {
      ctx.fillStyle = Game.block.config.colors.accent
      ctx.fillRect(
        i * Game.block.config.dimensions.width,
        j * Game.block.config.dimensions.height,
        Game.block.config.dimensions.width,
        Game.block.config.dimensions.height
      )

      ctx.fillStyle = Game.block.config.colors.fill
      ctx.fillRect(
        i * Game.block.config.dimensions.width +
        Game.block.config.dimensions.border / 2,
        j * Game.block.config.dimensions.height +
        Game.block.config.dimensions.border / 2,
        Game.block.config.dimensions.width -
        Game.block.config.dimensions.border,
        Game.block.config.dimensions.height -
        Game.block.config.dimensions.border
      )
    }
  }
}
