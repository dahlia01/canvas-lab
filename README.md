<<<<<<< HEAD
# Canvas Drawing Lab

In our last class I showed you how to build a simple pong game using the [`<canvas>`](http://www.w3schools.com/tags/ref_canvas.asp) element. The `<canvas>` element is great for animated games, but it's also great for supporting random drawing like you can do in a raster-based paint program.

You goal for this lab is to create a simple line-drawing paint program. You will use the `<canvas>` element and its methods to accomplish this.

## Basic Steps

To build the basic version of this application, follow these steps

1. Declare a few variables to hold [a reference to the `<canvas>` element](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) as well as [it's `'2d'` drawing context](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext).
1. [Add an event listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) for the [`'mousedown'`](https://developer.mozilla.org/en-US/docs/Web/Events/mousedown) event on the canvas element. When that event occurs, use the 2D drawing context to [begin a path](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath) and [move the drawing pen](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo) to the coordinates where the user clicked. Remember that the `'mousedown'` event is passed an event object, which has the properties `clientX` and `clientY`. These properties are relative to the document area of entire browser window, so you will need to subtract the canvas element's [`offsetLeft`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft) and [`offsetTop`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop) properties to get the mouse coordinates relative to the canvas element.
1. Add another event listener for the [`'mousemove'`](https://developer.mozilla.org/en-US/docs/Web/Events/mousemove) event on the canvas element. When that occurs, **if the mouse button is currently down**, you should use the [`lineTo()`](https://developer.mozilla.org/en-US/docs/Web/Events/mousemove) method to extend the path to the current mouse coordinates, and call the [`stroke()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke) method to actually draw the line. 
    - **Hint:** The easiest way to tell if the mouse is down is to declare a boolean variable at a higher scope, set it to `true` during the `'mousedown'` event, and set it back to `false` during the `'mouseup'` event. If you want to handle multiple mouse buttons, you can make that variable a numeric value that you increment and decrement instead.
1. Speaking of the `'mouseup'` event, add another event listener for that event on the canvas element. When that event occurs, you should extend the path to the current mouse coordinates, and again call the canvas's `stroke()` method to draw the line. Then you should reset your variable so that you know that the mouse button is no longer down.

If you do this properly, you should be able to freeform draw on the canvas by clicking your mouse and dragging around on the canvas surface. The line color will default to black, and the line width will default to `1` pixel.

## Let the User Change the Line Color

The starter page contains a color input selector that users can click to select a different color than black. Add an event listener for the `'change'` event on that input element, and when that event occurs, set the canvas's [`'strokeStyle'`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle) property to the [new color value](http://www.w3schools.com/jsref/prop_color_value.asp).

If you do things correctly, the user should be able to use that color input to change the line color of future strokes. Existing strokes will remain with their existing color, as they are already drawn on the canvas.

## Add Another Input To Control Line Width

Now that you figured out how to let the user adjust line color, add another input that will let the user adjust [line width](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth).

And if you really want to get creative, let users also adjust other line styles, such as the [line end-cap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) or [line join style](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin).
=======
# INFO 343-E In-Class Code

Students should fork this repo into their own accounts so that they can code along with me and commit/push their code to their own GitHub accounts.

# Pulling Updates

Periodically I will ask you to pull new commits from this original repo to pick up new directories and file stubs. To do this, follow the appropriate set of instructions below.

## On A Lab Machine?

The lab machines reset each time you log out, so you need to setup your environment from scratch every time:

```bash
$ git config --global user.name "your name"
$ git config --global user.email "your email"
$ git config --global core.editor nano

$ git clone <your-forked-repo-url>
$ cd info343-class-code

$ git remote add upstream https://github.com/drstearns/info343-class-code.git

$ git pull upstream master
```

The last command will typically trigger a merge commit and put you into the nano editor to confirm the commit message. Hit `ctrl+x` to exit the editor and return to the command prompt.

## On Your Own Laptop?

 If you are on your own laptop, you should do these commands only once:

```bash
$ git config --global user.name "your name"
$ git config --global user.email "your email"
$ git config --global core.editor nano

$ git clone <your-forked-repo-url>
$ cd info343-class-code

$ git remote add upstream https://github.com/drstearns/info343-class-code.git
```

Then each time you need to pull from the my original repo, run these commands:

```bash
# change into your local repo directory
$ cd info343-class-code

# check for any uncommitted changes
# and commit if necessary
$ git status

# pull new commits from the upstream repo
$ git pull upstream master
```
>>>>>>> c84f5159f0e16814099c42488b45f5b0c2a8d351
