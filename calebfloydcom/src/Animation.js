
const animationFrameTime = 16.67; // ms

export function doAnimate(id, state) {
    let myCenterX = state.containerRect.x + (state.containerRect.width / 2);
    let myCenterY = state.containerRect.y + (state.containerRect.height / 2);
    let targetX = screen.width / 2;
    let targetY = screen.height / 2 + (screen.height / 6);
    let deltaX = targetX - myCenterX;
    let deltaY = targetY - myCenterY;
    let animationTime = 175; // ms
    let numFrames = Math.ceil(animationTime / animationFrameTime);
    let translateAmountPerFrameX = deltaX / numFrames;
    let translateAmountPerFrameY = deltaY / numFrames;
    let scaleAmountPerFrameX = 1.0 / numFrames;
    let scaleAmountPerFrameY = 1.0 / numFrames;
    let currentFrame = 0;
    let modalHandle = document.getElementById(id);
    let scaleAmountX = 0;
    let scaleAmountY = 0;

    modalHandle.style.left = myCenterX + "px";
    modalHandle.style.top = myCenterY + "px";
    animateToOpen();
    function animateToOpen() {
        // TODO: use transform and translate
        modalHandle.style.left = (Number(modalHandle.style.left.replace("px", '')) + translateAmountPerFrameX) + "px";
        modalHandle.style.top = (Number(modalHandle.style.top.replace("px", '')) - translateAmountPerFrameY)+ "px";
        modalHandle.style.transform = `scale(${scaleAmountX + scaleAmountPerFrameX}, ${scaleAmountY + scaleAmountPerFrameY})`;
        scaleAmountX += scaleAmountPerFrameX;
        scaleAmountY += scaleAmountPerFrameY;
        if(++currentFrame < numFrames) {
            requestAnimationFrame(animateToOpen);
        }
    }
}

export function doClose(id, callback) {
    console.log("doClose");
    let modalHandle = document.getElementById(id);
    let animationTime = 300; // ms
    let numFrames = Math.ceil(animationTime / animationFrameTime);
    let scaleAmountPerFrameX = 1.0 / numFrames;
    let scaleAmountPerFrameY = 1.0 / numFrames;
    let scaleAmountX = 1;
    let scaleAmountY = 1;
    let currentFrame = 0;

    animateToClose();
    function animateToClose() {
        modalHandle.style.transform = `scale(${scaleAmountX - scaleAmountPerFrameX}, ${scaleAmountY - scaleAmountPerFrameY})`;
        scaleAmountX -= scaleAmountPerFrameX;
        scaleAmountY -= scaleAmountPerFrameY;
        if(++currentFrame < numFrames) {
            requestAnimationFrame(animateToClose)
        } else {
            modalHandle.style.transform = `scale(0,0)`;
            callback();
        }
    }

    
    
}