document.addEventListener('DOMContentLoaded', () => {
    const marker = document.querySelector('a-marker');
    const model1 = document.querySelector('#model1');
    const model2 = document.querySelector('#model2');
    const unionButton = document.querySelector('#unionButton');
    const toggleModelButton = document.querySelector('#toggleModelButton');
    
    let currentModel = model1;
    let initialTouch = null;
    let isZooming = false;
  
    const toggleModel = () => {
      if (currentModel === model1) {
        model1.setAttribute('visible', 'false');
        model2.setAttribute('visible', 'true');
        currentModel = model2;
      } else {
        model2.setAttribute('visible', 'false');
        model1.setAttribute('visible', 'true');
        currentModel = model1;
      }
    };
  
    const unionModels = () => {
      model1.setAttribute('visible', 'true');
      model2.setAttribute('visible', 'true');
      currentModel = null; // No specific current model
    };
  
    const handleTouchStart = (event) => {
      if (event.touches.length === 1) {
        initialTouch = { x: event.touches[0].pageX, y: event.touches[0].pageY };
        isZooming = false;
      } else if (event.touches.length === 2) {
        initialTouch = {
          distance: Math.hypot(
            event.touches[0].pageX - event.touches[1].pageX,
            event.touches[0].pageY - event.touches[1].pageY
          ),
        };
        isZooming = true;
      }
    };
  
    const handleTouchMove = (event) => {
      if (!currentModel) return;
  
      if (isZooming && event.touches.length === 2) {
        const currentDistance = Math.hypot(
          event.touches[0].pageX - event.touches[1].pageX,
          event.touches[0].pageY - event.touches[1].pageY
        );
        const scale = currentModel.getAttribute('scale').x * (currentDistance / initialTouch.distance);
        currentModel.setAttribute('scale', `${scale} ${scale} ${scale}`);
        initialTouch.distance = currentDistance;
      } else if (event.touches.length === 1) {
        const deltaX = event.touches[0].pageX - initialTouch.x;
        const deltaY = event.touches[0].pageY - initialTouch.y;
  
        const rotation = currentModel.getAttribute('rotation');
        currentModel.setAttribute('rotation', {
          x: rotation.x + deltaY * 0.1,
          y: rotation.y + deltaX * 0.1,
          z: rotation.z,
        });
  
        initialTouch = { x: event.touches[0].pageX, y: event.touches[0].pageY };
      }
    };
  
    marker.addEventListener('markerFound', () => {
      console.log('Marker found!');
    });
  
    marker.addEventListener('markerLost', () => {
      console.log('Marker lost!');
      // Reset model scale and rotation
      model1.setAttribute('scale', '0.5 0.5 0.5');
      model1.setAttribute('rotation', '0 0 0');
      model2.setAttribute('scale', '0.5 0.5 0.5');
      model2.setAttribute('rotation', '0 0 0');
    });
  
    toggleModelButton.addEventListener('click', toggleModel);
    unionButton.addEventListener('click', unionModels);
  
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const marker = document.querySelector('a-marker');
    const model1 = document.querySelector('#model1');
    const model2 = document.querySelector('#model2');
    const unionButton = document.querySelector('#unionButton');
    const toggleModelButton = document.querySelector('#toggleModelButton');
    
    let currentModel = model1;
    let initialTouch = null;
    let isZooming = false;
  
    const toggleModel = () => {
      if (currentModel === model1) {
        model1.setAttribute('visible', 'false');
        model2.setAttribute('visible', 'true');
        currentModel = model2;
      } else {
        model2.setAttribute('visible', 'false');
        model1.setAttribute('visible', 'true');
        currentModel = model1;
      }
    };
  
    const unionModels = () => {
      model1.setAttribute('visible', 'true');
      model2.setAttribute('visible', 'true');
      currentModel = null; // No specific current model
    };
  
    const handleTouchStart = (event) => {
      if (event.touches.length === 1) {
        initialTouch = { x: event.touches[0].pageX, y: event.touches[0].pageY };
        isZooming = false;
      } else if (event.touches.length === 2) {
        initialTouch = {
          distance: Math.hypot(
            event.touches[0].pageX - event.touches[1].pageX,
            event.touches[0].pageY - event.touches[1].pageY
          ),
        };
        isZooming = true;
      }
    };
  
    const handleTouchMove = (event) => {
      if (!currentModel) return;
  
      if (isZooming && event.touches.length === 2) {
        const currentDistance = Math.hypot(
          event.touches[0].pageX - event.touches[1].pageX,
          event.touches[0].pageY - event.touches[1].pageY
        );
        const scale = currentModel.getAttribute('scale').x * (currentDistance / initialTouch.distance);
        currentModel.setAttribute('scale', `${scale} ${scale} ${scale}`);
        initialTouch.distance = currentDistance;
      } else if (event.touches.length === 1) {
        const deltaX = event.touches[0].pageX - initialTouch.x;
        const deltaY = event.touches[0].pageY - initialTouch.y;
  
        const rotation = currentModel.getAttribute('rotation');
        currentModel.setAttribute('rotation', {
          x: rotation.x + deltaY * 0.1,
          y: rotation.y + deltaX * 0.1,
          z: rotation.z,
        });
  
        initialTouch = { x: event.touches[0].pageX, y: event.touches[0].pageY };
      }
    };
  
    marker.addEventListener('markerFound', () => {
      console.log('Marker found!');
    });
  
    marker.addEventListener('markerLost', () => {
      console.log('Marker lost!');
      // Reset model scale and rotation
      model1.setAttribute('scale', '0.5 0.5 0.5');
      model1.setAttribute('rotation', '0 0 0');
      model2.setAttribute('scale', '0.5 0.5 0.5');
      model2.setAttribute('rotation', '0 0 0');
    });
  
    toggleModelButton.addEventListener('click', toggleModel);
    unionButton.addEventListener('click', unionModels);
  
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
  });
    