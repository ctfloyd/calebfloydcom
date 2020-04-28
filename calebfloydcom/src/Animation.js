
const animationFrameTime = 16.67; // ms

export function doAnimate(id, state) {
    let myCenterX = state.containerRect.x + (state.containerRect.width / 2);
    let myCenterY = state.containerRect.y + (state.containerRect.height / 2);

    let viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    let targetX;
    let targetY;
    if(viewPortWidth <= 600) {
        targetX = 0.26 * viewPortWidth;
        targetY = 0.4 * viewPortHeight + window.pageYOffset;
    } else if(viewPortWidth > 600 && viewPortWidth <= 767) {
        targetX = 0.3 * viewPortWidth;
        targetY = 0.3 * viewPortHeight + window.pageYOffset;
    } else if(viewPortWidth >= 768 && viewPortWidth <= 991) {
        targetX = 0.3 * viewPortWidth;
        targetY = 0.35 * viewPortHeight + window.pageYOffset;
    } else if (viewPortWidth >= 992 && viewPortWidth <= 1199) {
        targetX = 0.37 * viewPortWidth;
        targetY = 0.35 * viewPortHeight + window.pageYOffset;
    } else {
        targetX = viewPortWidth / 2;
        targetY = viewPortHeight / 2;
    }

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
    let scaleAmountX = scaleAmountPerFrameX;
    let scaleAmountY = scaleAmountPerFrameY;
    let translateAmountX = translateAmountPerFrameX;
    let translateAmountY = translateAmountPerFrameY;

    modalHandle.style.left = myCenterX + "px";
    modalHandle.style.top = myCenterY + "px";
    console.log(targetX, myCenterX);
    requestAnimationFrame(animateToOpen);
    function animateToOpen() {
        // TODO: use transform and translate
        // modalHandle.style.left = (Number(modalHandle.style.left.replace("px", '')) + translateAmountPerFrameX) + "px";
        // modalHandle.style.top = (Number(modalHandle.style.top.replace("px", '')) - translateAmountPerFrameY)+ "px";
        //modalHandle.style.transform = `scale(${scaleAmountX + scaleAmountPerFrameX}, ${scaleAmountY + scaleAmountPerFrameY})`;
        //modalHandle.style.transform = "translate(" + translateAmountX + "," + translateAmountY + ") scale(" + scaleAmountX + "," + scaleAmountY + ")";
        modalHandle.style.transform = `translate(${translateAmountX}px,${translateAmountY}px) scale(${scaleAmountX},${scaleAmountY})`;
        scaleAmountX += scaleAmountPerFrameX;
        scaleAmountY += scaleAmountPerFrameY;
        translateAmountX += translateAmountPerFrameX;
        translateAmountY += translateAmountPerFrameY;
        if(++currentFrame < numFrames) {
            requestAnimationFrame(animateToOpen);
        }
    }
}

export function doClose(id, callback) {
    let modalHandle = document.getElementById(id);
    let animationTime = 300; // ms
    let numFrames = Math.ceil(animationTime / animationFrameTime);
    let scaleAmountPerFrameX = 1.0 / numFrames;
    let scaleAmountPerFrameY = 1.0 / numFrames;
    let scaleAmountX = 1;
    let scaleAmountY = 1;
    let currentFrame = 0;

    let originalTransform = modalHandle.style.transform.split(' ');
    originalTransform = originalTransform[0] + originalTransform[1];
    originalTransform = originalTransform.replace("translate(", "").replace(/px/gi, "").replace(/\)/gi, "");
    let coords = originalTransform.split(",");
    let transformX = coords[0];
    let transformY = coords[1];

    requestAnimationFrame(animateToClose);
    function animateToClose() {
        modalHandle.style.transform = `translate(${transformX}px,${transformY}px) scale(${scaleAmountX - scaleAmountPerFrameX}, ${scaleAmountY - scaleAmountPerFrameY})`;
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